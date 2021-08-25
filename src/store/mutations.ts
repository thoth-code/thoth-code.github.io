import {st} from 'state-types';

let mutations: st.mutations = {
    assignNotes(notes, payload) {
        notes = <st.note[]>payload;
        return notes;
    },
    addNotes(notes, payload) {
        const result = notes.concat(payload);
        return result;
    }
}

export default mutations;