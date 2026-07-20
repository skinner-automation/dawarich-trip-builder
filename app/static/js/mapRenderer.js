import { currentProject } from "./trip.js";

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
    const waypoints = currentProject?.waypoints ?? [];

    waypoints.forEach((stop, index) => {

        const marker = L.marker([stop.lat, stop.lon])
            .bindPopup(`<b>${index + 1}. ${stop.name}</b>`);

        marker.addTo(map);

        markers.push(marker);

        coords.push([stop.lat, stop.lon]);

    });

    if (coords.length > 1) {

        route = L.polyline(coords, {

            weight: 4,
            color: "#ff00c8"
        
        });

        route.addTo(map);

    }
    // Auto-fit the map to the trip

    if (waypoints.length === 1) {

        map.setView(
            [waypoints[0].lat, waypoints[0].lon],
            12
        );

    } else if (waypoints.length > 1) {

        const bounds = L.latLngBounds(
            waypoints.map(w => [w.lat, w.lon])
        );

        map.fitBounds(bounds, {
            padding: [40, 40]
        });

    }
}