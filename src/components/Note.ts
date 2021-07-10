import Component from "../lib/component";

class Note extends Component {
    constructor() {
        super({
            element: document.getElementById('whiteboard')
        });
    };

    render() {
        let self = this.element
        if(self instanceof HTMLElement) {
            self.innerHTML = this.store.state.notes.map(note => `
                <article>
                    <h1>${note.title}</h1>
                    <p>${note.code}</p>
                    <span>${note.title}</span>
                </article>
            `).join();
        }
    };
}

const note = new Note();
export default note;