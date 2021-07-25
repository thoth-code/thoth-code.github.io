import { st } from "state-types";
import * as api from "../api";

const actions: st.actions = {
    getAllNotes(context, data) {
        data = data === '/' ? '/note' : data;
        api.getAllNotes(data as st.reqParam)
        .then(response => {
            if(response.body !== null) {
                response.json().then(json => {
                    context.commit('addNotes', json as st.note[]);
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
                console.log(postRes.headers);
                
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
            window.$router.push('/');
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
            window.$router.push('/');
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
            window.$router.push('/signup');
        });
    },
}

export default actions;