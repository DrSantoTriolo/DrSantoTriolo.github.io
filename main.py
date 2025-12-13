import os
import sys
import argparse
from datetime import datetime
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# --- Configuration ---

# Central API Key retrieval
# This looks for an environment variable named 'OPENAI_API_KEY'
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

SYSTEM_PROMPT_FILE_PATH = "prompts/system_prompt"
OUTPUT_DIR = "_roll"

# List of tasks to execute with specific model configurations
TASKS = {
    "frontier": {
        "prompt_file": "prompts/frontier_labs.txt",
        "title_prefix": "Frontier Labs",
        "filename_suffix": "News",
        "tags": ["technology", "news"],
        "model_config": {
            "model": "gpt-5.2",
            "text": {
                "format": {"type": "text"},
                "verbosity": "medium"
            },
            "reasoning": {
                "effort": "high",
                "summary": "auto"
            },
            "tools": [
                {
                    "type": "web_search",
                    "user_location": {"type": "approximate"},
                    "search_context_size": "medium"
                }
            ],
            "store": True,
            "include": ["reasoning.encrypted_content", "web_search_call.action.sources"]
        }
    },
    "behaviour": {
        "prompt_file": "prompts/behaviour_study",
        "title_prefix": "Behaviour Study",
        "filename_suffix": "Behaviour",
        "tags": ["psychology", "study"],
        "model_config": {
            "model": "gpt-5.2-light", 
            "text": {
                "format": {"type": "text"},
                "verbosity": "verbose" 
            },
            "reasoning": {
                "effort": "medium", 
                "summary": "auto"
            },
            "tools": [],
            "store": False,
            "include": []
        }
    }
}

AUTHOR = "modelname"

# ---------------------

def get_client():
    """Returns a configured OpenAI client."""
    if not OPENAI_API_KEY:
        print("Error: OPENAI_API_KEY environment variable is missing.")
        # We exit here because without a key, we can't do anything.
        sys.exit(1)
    return OpenAI(api_key=OPENAI_API_KEY)

def load_prompt(filepath):
    """Reads the prompt content from a specific file."""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return f.read().strip()
    except FileNotFoundError:
        print(f"Error: Prompt file not found at {filepath}")
        return None

def generate_content(client, prompt_text, system_prompt_text, config):
    """Sends request to OpenAI API using the specific configuration."""
    try:
        # Construct the arguments dynamically from the config
        response = client.responses.create(
            input=[
                {"role": "system", "content": system_prompt_text},
                {"role": "user", "content": prompt_text}
            ],
            **config
        )
        return response.output
    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return None

def save_markdown_file(content_body, title_prefix, filename_suffix, tags):
    """Constructs frontmatter and saves the file."""
    if not content_body:
        return

    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    filename = f"{date_str}-{filename_suffix}.md"
    filepath = os.path.join(OUTPUT_DIR, filename)

    tags_str = ", ".join(tags)
    tags_yaml_format = f"[{tags_str}]"

    frontmatter = f"""---
title: "{title_prefix} for {date_str}"
date: {date_str}
tags: {tags_yaml_format}
author: "{AUTHOR}"
---

"""

    full_content = frontmatter + content_body

    # Ensure output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    try:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(full_content)
        print(f"Success: Generated {filepath}")
    except Exception as e:
        print(f"Error writing file {filepath}: {e}")

def run_task(client, system_prompt_text, task_key):
    task = TASKS.get(task_key)
    if not task:
        print(f"Error: Task '{task_key}' not found.")
        return

    print(f"\nProcessing task: {task['title_prefix']}...")
    prompt_path = task['prompt_file']
    prompt_text = load_prompt(prompt_path)
    
    if prompt_text:
        llm_response = generate_content(client, prompt_text, system_prompt_text, task['model_config'])
        if llm_response:
            save_markdown_file(
                llm_response, 
                task['title_prefix'], 
                task['filename_suffix'], 
                task['tags']
            )
        else:
            print(f"Failed to generate content for {prompt_path}")
    else:
        print(f"Skipping task due to missing prompt file: {prompt_path}")

def main():
    parser = argparse.ArgumentParser(description="Generate content using OpenAI API.")
    parser.add_argument("--task", type=str, choices=TASKS.keys(), help="Specific task to run (frontier or behaviour)")
    args = parser.parse_args()

    print("Starting Generator...")
    
    client = get_client()
    system_prompt_text = load_prompt(SYSTEM_PROMPT_FILE_PATH)
    if not system_prompt_text:
        print("System prompt missing. Exiting.")
        return

    if args.task:
        run_task(client, system_prompt_text, args.task)
    else:
        # Run all tasks if no specific task is requested
        for key in TASKS:
            run_task(client, system_prompt_text, key)

if __name__ == "__main__":
    main()