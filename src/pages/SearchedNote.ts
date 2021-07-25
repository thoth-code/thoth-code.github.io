import Component from "../domain/component";

export default class SearchedNotes extends Component{
    constructor() {
        super({
            subscribe: 'stateChange'
        });
    }

    dispatch() {
        window.$store.dispatch('getAllNotes', window.location.pathname)
    }

    render() {
        const before = this.children;
        while(before.length !== 0) {
            before.item(0)?.remove();
        }
        
        window.$store.state.notes.map(noteContent => {
            const note = document.createElement('code-note');
            note.classList.add('note');
            note.setAttribute('title', noteContent.title);
            note.innerHTML = noteContent.code;
            note.setAttribute('tag', noteContent.tag);
            this.appendChild(note);
        });
    };
}