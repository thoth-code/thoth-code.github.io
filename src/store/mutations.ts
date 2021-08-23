import {st} from 'state-types';

let mutations: st.mutations = {
    assignNotes(notes, payload) {
        notes = <st.note[]>payload;
        return notes;
    },
}

export default mutations;