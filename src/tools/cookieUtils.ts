export function isAcceptTokenAvailable() {
    return isCookieAvailable('accessToken');
}

export function deleteAccessToken() {
    deleteCookie('accessToken');
}

// Ref: https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie
function deleteCookie(name: string) {
    if( get_cookie( name ) ) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`
    }
  }

// Ref: https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie
function get_cookie(name: string){
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

function isCookieAvailable(cookieName: string) {
    if(document.cookie.split('=').find(row => row.startsWith(cookieName))) {
        return true;
    } else {
        return false;
    }
}