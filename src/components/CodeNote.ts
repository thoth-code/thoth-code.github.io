import { st } from "state-types";
import Component from "../domain/component";
import * as clipboardUtils from '../tools/clipboardUtils';
import { getUID, isAcceptTokenAvailable } from "../tools/cookieUtils";
import hljs from "highlight.js";
import { noHTML } from "../tools/codeUtils";

export default class CodeNote extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<div class="note-controll-box"><div class="note-controll-btns" style="display: none;"></div></div>
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
        // Note contents
        const idx = parseInt(this.getAttribute('note-idx') as string);
        const note = window.$store.state["notes"][idx] as st.note;

        const title = this.querySelector('.note-title') as HTMLElement;
        title.innerText = note.title;

        const tag = this.querySelector('.note-tags') as HTMLElement;
        tag.innerText = note.tag.join(" ");

        const code = this.querySelector('.note-code') as HTMLElement;
        try {
            code.innerHTML = hljs.highlight(note.code, {language: note.tag[0].substring(1).toLowerCase()}).value;
        } catch {
            code.innerHTML = noHTML(note.code);
        }


        // References
        if(note.ref.length === 0) {
            const ref = this.querySelector('.note-refs') as HTMLElement;
            ref.style.display = "none";
        } else {
            const ref = this.querySelector('.collapse-content') as HTMLElement;
            ref.innerHTML = note.ref.map(row => {
                return `<a href="${row}" class="ref-link" target="_blank">${row}</a>`;
            }).join("<br/>");
        }

        // Note controll buttons
        const controllBox = this.querySelector(".note-controll-btns") as HTMLElement;
        if(window.location.pathname === "/myboard") {
            controllBox.innerHTML = '<button type="button" class="note-controll-btn detach-note"><i class="bi bi-trash"></i></button>';
        } else if(isAcceptTokenAvailable()) {
            let btns = '<button type="button" class="note-controll-btn to-my-board"><i class="bi bi-box-arrow-in-up-right"></i></button>';
            btns += getUID() === note.uid ? ' <button type="button" class="note-controll-btn edit-note"><i class="bi bi-eraser"></i></button> <button type="button" class="note-controll-btn delete-note"><i class="bi bi-trash"></i></button>' : "";
            controllBox.innerHTML = btns;
        }
    }

    addEvents() {
        /**
         * Code references
         */
        // Show note references
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

        /**
         * Note copy
         */
        const copyBtn = this.querySelector('.copy-code-btn') as HTMLElement;
        const copyBtnBox = this.querySelector('.copy-code-btn-box') as HTMLElement;
        // When copy
        copyBtn.addEventListener("click", event => {
            event.preventDefault();
            const code = this.querySelector(".note-code") as HTMLElement;
            clipboardUtils.copy(code.innerText);
            copyBtn.innerHTML = `<i class="bi bi-clipboard-check"></i>`;
        });
        // When hover
        this.querySelector('.note-code-box')?.addEventListener('mouseover', () => {
            copyBtnBox.style.display = "block";
        });
        // When not hover
        this.querySelector('.note-code-box')?.addEventListener('mouseleave', () => {
            copyBtnBox.style.display = "none";
            copyBtn.innerHTML = `<i class="bi bi-clipboard"></i>`;
        });

        /**
         * Note controlls
         */
        // Show note controlls
        const controllBox = this.querySelector(".note-controll-btns") as HTMLElement;
        this.addEventListener("mouseover", () => {
            controllBox.style.display = "block";
        });
        this.addEventListener("mouseleave", () => {
            controllBox.style.display = "none";
        });

        const idx = parseInt(this.getAttribute('note-idx') as string);
        const note = window.$store.state["notes"][idx] as st.note;
        // Note edit
        this.querySelector(".edit-note")?.addEventListener("click", event => {
            event.preventDefault();
            window.$router.push('/note/edit/' + idx)
        });
        // Note delete
        this.querySelector(".delete-note")?.addEventListener("click", event => {
            event.preventDefault();
            window.$store.dispatch("deleteNote", `/${note._id.$oid}`);
        });
        // Note attach
        this.querySelector(".to-my-board")?.addEventListener("click", event => {
            event.preventDefault();
            window.$store.dispatch("postMyBoard", {
                nid: note._id.$oid,
            });
        });
        // Note detach
        this.querySelector(".detach-note")?.addEventListener("click", event => {
            event.preventDefault();
            window.$store.dispatch("deleteMyBoard", `/${note._id.$oid}`);
        });
    }
}