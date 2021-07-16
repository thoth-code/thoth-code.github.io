import Component from "../lib/component";
import Note from "../components/Note";

export default class Main extends Component {
    constructor() {
        super({
            element: document.getElementById('whiteboard') as HTMLElement,
        });
        this.store.dispatch('getAllNotes');
    };

    render() {
        const self = this.element;
        const before = document.getElementsByClassName('note');
        while(before.length !== 0) {
            before.item(0)?.remove();
        }
        
        this.store.state.notes.map(noteContent => {
            const note = new Note(noteContent);
            self.appendChild(note.render());
        });
    };
}