import {st} from 'state-types';

const ACCESS_TOKEN_EXP = 60*2;
const REFRESH_TOKEN_EXP = 60*5;

let mutations: st.mutations = {
    addNotes(state, payload) {
        state.notes = <st.note[]>payload;
        return state;
    },
    addAuth(state, payload) {
        const refined = payload as st.authToken;
        document.cookie = `accessToken=${refined.accessToken}; path=/; max-age=${ACCESS_TOKEN_EXP}`;
        document.cookie = `refreshToken=${refined.refreshToken}; path=/; max-age=${REFRESH_TOKEN_EXP}`;
        window.$router.push('/');
        return state;
    },
    signUp(state, payload) {
        const refined = payload as st.signUpResult;
        if(refined.error !== null) {
            alert('Sign Up Rejected');
            window.$router.push('/signup');
        } else {
            alert('Sign Up Success');
            window.$router.push('/');
        }
        return state;
    }
}

export default mutations;