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

        if(window.location.pathname === "/") {
            const welcome = document.createElement("guide-note");
            welcome.setAttribute("title", "welcome");
            welcome.classList.add("note");
            this.appendChild(welcome);

            const howto = document.createElement("guide-note");
            howto.setAttribute("title", "write-note");
            howto.classList.add("note");
            this.appendChild(howto);
        }
        
        window.$store.state["notes"].map((x, idx) => {
            const note = document.createElement('code-note');
            note.setAttribute('note-idx', idx.toString());
            note.classList.add("note")
            this.appendChild(note);
        });
    };
}