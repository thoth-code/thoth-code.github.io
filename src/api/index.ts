import { st } from 'state-types';

const config = {
    baseUrl: 'http://localhost:3000'
}

export async function getAllNotes() {
    return fetch(`${config.baseUrl}/all`);
}

export async function postNote(note: st.note) {
    return fetch(`${config.baseUrl}/new`, {
        method: 'POST',
        body: JSON.stringify(note),
    });
}

export async function postUserInfo(userInfo: st.userInfo) {
    return fetch(`${config.baseUrl}/signin`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
    })
}