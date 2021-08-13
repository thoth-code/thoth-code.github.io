import { st } from "state-types";
import Component from "../domain/component";
import * as codeUtils from '../tools/codeUtils';
import * as clipboardUtils from '../tools/clipboardUtils';

export default class CodeNote extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<div class="note-controll-box">
                    <button type="button" class="note-controll-btn to-my-board"><i class="bi bi-box-arrow-in-up-right"></i></button>
                    <button type="button" class="note-controll-btn edit-note"><i class="bi bi-eraser"></i></button>
                    <button type="button" class="note-controll-btn delete-note"><i class="bi bi-trash"></i></button>
                </div>
                <h1 class="note-title"></h1>
                <div class="note-code-box">
                    <div class="copy-code-btn-box">
                        <button type="button" class="note-controll-btn copy-code-btn"><i class="bi bi-clipboard"></i></button>
                    </div>
                    <pre><code class="note-code"></code></pre>
                </div>
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

        const copyBtn = this.querySelector('.copy-code-btn') as HTMLElement;
        const copyBtnBox = this.querySelector('.copy-code-btn-box') as HTMLElement;
        copyBtn.addEventListener("click", event => {
            event.preventDefault();
            const code = this.querySelector(".note-code") as HTMLElement;
            clipboardUtils.copy(code.innerText);
            copyBtn.innerHTML = `<i class="bi bi-clipboard-check"></i>`;
        });

        this.querySelector('.note-code-box')?.addEventListener('mouseover', () => {
            copyBtnBox.style.display = "block";
        });

        this.querySelector('.note-code-box')?.addEventListener('mouseleave', () => {
            copyBtnBox.style.display = "none";
            copyBtn.innerHTML = `<i class="bi bi-clipboard"></i>`;
        });

        const idx = parseInt(this.getAttribute('note-idx') as string);
        const note = window.$store.state["notes"][idx] as st.note;

        this.querySelector(".edit-note")?.addEventListener("click", event => {
            event.preventDefault();
            // TODO: move edit note page
            console.warn("TODO: move edit note page");
            window.$store.dispatch("putNote", {
                nid: note.nid,
                uid: note.uid,
                title: "modified-title",
                code: "modified-code",
                tag: ["modified-lang"],
                ref: ["modified-ref"],
            });
        });

        this.querySelector(".delete-note")?.addEventListener("click", event => {
            event.preventDefault();
            window.$store.dispatch("deleteNote", `/${note.nid}`);
        });

        this.querySelector(".to-my-board")?.addEventListener("click", event => {
            event.preventDefault();
            // TODO: to my board request body
            console.warn("TODO: to my board request body");
            window.$store.dispatch("postMyBoard", note);
        });
    }
}