import Component from "../lib/component";
import * as strconv from '../modules/parseCode'

class Note extends Component {
    constructor() {
        super({
            element: document.getElementById('whiteboard')
        });
    };

    render() {
        const self = this.element as HTMLElement;
        const before = document.getElementsByClassName('note');
        while(before.length !== 0) {
            before.item(0)?.remove();
        }
        
        this.store.state.notes.map(note => {
            const article = document.createElement('article');
            article.classList.add('note');

            const title = document.createElement('h1');
            title.classList.add('note-title');
            title.innerText = note.title;
            article.appendChild(title);

            const code = document.createElement('p');
            code.classList.add('note-code');
            code.innerHTML = `<pre><code>${strconv.noHTML(note.code)}</code></pre>`;
            article.appendChild(code);

            const tag = document.createElement('span');
            tag.classList.add('note-tag');
            tag.innerText = note.tag;
            article.appendChild(tag);

            self.appendChild(article)
        });
    };
}

const note = new Note();
export default note;