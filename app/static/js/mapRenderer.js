import { trip } from "./trip.js";

let markers = [];
let route = null;

export function refreshMap(map) {

    // Remove existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Remove existing route
    if (route) {
        map.removeLayer(route);
        route = null;
    }

    const coords = [];

    trip.waypoints.forEach((stop, index) => {

        const marker = L.marker([stop.lat, stop.lon])
            .bindPopup(`<b>${index + 1}. ${stop.name}</b>`);

        marker.addTo(map);

        markers.push(marker);

        coords.push([stop.lat, stop.lon]);

    });

    if (coords.length > 1) {

        route = L.polyline(coords, {

            weight: 4

        });

        route.addTo(map);

    }

}