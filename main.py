import os
import sys
from datetime import datetime
from openai import OpenAI

# Configuration
PROMPT_FILE_PATH = "prompts/frontier_labs.txt"
OUTPUT_DIR = "content"
TAGS = ["technology", "news"]
AUTHOR = "modelname"

def load_prompt(filepath):
    """Reads the prompt content from a specific file."""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return f.read().strip()
    except FileNotFoundError:
        print(f"Error: Prompt file not found at {filepath}")
        sys.exit(1)

def generate_content(prompt_text):
    """Sends request to OpenAI API."""
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Error: OPENAI_API_KEY environment variable is missing.")
        sys.exit(1)

    client = OpenAI(api_key=api_key)

    try:
        response = client.chat.completions.create(
            model="gpt-4o",  # Or "gpt-3.5-turbo"
            messages=[
                {"role": "system", "content": "You are a helpful assistant that generates markdown content."},
                {"role": "user", "content": prompt_text}
            ],
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        sys.exit(1)

def save_markdown_file(content_body):
    """Constructs frontmatter and saves the file."""
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    filename = f"{date_str}-News.md"
    filepath = os.path.join(OUTPUT_DIR, filename)

    # Format tags for YAML (e.g., [ai, news])
    tags_str = ", ".join(TAGS)
    tags_yaml_format = f"[{tags_str}]"

    # Construct Frontmatter
    frontmatter = f"""---
title: "Frontier Labs for {date_str}"
date: {date_str}
tags: {tags_yaml_format}
author: "{AUTHOR}"
---

"""

    full_content = frontmatter + content_body

    # Ensure output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Write file
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(full_content)
    
    print(f"Success: Generated {filepath}")

def main():
    print("Starting Frontier Labs Generator...")
    
    # 1. Load Prompt
    prompt_text = load_prompt(PROMPT_FILE_PATH)
    
    # 2. Generate Content
    llm_response = generate_content(prompt_text)
    
    # 3. Save File
    save_markdown_file(llm_response)

if __name__ == "__main__":
    main()