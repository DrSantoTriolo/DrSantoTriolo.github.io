import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

class ClientFactory:
    @staticmethod
    def get_client(provider: str):
        provider = provider.lower()
        if provider == "openai":
            api_key = os.getenv("OPENAI_API_KEY_NEWSLETTERS")
            if not api_key:
                raise ValueError("OPENAI_API_KEY_NEWSLETTERS not found in environment variables")
            return OpenAI(api_key=api_key)
        
        elif provider == "xai":
            api_key = os.getenv("XAI_API_KEY_NEWSLETTERS")
            if not api_key:
                # Fallback to check if user put xAI key in OpenAI var or just raise
                # But strictly speaking we should look for XAI_API_KEY or allow overrides
                raise ValueError("XAI_API_KEY_NEWSLETTERS not found in environment variables")
            
            return OpenAI(
                api_key=api_key,
                base_url="https://api.x.ai/v1"
            )
        
        else:
            raise ValueError(f"Unknown provider: {provider}")
