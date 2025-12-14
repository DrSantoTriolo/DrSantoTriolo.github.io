import asyncio
import argparse
import os
import logging
from datetime import datetime
from src.utils import load_config, setup_logging, read_file, save_file
from src.client_factory import ClientFactory
from src.generator import ContentGenerator
from src.models import TaskConfig

logger = logging.getLogger(__name__)

async def process_task(task_name, task_data, dry_run=False):
    try:
        logger.info(f"Processing task: {task_name}")
        
        # Validate task config
        config = TaskConfig(**task_data)
        
        # Read prompts
        prompt_text = read_file(config.prompt_file)
        system_prompt = read_file(config.system_prompt_file)
        
        if dry_run:
            logger.info(f"[Dry Run] Would generate content for {task_name} using {config.provider}/{config.model}")
            logger.info(f"[Dry Run] System Prompt: {system_prompt[:50]}...")
            logger.info(f"[Dry Run] User Prompt: {prompt_text[:50]}...")
            return

        # Initialize client and generator
        client = ClientFactory.get_client(config.provider)
        generator = ContentGenerator(client)
        
        # Generate content
        # Run in executor because client calls are synchronous
        loop = asyncio.get_running_loop()
        content = await loop.run_in_executor(
            None, 
            lambda: generator.generate_content(
                provider=config.provider,
                model=config.model,
                prompt_text=prompt_text,
                system_prompt=system_prompt,
                reasoning_effort=config.reasoning_effort,
                verbosity=config.verbosity
            )
        )
        
        # Save output with date prefix
        date_prefix = datetime.now().strftime("%Y-%m-%d")
        output_path = os.path.join("_roll", f"{date_prefix}-{task_name}.md")
        save_file(output_path, content)
        logger.info(f"Task {task_name} completed. Output saved to {output_path}")

    except Exception as e:
        logger.error(f"Failed to process task {task_name}: {e}")

async def main():
    setup_logging()
    
    parser = argparse.ArgumentParser(description="Run generation tasks")
    parser.add_argument("--dry-run", action="store_true", help="Print plan without calling APIs")
    parser.add_argument("--task", type=str, help="Run a specific task by name")
    args = parser.parse_args()

    try:
        config = load_config()
        all_tasks = config.get("tasks", {})
        
        if not all_tasks:
            logger.warning("No tasks found in config/tasks.yaml")
            return

        # Determine which tasks to run
        if args.task:
            if args.task not in all_tasks:
                logger.error(f"Task '{args.task}' not found in configuration. Available tasks: {list(all_tasks.keys())}")
                return
            tasks_to_run = {args.task: all_tasks[args.task]}
        else:
            tasks_to_run = all_tasks

        # Create tasks for parallel execution
        coroutines = [
            process_task(name, data, args.dry_run) 
            for name, data in tasks_to_run.items()
        ]
        
        await asyncio.gather(*coroutines)
        
    except Exception as e:
        logger.error(f"Application error: {e}")

if __name__ == "__main__":
    asyncio.run(main())
