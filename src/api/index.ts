const config = {
    baseUrl: 'http://localhost:3000'
}

export async function fetchAllNotes() {
    return fetch(`${config.baseUrl}/`);
}