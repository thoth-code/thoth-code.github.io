import { st } from 'state-types';

const config = {
    baseUrl: 'http://localhost:5000/api',
}

if(process.env.NODE_ENV === 'production') {
    config.baseUrl = 'http://saltwalks.ddns.net:5000/api';
}

export async function getAllNotes(query: st.reqParamQuery) {
    return fetch(`${config.baseUrl}/notes${query}`);
}

export async function postNote(note: st.reqBody) {
    return fetch(`${config.baseUrl}/note`, {
        method: 'POST',
        body: JSON.stringify(note),
        credentials: 'include',
    });
}

export async function postAuth(userInfo: st.reqBody) {
    return fetch(`${config.baseUrl}/signin`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
}

export async function postUserInfo(userInfo: st.reqBody) {
    return fetch(`${config.baseUrl}/signup`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
    });
}

export async function putNote(note: st.reqBody) {
    return fetch(`${config.baseUrl}/note`, {
        method: 'PUT',
        body: JSON.stringify(note),
        credentials: 'include',
    });
}

export async function deleteNote(param: st.reqParamQuery) {
    return fetch(`${config.baseUrl}/note${param}`, {
        method: 'DELETE',
        credentials: 'include',
    })
}

export async function postMyBoard(note: st.reqBody) {
    return fetch(`${config.baseUrl}/myboard`, {
        method: 'POST',
        body: JSON.stringify(note),
        credentials: 'include',
    });
}

export async function getMyBoard() {
    return fetch(`${config.baseUrl}/myboard`, {
        method: "GET",
        credentials: 'include',
    });
}

export async function deleteMyBoard(param: st.reqParamQuery) {
    return fetch(`${config.baseUrl}/myboard${param}`, {
        method: 'DELETE',
        credentials: 'include',
    })
}