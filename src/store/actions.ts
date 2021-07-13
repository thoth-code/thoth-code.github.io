import { st } from "state-types";
import * as api from "../api";

const actions: st.actions = {
    getAllNotes(context) {
        api.getAllNotes()
        .then(response => {
            if(response.body !== null) {
                response.json().then(data => {
                    context.commit('addNotes', data);
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
                api.getAllNotes()
                .then(getRes => {
                    if(getRes.body !== null) {
                        getRes.json().then(data => {
                            context.commit('addNotes', data);
                        });
                    }
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }
}

export default actions;