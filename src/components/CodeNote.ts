import { st } from "state-types";
import Component from "../domain/component";
import * as codeUtils from '../tools/codeUtils';

export default class CodeNote extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<h1></h1>
                <pre><code></code></pre>
                <span></span>
                <div></div>`;
    }

    propsHandler(props: string) {
        const idx = parseInt(this.getAttribute('note-idx') as string);
        const note = window.$store.state["notes"][idx] as st.note;

        const title = this.querySelector('h1') as HTMLElement;
        title.innerText = note.title;

        const code = this.querySelector('code') as HTMLElement;
        code.innerHTML = codeUtils.noHTML(note.code);

        const tag = this.querySelector('span') as HTMLElement;
        tag.innerText = note.tag.join(" ");

        const ref = this.querySelector('div') as HTMLElement;
        ref.innerHTML = note.ref.map(row => {
            return `<a href="${row}" class="ref-link" target="_blank">${row}</a>`;
        }).join("<br/>");
    }
}