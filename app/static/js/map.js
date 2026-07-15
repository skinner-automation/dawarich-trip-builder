import { search } from "./search.js";

const map = L.map("map").setView([51.505,-0.09],5);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom:19,
        attribution:"© OpenStreetMap"
    }
).addTo(map);

let marker = null;

async function doSearch() {

    const query =
        document.getElementById("searchBox").value;

    if (!query)
        return;

    const data = await search(query);

    if (!data.features.length)
        return;

    const feature = data.features[0];

    const lat =
        feature.geometry.coordinates[1];

    const lon =
        feature.geometry.coordinates[0];

    if (marker)
        map.removeLayer(marker);

    marker = L.marker([lat,lon])
        .addTo(map);

    marker.bindPopup(
        feature.properties.name
    );

    map.setView([lat,lon],12);

}

document
    .getElementById("searchButton")
    .addEventListener("click",doSearch);