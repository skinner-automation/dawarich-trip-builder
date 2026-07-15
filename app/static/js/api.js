// FastAPI calls
export async function searchPlace(query) {

    const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
    );

    return await response.json();

}