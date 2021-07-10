import {st} from 'state-types';

let mutations: st.mutations = {
    addNotes(state, payload) {
        state.notes = payload;
        return state;
    },
}

export default mutations;