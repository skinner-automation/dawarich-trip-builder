import httpx

from app.config import PHOTON_URL


async def search(query: str):

    async with httpx.AsyncClient() as client:

        response = await client.get(
            f"{PHOTON_URL}/api",
            params={
                "q": query
            },
            timeout=10
        )

        response.raise_for_status()

        return response.json()