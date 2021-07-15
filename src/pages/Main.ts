import Component from "../lib/component";
import Note from "../components/Note";

class Main extends Component {
    constructor() {
        super({
            element: document.getElementById('whiteboard') as HTMLElement,
            subscribe: 'stateChange',
        });
        this.store.dispatch('getAllNotes');
    };

    render() {
        const self = this.element as HTMLElement;
        const before = document.getElementsByClassName('note');
        while(before.length !== 0) {
            before.item(0)?.remove();
        }
        
        this.store.state.notes.map(note => {
            const noteToShow = new Note(note);
            self.appendChild(noteToShow.render());
        });
    };
}

export default Main;