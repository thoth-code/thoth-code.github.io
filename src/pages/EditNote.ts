import { st } from "state-types";
import Component from "../domain/component";
import * as codeUtils from "../tools/codeUtils";
import * as cookieUtils from "../tools/cookieUtils";

export default class EditNote extends Component {
    constructor() {
        super();
        if(!cookieUtils.isAcceptTokenAvailable()) {
            alert("Sign in first");
            window.$router.pushWithRefresh('/signin');
        }
    };

    get template() {
        return `<span class="save-note-guide">Click Outside to Save</span>
                <article class="note-editor">
                    <div id="input-container">
                        <h1 class="title-editor">
                            <input placeholder="Title" id="input-title" />
                        </h1>
                        <p class="code-editor">
                            <textarea autocomplete="off" spellcheck="false" placeholder="Write Code..." id="input-code"></textarea>
                        </p>
                        <span class="tag-editor">
                            <input placeholder="@language" id="input-tags" />
                        </span>
                        <div class="ref-editor">
                            <textarea autocomplete="off" spellcheck="false" placeholder="Source of this code! (separate with enters or spaces)" id="input-refs"></textarea>
                        </div>
                    </div>
                    <div id="save-container">
                        Do you want to save note?
                        <button id="save-btn">Yes I want to save it</button>
                        <button id="maintain-btn">No I want to write more</button>
                        <button id="cancel-btn">Cancel editting</button>
                    </div>
                </article>
                <span class="save-note-guide">Click Outside to Save</span>`;
    }

    propsHandler(props: string) {
        const idx = parseInt(window.location.pathname.split("/")[3]);
        const note = window.$store.state["notes"][idx] as st.note;

        const title = this.querySelector('#input-title') as HTMLInputElement;
        title.value = note.title;

        const code = this.querySelector('#input-code') as HTMLInputElement;
        code.value = note.code;

        console.log(note.tag.join(" "));
        
        const tag = this.querySelector('#input-tags') as HTMLInputElement;
        tag.value = note.tag.join(" ");

        const ref = this.querySelector('#input-refs') as HTMLInputElement;
        ref.value = note.ref.join("\n");
    }

    addEvents() {
        this.addButtonEvents();
        codeUtils.addCodeBoxEvents(this.querySelector('#input-code') as HTMLInputElement);
    }

    addButtonEvents() {
        const guides = this.querySelectorAll('.save-note-guide');
        const inputContainer = this.querySelector('#input-container') as HTMLElement;
        const saveContainer = this.querySelector('#save-container') as HTMLElement;

        const title = this.querySelector('#input-title') as HTMLInputElement;
        const code = this.querySelector('#input-code') as HTMLInputElement;
        const tag = this.querySelector('#input-tags') as HTMLInputElement;
        const ref = this.querySelector('#input-refs') as HTMLInputElement;

        const save = this.querySelector('#save-btn') as HTMLElement;
        const maintain = this.querySelector('#maintain-btn') as HTMLElement;
        const cancel = this.querySelector('#cancel-btn') as HTMLElement;

        const idx = parseInt(window.location.pathname.split("/")[3]);
        const note = window.$store.state["notes"][idx] as st.note;

        /*
        * Save note
        */
        function insertMode() {
            guides.forEach(guide => {
                guide.innerHTML = 'Click outside to save'
            });
            inputContainer.style.display = 'block';
            saveContainer.style.display = 'none';
        }

        function exitMode() {
            guides.forEach(guide => {
                guide.innerHTML = 'Click outside to write more'
            });
            inputContainer.style.display = 'none';
            saveContainer.style.display = 'flex';
        }

        function clearInputs() {
            title.value = "";
            code.value = "";
            tag.value = "";
        }

        //outside click event
        this.addEventListener('click', event => {
            if(event.target === this || guides.item(0) === event.target || guides.item(1) === event.target ) {
                if(inputContainer.style.display !== 'none') {
                    exitMode();
                } else {
                    insertMode();
                }
            }
        });

        //Do save
        save.addEventListener('click', () => {
            const tags = tag.value.split(" ");
            const refs = ref.value.split(/\s+/g);
            window.$store.dispatch('putNote', {
                nid: note.nid,
                uid: note.uid,
                title: title.value,
                code: code.value,
                tag: tags,
                ref: refs,
            });
        });

        //Maintain note
        maintain.addEventListener('click', () => {
            insertMode();
        });

        //Cancel note
        cancel.addEventListener('click', () => {
            insertMode();
            clearInputs();
            window.$router.push('/');
        });
    }
}