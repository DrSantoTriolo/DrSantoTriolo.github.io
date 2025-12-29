import logging
import traceback

logger = logging.getLogger(__name__)

class ContentGenerator:
    def __init__(self, client):
        self.client = client

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
                reasoning_summary = kwargs.get("reasoning_summary", "auto")
                verbosity = kwargs.get("verbosity", "medium")

                # Enable streaming to prevent network infrastructure timeouts
                # This keeps the connection active by sending data chunks
                stream = self.client.responses.create(
                    model=model,
                    input=[
                        {
                            "role": "developer",
                            "content": [
                                {
                                    "type": "input_text",
                                    "text": system_prompt
                                }
                            ]
                        },
                        {
                            "role": "user",
                            "content": [
                                {
                                    "type": "input_text",
                                    "text": prompt_text
                                }
                            ]
                        }
                    ],
                    tools=[
                        {
                            "type": "web_search",
                            "user_location": {
                                "type": "approximate"
                            },
                            "search_context_size": "high"
                        }
                    ],
                    text={
                        "format": {
                            "type": "text"
                        },
                        "verbosity": verbosity
                    },
                    reasoning={
                        "effort": reasoning_effort,
                        "summary": reasoning_summary
                    },
                    stream=True
                )

                # Collect streamed content chunks from delta events
                content_parts = []
                for event in stream:
                    if event.type == "response.output_text.delta":
                        content_parts.append(event.delta)
                return "".join(content_parts)

            # Condition B: xAI / Legacy Models (Chat Completions API)
            else:
                logger.info(f"Using Chat Completions API for provider {provider}, model {model}")

                messages = [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt_text}
                ]

                # Enable streaming to prevent network infrastructure timeouts
                # This keeps the connection active by sending data chunks
                stream = self.client.chat.completions.create(
                    model=model,
                    messages=messages,
                    stream=True,
                    timeout=960
                )

                # Collect streamed content chunks
                content_parts = []
                for chunk in stream:
                    if chunk.choices and chunk.choices[0].delta.content:
                        content_parts.append(chunk.choices[0].delta.content)

                return "".join(content_parts)

        except Exception as e:
            logger.error(f"Error generating content: {e}")
            logger.error(traceback.format_exc())  # Log full traceback to identify ReadTimeout, ConnectTimeout, or APIError
            raise
