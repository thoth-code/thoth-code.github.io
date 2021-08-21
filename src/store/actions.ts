import { st } from "state-types";
import * as api from "../api";

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
        api.postNote(data as st.note)
        .then(postRes => {
            if(postRes.body !== null) {
                postRes.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Note Created');
                    }
                })
            } else {
                throw new Error('Note Creation Failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        }).finally(() => {
            window.$router.pushWithRefresh('/');
        });
    },
    postAuth(context, data) {
        api.postAuth(data as st.userInfo)
        .then(postRes => {
            if(postRes.body !== null) {
                postRes.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        if(document.cookie.split('=').find(row => row.startsWith('accessToken'))) {
                            alert('Sign In Success');
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
        }).finally(() => {
            window.$router.pushWithRefresh('/');
        });
    },
    postUserInfo(context, data) {
        api.postUserInfo(data as st.userInfo)
        .then(postRes => {
            if(postRes.body !== null) {
                postRes.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Sign Up Success');
                    }
                });
            } else {
                throw new Error('Sign Up Failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        }).finally(() => {
            window.$router.push('/signin');
        });
    },
    putNote(context, data) {
        api.putNote(data as st.note)
        .then(res => {
            if(res.body !== null) {
                res.json().then(json => {
                    const refined = json as st.error;
                    if(refined.error !== null) {
                        throw new Error(refined.error);
                    } else {
                        alert('Note Editted');
                    }
                });
            } else {
                throw new Error('Note Edit Failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        }).finally(() => {
            window.$router.pushWithRefresh('/');
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
                    }
                });
            } else {
                throw new Error('Note delete failure');
            }
        }).catch(err => {
            alert(err);
            console.error(err);
        }).finally(() => {
            window.$router.pushWithRefresh('/');
        });
    },
    postMyBoard(context, data) {
        api.postMyBoard(data as st.note)
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