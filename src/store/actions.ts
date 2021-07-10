import { st } from "state-types";
import { fetchAllNotes } from "../api";

const actions: st.actions = {
    getAllNotes(context) {
        fetchAllNotes().then(response => {
            if(response.body !== null) {
                response.json().then(data => {
                    context.commit('addNotes', data)
                });
            }
        }).catch(err => {
            console.error(err);
        })
    }
}

export default actions;