import { st } from 'state-types';

const config = {
    baseUrl: 'http://localhost:3000'
}

export async function getAllNotes(param: st.reqParam) {
    return fetch(`${config.baseUrl}/notes${param}`);
}

export async function postNote(note: st.note) {
    return fetch(`${config.baseUrl}/note`, {
        method: 'POST',
        body: JSON.stringify(note),
    });
}

export async function postAuth(userInfo: st.userInfo) {
    return fetch(`${config.baseUrl}/signin`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
}

export async function postUserInfo(userInfo: st.userInfo) {
    return fetch(`${config.baseUrl}/signup`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
    });
}