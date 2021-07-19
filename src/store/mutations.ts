import {st} from 'state-types';

const ACCESS_TOKEN_EXP = 60*2;
const REFRESH_TOKEN_EXP = 60*5;

let mutations: st.mutations = {
    addNotes(state, payload: st.note[]) {
        state.notes = payload;
        return state;
    },
    addAuth(state, payload: st.authToken) {
        console.log(payload);
        document.cookie = `accessToken=${payload.accessToken}; path=/; max-age=${ACCESS_TOKEN_EXP}`;
        document.cookie = `refreshToken=${payload.refreshToken}; path=/; max-age=${REFRESH_TOKEN_EXP}`;
        window.$router.push('/');
        return state;
    }
}

export default mutations;