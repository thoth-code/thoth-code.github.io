import Component from "../domain/component";

export default class SearchedNotes extends Component{
    constructor() {
        super({
            subscribe: 'stateChange'
        });
    }

    get dispatch() {
        const dispathName = this.getAttribute('dispatch') as string;
        return dispathName;
    }

    render() {
        const before = this.children;
        while(before.length !== 0) {
            before.item(0)?.remove();
        }
        
        this.$store.state.notes.map(noteContent => {
            const note = document.createElement('code-note');
            note.classList.add('note');
            note.setAttribute('title', noteContent.title);
            note.innerHTML = noteContent.code;
            note.setAttribute('tag', noteContent.tag);
            this.appendChild(note);
        });
    };
}