import { trip } from "./trip.js";

export function refreshTripList() {

    const list = document.getElementById("tripList");

    list.innerHTML = "";

    if (trip.waypoints.length === 0) {
        list.innerHTML = "<p>No stops yet.</p>";
        return;
    }

    trip.waypoints.forEach((stop, index) => {

        const card = document.createElement("div");

        card.className = "trip-card";

        card.innerHTML = `
            <strong>${index + 1}. ${stop.name}</strong><br>
            ${stop.country || ""}<br>
            ${stop.lat.toFixed(5)}, ${stop.lon.toFixed(5)}
        `;

        list.appendChild(card);

    });

}