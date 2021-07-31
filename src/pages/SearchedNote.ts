import { st } from "state-types";
import Component from "../domain/component";

export default class SearchedNotes extends Component{
    constructor() {
        super({
            subscribe: 'notesChange'
        });
    }

    dispatch() {
        window.$store.dispatch('getAllNotes', window.location.search)
    }

    onStateChange() {
        const before = this.children;
        while(before.length !== 0) {
            before.item(0)?.remove();
        }
        
        window.$store.state["notes"].map(noteContent => {
            const refined = noteContent as st.note;
            const note = document.createElement('code-note');
            note.classList.add('note');
            note.setAttribute('title', refined.title);
            note.innerHTML = refined.code;
            note.setAttribute('tag', refined.tag);
            this.appendChild(note);
        });
    };
}