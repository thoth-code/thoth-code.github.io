export function isAcceptTokenAvailable() {
    return isCookieAvailable('accessToken');
}

export function isCookieAvailable(cookieName: string) {
    if(document.cookie.split('=').find(row => row.startsWith(cookieName))) {
        return true;
    } else {
        return false;
    }
}