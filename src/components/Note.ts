import { st } from "state-types";
import Component from "../lib/component";
import * as strconv from '../modules/parseCode';

export default class Note extends Component {
    props: st.note;

    constructor(props: st.note) {
        super({
            element: document.createElement('article') as HTMLElement,
        });
        this.element.classList.add('note')
        this.props = props;
    };

    render() {
        const titleBox = document.createElement('h1');
        titleBox.classList.add('note-title');
        titleBox.innerText = this.props.title;
        this.element.appendChild(titleBox);

        const codeBox = document.createElement('p');
        codeBox.classList.add('note-code');
        codeBox.innerHTML = `<pre><code>${strconv.noHTML(this.props.code)}</code></pre>`;
        this.element.appendChild(codeBox);

        const tagBox = document.createElement('span');
        tagBox.innerText = this.props.tag;
        this.element.appendChild(tagBox);

        return this.element;
    };
}