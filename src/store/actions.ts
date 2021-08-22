import { st } from "state-types";
import * as api from "../api";
import * as cookieUtils from "../tools/cookieUtils";

const actions: st.actions = {
    getAllNotes(context, data) {
        api.getAllNotes(data as st.reqParamQuery)
        .then(response => {
            if(response.body !== null) {
                response.json().then(json => {
                    context.commit("notes", 'addNotes', json as st.note[]);
                });
            }
        }).catch(err => {
            console.error(err);
        });
    },
    postNote(context, data) {
        api.postNote(data as st.reqBody)
        .then(postRes => {
            if(postRes.body !== null) {
                postRes.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Note Created');
                        window.$router.pushWithRefresh('/');
                    }
                })
            } else {
                throw new Error('Note Creation Failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        });
    },
    postAuth(context, data) {
        api.postAuth(data as st.reqBody)
        .then(postRes => {
            if(postRes.body !== null) {
                postRes.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        if(cookieUtils.isAcceptTokenAvailable()) {
                            alert('Sign In Success');
                            window.$router.pushWithRefresh('/');
                        } else {
                            throw new Error('Sign In Failure');
                        }
                    }
                });
            } else {
                throw new Error('Sign In Failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        });
    },
    postUserInfo(context, data) {
        api.postUserInfo(data as st.reqBody)
        .then(postRes => {
            if(postRes.body !== null) {
                postRes.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Sign Up Success');
                        window.$router.push('/signin');
                    }
                });
            } else {
                throw new Error('Sign Up Failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        });
    },
    putNote(context, data) {
        api.putNote(data as st.reqBody)
        .then(res => {
            if(res.body !== null) {
                res.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Note Editted');
                        window.$router.pushWithRefresh('/');
                    }
                });
            } else {
                throw new Error('Note Edit Failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        });
    },
    deleteNote(context, data) {
        api.deleteNote(data as st.reqParamQuery)
        .then(res => {
            if(res.body !== null) {
                res.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Note deleted');
                        window.$router.pushWithRefresh('/');
                    }
                });
            } else {
                throw new Error('Note delete failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        });
    },
    postMyBoard(context, data) {
        api.postMyBoard(data as st.reqBody)
        .then(res => {
            if(res.body !== null) {
                res.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Note attached');
                    }
                });
            } else {
                throw new Error('Note attach failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        });
    },
    getMyBoard(context) {
        api.getMyBoard()
        .then(response => {
            if(response.body !== null) {
                response.json().then(json => {
                    context.commit("notes", 'addNotes', json as st.note[]);
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }
}

export default actions;