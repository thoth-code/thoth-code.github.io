const config = {
    baseUrl: 'http://localhost:3000'
}

export async function getAllNotes() {
    return fetch(`${config.baseUrl}/all`);
}