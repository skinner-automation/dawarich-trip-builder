export const trip = {
    name: "New Trip",
    description: "",
    waypoints: []
};

export function addWaypoint(place) {

    trip.waypoints.push({

        id: Date.now().toString() + Math.random().toString(16).slice(2),

        ...place

    });

}

export function removeWaypoint(index) {

    trip.waypoints.splice(index,1);

}

export function clearTrip() {

    trip.waypoints = [];

}