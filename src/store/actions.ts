import { st } from "state-types";
import * as api from "../api";
import * as cookieUtils from "../tools/cookieUtils";
import { errors, throwResponseError } from "../tools/errorUtils";

const actions: st.actions = {
    getInitNotes(context, data) {
        api.getSearchNotes(data as st.reqParamQuery)
        .then(response => {
            if(response.ok) {
                response.json().then((json: st.note[]) => {
                    context.commit("notes", 'assignNotes', json);
                }).catch(errors("Cannot load notes"));
            } else {
                throwResponseError(response);
            }
        }).catch(errors("Cannot load notes"));
    },
    getMoreNotes(context, data) {
        api.getSearchNotes(data as st.reqParamQuery)
        .then(response => {
            if(response.ok) {
                response.json().then((json: st.note[]) => {
                    context.commit("notes", 'addNotes', json);
                }).catch(errors("Cannot load notes"));
            } else {
                throwResponseError(response);
            }
        }).catch(errors("Cannot load notes"));
    },
    postNote(context, data) {
        api.postNote(data as st.reqBody)
        .then(postRes => {
            if(postRes.ok) {
                postRes.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        alert('Note Created');
                        window.$router.pushWithRefresh('/');
                    }
                }).catch(errors("Note creation failure"));
            } else {
                throwResponseError(postRes)
            }
        }).catch(errors("Note creation failure"));
    },
    postAuth(context, data) {
        api.postAuth(data as st.reqBody)
        .then(postRes => {
            if(postRes.ok) {
                postRes.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        if(cookieUtils.isAccessTokenAvailable()) {
                            alert('Sign In Success');
                            window.$router.pushWithRefresh('/');
                        } else {
                            throw new Error('Cannot save cookie');
                        }
                    }
                }).catch(errors("Sign in failure"));
            } else {
                throwResponseError(postRes);
            }
        }).catch(errors("Sign in failure"));
    },
    postUserInfo(context, data) {
        api.postUserInfo(data as st.reqBody)
        .then(postRes => {
            if(postRes.ok) {
                postRes.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        alert('Sign Up Success');
                        window.$router.push('/signin');
                    }
                }).catch(errors("Sign up failure"));
            } else {
                throwResponseError(postRes);
            }
        }).catch(errors("Sign up failure"));
    },
    putNote(context, data) {
        api.putNote(data as st.reqBody)
        .then(res => {
            if(res.ok) {
                res.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        alert('Note Editted');
                        window.$router.pushWithRefresh('/');
                    }
                }).catch(errors("Note edit failure"));
            } else {
                throwResponseError(res);
            }
        }).catch(errors("Note edit failure"));
    },
    deleteNote(context, data) {
        api.deleteNote(data as st.reqParamQuery)
        .then(res => {
            if(res.ok) {
                res.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        alert('Note deleted');
                        window.$router.pushWithRefresh('/');
                    }
                }).catch(errors("Note delete failure"));
            } else {
                throwResponseError(res);
            }
        }).catch(errors("Note delete failure"));
    },
    postMyBoard(context, data) {
        api.postMyBoard(data as st.reqBody)
        .then(res => {
            if(res.ok) {
                res.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        alert('Note attached');
                    }
                }).catch(errors("Note attach failure"));
            } else {
                throwResponseError(res);
            }
        }).catch(errors("Note attach failure"));
    },
    getInitMyBoard(context, data) {
        api.getMyBoard(data as st.reqParamQuery)
        .then(response => {
            if(response.ok) {
                response.json().then((json: st.note[]) => {
                    context.commit("notes", 'assignNotes', json);
                }).catch(errors("Cannot load my board"));
            } else {
                throwResponseError(response);
            }
        }).catch(errors("Cannot load my board"));
    },
    getMoreMyBoard(context, data) {
        api.getMyBoard(data as st.reqParamQuery)
        .then(response => {
            if(response.ok) {
                response.json().then((json: st.note[]) => {
                    context.commit("notes", 'addNotes', json);
                }).catch(errors("Cannot load my board"));
            } else {
                throwResponseError(response);
            }
        }).catch(errors("Cannot load my board"));
    },
    deleteMyBoard(context, data) {
        api.deleteMyBoard(data as st.reqParamQuery)
        .then(res => {
            if(res.ok) {
                res.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        alert('Note detached');
                        window.$router.pushWithRefresh('/myboard');
                    }
                }).catch(errors("Note detach failure"));
            } else {
                throwResponseError(res);
            }
        }).catch(errors("Note detach failure"));
    },
    putMyBoard(context, data) {
        api.putMyBoard(data as st.reqBody)
        .then(res => {
            if(res.ok) {
                res.json().then((json: st.error) => {
                    if(json.error !== null) {
                        throw new Error(json.error);
                    } else {
                        alert('Note Editted');
                        window.$router.pushWithRefresh('/');
                    }
                }).catch(errors("Note edit failure"));
            } else {
                throwResponseError(res);
            }
        }).catch(errors("Note edit failure"));
    },
}

export default actions;