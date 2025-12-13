import os
import yaml
import logging

def load_config(config_path="config/tasks.yaml"):
    with open(config_path, "r") as f:
        return yaml.safe_load(f)

def setup_logging():
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )

def read_file(path):
    with open(path, "r") as f:
        return f.read()

def save_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)
