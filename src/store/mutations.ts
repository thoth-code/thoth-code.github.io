import {st} from 'state-types';

let mutations: st.mutations = {
    addNotes(notes, payload) {
        notes = <st.note[]>payload;
        return notes;
    },
}

export default mutations;