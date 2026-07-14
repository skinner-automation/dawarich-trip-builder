from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from app.api.search import router as search_router

app = FastAPI(title="Dawarich Trip Builder")

app.include_router(
    search_router,
    prefix="/api"
)
app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static"
)

templates = Jinja2Templates(directory="app/templates")

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "title": "Dawarich Trip Builder",
        },
    )
