// Search Photon and display search results

import { searchPlace } from "./api.js";

export async function search(query) {

    return await searchPlace(query);

}

