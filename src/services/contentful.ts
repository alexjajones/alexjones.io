import {createClient} from 'contentful'

import {ACCESS_TOKEN, SPACE_ID} from "../core/consts";

export const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

export function fetchEntriesForContentType(content_type = "blogPost") {
    return client.getEntries({content_type})
        .then((response) => response.items)
        .catch((error) => {
            console.log(`\nError occurred while fetching Entries for ${content_type}:`);
            console.error(error)
        })
}

export function fetchEntry(id: string) {
    return client.getEntry(id)
        .then((response) => response)
        .catch((error) => {
            console.log(`\nError occurred while fetching Entry for ${id}:`);
            console.error(error)
        })
}