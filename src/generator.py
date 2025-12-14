import logging
from tenacity import retry, stop_after_attempt, wait_exponential

logger = logging.getLogger(__name__)

class ContentGenerator:
    def __init__(self, client):
        self.client = client

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
    def generate_content(self, provider, model, prompt_text, system_prompt, **kwargs):
        """
        Generates content based on the provider (OpenAI vs xAI) and model.
        """
        try:
            # Condition A: OpenAI GPT-5.2 (Responses API)
            if provider == "openai" and "gpt-5.2" in model:
                logger.info(f"Using OpenAI Responses API for model {model}")
                
                # Extract specific GPT-5.2 parameters from kwargs
                reasoning_effort = kwargs.get("reasoning_effort", "medium")
                verbosity = kwargs.get("verbosity", "medium")

                response = self.client.responses.create(
                    model=model,
                    instructions=system_prompt,
                    input=prompt_text,
                    reasoning={"effort": reasoning_effort},
                    text={"verbosity": verbosity}
                )

                # Fix for the parsing bug: Iterate properly
                content_parts = []
                if hasattr(response, 'output'):
                    for item in response.output:
                        if item.type == "message":
                            for content in item.content:
                                if content.type == "output_text":
                                    content_parts.append(content.text)
                return "".join(content_parts)

            # Condition B: xAI / Legacy Models (Chat Completions API)
            else:
                logger.info(f"Using Chat Completions API for provider {provider}, model {model}")
                
                messages = [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt_text}
                ]
                
                response = self.client.chat.completions.create(
                    model=model,
                    messages=messages
                )
                
                return response.choices[0].message.content

        except Exception as e:
            logger.error(f"Error generating content: {e}")
            raise
