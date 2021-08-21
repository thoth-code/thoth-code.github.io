import { st } from 'state-types';

const config = {
    baseUrl: 'http://saltwalks.ddns.net:3000',
}

export async function getAllNotes(query: st.reqParamQuery) {
    return fetch(`${config.baseUrl}/api/notes${query}`);
}

export async function postNote(note: st.reqBody) {
    return fetch(`${config.baseUrl}/api/note`, {
        method: 'POST',
        body: JSON.stringify(note),
        credentials: 'include',
    });
}

export async function postAuth(userInfo: st.reqBody) {
    return fetch(`${config.baseUrl}/api/signin`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
}

export async function postUserInfo(userInfo: st.reqBody) {
    return fetch(`${config.baseUrl}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
    });
}

export async function putNote(note: st.reqBody) {
    return fetch(`${config.baseUrl}/api/note`, {
        method: 'PUT',
        body: JSON.stringify(note),
        credentials: 'include',
    });
}

export async function deleteNote(param: st.reqParamQuery) {
    return fetch(`${config.baseUrl}/api/note${param}`, {
        method: 'DELETE',
        credentials: 'include',
    })
}

export async function postMyBoard(note: st.reqBody) {
    return fetch(`${config.baseUrl}/api/myboard`, {
        method: 'POST',
        body: JSON.stringify(note),
        credentials: 'include',
    });
}

export async function getMyBoard() {
    return fetch(`${config.baseUrl}/api/myboard`, {
        method: "GET",
        credentials: 'include',
    });
}