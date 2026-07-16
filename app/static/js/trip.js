export const trip = {
    name: "New Trip",
    description: "",
    waypoints: []
};

export function addWaypoint(place) {
    trip.waypoints.push(place);
}

export function removeWaypoint(index) {
    trip.waypoints.splice(index, 1);
}

export function clearTrip() {
    trip.waypoints = [];
}