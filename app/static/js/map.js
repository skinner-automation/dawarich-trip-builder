var map = L.map('map').setView([51.505, -0.09], 5);

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom:19
    }
).addTo(map);

var marker = null;

async function searchPlace(){

    let q=document.getElementById("search").value;

    let response=await fetch("/api/search?q="+encodeURIComponent(q));

    let results=await response.json();

    if(results.features.length===0)
        return;

    let feature=results.features[0];

    let lat=feature.geometry.coordinates[1];
    let lon=feature.geometry.coordinates[0];

    if(marker)
        map.removeLayer(marker);

    marker=L.marker([lat,lon]).addTo(map);

    map.setView([lat,lon],13);

}