export const projects = [];

export let currentProject = null;

export function createProject(name = "New Trip") {

    const project = {

        id: Date.now().toString(),

        name,

        waypoints: []

    };

    projects.push(project);

    currentProject = project;

    return project;
}

export function addWaypoint(stop) {

    if (!currentProject)
        createProject();

    currentProject.waypoints.push({

        id: Date.now().toString(),

        ...stop

    });

}