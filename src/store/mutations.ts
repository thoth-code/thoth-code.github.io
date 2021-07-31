import {st} from 'state-types';

let mutations: st.mutations = {
    addNotes(notes, payload) {
        notes = <st.note[]>payload;
        return notes;
    },
    addFlags(flags, payload) {
        flags = <st.flag[]>payload;
        return flags
    }
}

export default mutations;