import { st } from "state-types";
import Component from "../domain/component";
import * as codeUtils from '../tools/codeUtils';
import * as clipboardUtils from '../tools/clipboardUtils';

export default class CodeNote extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<div class="note-controll">
                    <button type="button" class="note-controll-btn copy-code"><i class="bi bi-clipboard"></i></button>
                    <button type="button" class="note-controll-btn to-my-board"><i class="bi bi-box-arrow-in-up-right"></i></button>
                    <button type="button" class="note-controll-btn edit-note"><i class="bi bi-eraser"></i></button>
                    <button type="button" class="note-controll-btn delete-note"><i class="bi bi-trash"></i></button>
                </div>
                <h1 class="note-title"></h1>
                <pre><code class="note-code"></code></pre>
                <span class="note-tags"></span>
                <div class="note-refs">
                    <button type="button" class="collapse-btn"><i class="bi bi-caret-down-fill"></i> References</button>
                    <div class="collapse-content" style="max-height: 0px;"></div>
                </div>`;
    }

    propsHandler(props: string) {
        const idx = parseInt(this.getAttribute('note-idx') as string);
        const note = window.$store.state["notes"][idx] as st.note;

        const title = this.querySelector('.note-title') as HTMLElement;
        title.innerText = note.title;

        const code = this.querySelector('.note-code') as HTMLElement;
        code.innerHTML = codeUtils.noHTML(note.code);

        const tag = this.querySelector('.note-tags') as HTMLElement;
        tag.innerText = note.tag.join(" ");

        if(note.ref.length === 0) {
            const ref = this.querySelector('.note-refs') as HTMLElement;
            ref.style.display = "none";
        } else {
            const ref = this.querySelector('.collapse-content') as HTMLElement;
            ref.innerHTML = note.ref.map(row => {
                return `<a href="${row}" class="ref-link" target="_blank">${row}</a>`;
            }).join("<br/>");
        }
    }

    addEvents() {
        this.querySelector(".collapse-btn")?.addEventListener("click", event => {
            const self = event.target as HTMLElement;
            self.classList.toggle("active");
            const content = self.nextElementSibling as HTMLElement;
            if(content.style.maxHeight !== "0px"){
                content.style.maxHeight = "0px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });

        this.querySelector('.copy-code')?.addEventListener("click", event => {
            event.preventDefault();
            const code = this.querySelector(".note-code") as HTMLElement;
            clipboardUtils.copy(code.innerText);
        });
    }
}