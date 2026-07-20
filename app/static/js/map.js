import { refreshMap } from "./mapRenderer.js";
import { search } from "./search.js";
import { addWaypoint } from "./trip.js";
import { refreshTripList } from "./ui.js";
console.log("map.js loaded");

const map = L.map("map").setView([51.505,-0.09],5);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom:19,
        attribution:"© OpenStreetMap"
    }
).addTo(map);



async function doSearch() {
 console.log("Search clicked");
    const query =
        document.getElementById("searchBox").value;

    if (!query)
        return;

    const data = await search(query);
console.log(data);
    if (!data.features.length)
        return;

    const feature = data.features[0];

    const lat =
        feature.geometry.coordinates[1];

    const lon =
        feature.geometry.coordinates[0];

        
console.log("Adding waypoint");
addWaypoint({

    name: feature.properties.name,

    country: feature.properties.country,

    lat: lat,

    lon: lon

});

refreshTripList();
 //   map.setView([lat,lon],12);

map.setView([lat, lon], 12);

refreshMap(map);
console.log("Refreshing map");

}

document
    .getElementById("searchButton")
    .addEventListener("click",doSearch);