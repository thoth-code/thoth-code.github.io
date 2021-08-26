import { deleteAccessToken } from "./cookieUtils";

export const getAlertMsgOf: {[index: string]: string} = {
    "UserNotFoundException": "Wrong email or password",
    "EmailAlreadyExistsException": "Email already exists",
    "VerificationException": "Plz sign in first",
    "NoteNotFoundException": "Note not exists",
    "ScrabNotFoundException": "Clipped note not exists",
    "ScrabAlreadyExistsException": "You already clipped this note",
}

export function isHandled(exception: string): boolean {
    return typeof getAlertMsgOf[exception] === "string";
}

export function handle(exception: string) {
    if(isHandled(exception)) {
        alert(getAlertMsgOf[exception]);
        switch(exception) {
            case "VerificationException" :
                deleteAccessToken();
                window.$router.pushWithRefresh("/signin");
        }
        return null;
    } else {
        return new Error(exception);
    }
}