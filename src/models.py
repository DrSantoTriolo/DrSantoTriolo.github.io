from pydantic import BaseModel, Field
from typing import Optional

class TaskConfig(BaseModel):
    prompt_file: str
    system_prompt_file: str
    provider: str
    model: str
    reasoning_effort: Optional[str] = "medium"
    verbosity: Optional[str] = "medium"
    title: Optional[str] = None  # Title for Jekyll front matter
