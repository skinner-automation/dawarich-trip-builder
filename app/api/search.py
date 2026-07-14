from fastapi import APIRouter

from app.services.photon import search

router = APIRouter()


@router.get("/search")
async def photon_search(q: str):
    return await search(q)