import Component from "../lib/component";

class Note extends Component {
    constructor() {
        super({
            element: document.getElementById('whiteboard')
        });
    };

    render() {
        const self = this.element as HTMLElement;
        this.store.state.notes.map(note => {
            const article = document.createElement('article');

            const title = document.createElement('h1');
            title.innerText = '    ' + note.title;
            article.appendChild(title);

            const code = document.createElement('p');
            code.innerText = note.code;
            article.appendChild(code);

            const tag = document.createElement('span');
            tag.innerText = note.tag;
            article.appendChild(tag);

            self.appendChild(article)
        });
    };
}

const note = new Note();
export default note;