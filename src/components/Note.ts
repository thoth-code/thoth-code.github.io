import Component from "../lib/component";
import * as strconv from '../modules/parseCode';
import { st } from 'state-types';

class Note extends Component {
    constructor(props: st.note) {
        super({
            element: document.createElement('article') as HTMLElement,
            props: props,
        });
        this.element.classList.add('note');
    };

    render() {
        const target = this.element;
        const note = this.props as st.note;
        const title = document.createElement('h1');
        title.classList.add('note-title');
        title.innerText = note.title;
        target.appendChild(title);

        const code = document.createElement('p');
        code.classList.add('note-code');
        code.innerHTML = `<pre><code>${strconv.noHTML(note.code)}</code></pre>`;
        target.appendChild(code);

        const tag = document.createElement('span');
        tag.innerText = note.tag;
        target.appendChild(tag);

        return target;
    };
}

export default Note;