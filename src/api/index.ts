import { st } from 'state-types';

const config = {
    baseUrl: 'http://localhost:5000',
}

if(process.env.NODE_ENV === 'production') {
    config.baseUrl = 'http://saltwalks.ddns.net:5000';
}

export async function getAllNotes(query: st.reqParamQuery) {
    return fetch(`${config.baseUrl}/api/notes${query}`);
}

export async function postNote(note: st.note) {
    return fetch(`${config.baseUrl}/api/note`, {
        method: 'POST',
        body: JSON.stringify(note),
    });
}

export async function postAuth(userInfo: st.userInfo) {
    return fetch(`${config.baseUrl}/api/signin`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
}

export async function postUserInfo(userInfo: st.userInfo) {
    return fetch(`${config.baseUrl}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
    });
}

export async function getUserFlags() {
    return fetch(`${config.baseUrl}/api/flags`)
}

export async function putNote(note: st.note) {
    return fetch(`${config.baseUrl}/api/note`, {
        method: 'PUT',
        body: JSON.stringify(note),
    });
}

export async function deleteNote(param: st.reqParamQuery) {
    return fetch(`${config.baseUrl}/api/note${param}`, {
        method: 'DELETE',
    })
}

export async function postMyBoard(note: st.note) {
    return fetch(`${config.baseUrl}/api/myboard`, {
        method: 'POST',
        body: JSON.stringify(note),
    });
}