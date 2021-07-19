import Component from "../domain/component";
import * as codeUtils from "../tools/codeUtils";

export default class NewNote extends Component {
    constructor() {
        super();
    };

    get template() {
        return `<div id="new-note-overlay">
                    <span class="save-note-guide">Click Outside to Save</span>
                    <article id="new-note">
                        <div id="input-container">
                            <h1 id="new-note-title">
                                <input placeholder="Title" id="input-title" />
                            </h1>
                            <p id="new-note-code">
                                <textarea autocomplete="off" spellcheck="false" placeholder="Write Code..." id="input-code"></textarea>
                            </p>
                            <span id="new-note-tag">
                                <input placeholder="@language" id="input-tag" />
                            </span>
                        </div>
                        <div id="save-container">
                            Do you want to save note?
                            <button id="save-btn">Yes I want to save it</button>
                            <button id="maintain-btn">No I want to write more</button>
                            <button id="cancel-btn">Just put it into trash bin</button>
                        </div>
                    </article>
                    <span class="save-note-guide">Click Outside to Save</span>
                </div>`;
    }

    addEvents() {
        this.addButtonEvents();
        this.addCodeBoxEvents();
    }

    addButtonEvents() {
        const guides = this.querySelectorAll('.save-note-guide');
        const overlay = this.querySelector('#new-note-overlay') as HTMLElement;
        const inputContainer = this.querySelector('#input-container') as HTMLElement;
        const saveContainer = this.querySelector('#save-container') as HTMLElement;

        const title = this.querySelector('#input-title') as HTMLInputElement;
        const code = this.querySelector('#input-code') as HTMLInputElement;
        const tag = this.querySelector('#input-tag') as HTMLInputElement;

        const save = this.querySelector('#save-btn') as HTMLElement;
        const maintain = this.querySelector('#maintain-btn') as HTMLElement;
        const cancel = this.querySelector('#cancel-btn') as HTMLElement;

        /*
        * Save note
        */
        function insertMode() {
            guides.item(0).innerHTML = 'Click Outside to Save';
            guides.item(1).innerHTML = 'Click Outside to Save';
            inputContainer.style.display = 'block';
            saveContainer.style.display = 'none';
        }

        function exitMode() {
            guides.item(0).innerHTML = 'Click Outside to Write More';
            guides.item(1).innerHTML = 'Click Outside to Write More';
            inputContainer.style.display = 'none';
            saveContainer.style.display = 'flex';
        }

        function clearInputs() {
            title.value = "";
            code.value = "";
            tag.value = "";
        }

        //Overlay click event
        overlay.addEventListener('click', event => {
            if(event.target === overlay) {
                if(inputContainer.style.display !== 'none') {
                    exitMode();
                } else {
                    insertMode();
                }
            }
        });

        //Do save
        save.addEventListener('click', () => {
            window.$store.dispatch('postNote', {
                title: title.value,
                code: code.value,
                tag: tag.value,
            });
            insertMode();
            clearInputs();
            this.setAttribute('show', 'false');
        });

        //Maintain note
        maintain.addEventListener('click', () => {
            insertMode();
        });

        //Cancel note
        cancel.addEventListener('click', () => {
            insertMode();
            clearInputs();
            this.setAttribute('show', 'false');
        });
    }

    addCodeBoxEvents() {
        const code = this.querySelector('#input-code') as HTMLInputElement;
        code.addEventListener('keydown', event => {
            // Allowing Tab in Code
            if(event.key === 'Tab') {
                event.preventDefault();
                let start = code.selectionStart as number;
                let end = code.selectionEnd as number;
                code.value = code.value.substring(0, start) + '\t' + code.value.substring(end);
                code.selectionStart = code.selectionEnd = start + 1;
            // Auto Indentation
            } else if(event.key === 'Enter') {
                event.preventDefault();
                const start = code.selectionStart as number;
                const end = code.selectionEnd as number;
                const front = code.value.substring(0, start);
                let {cnt, indents} = codeUtils.maintainIndent(front);
                const isOpen = codeUtils.isOpen(front);

                let res = code.value.substring(0, start) + '\n';
                if(isOpen) {
                    res += indents + '\t' + '\n' + indents;
                    cnt++;
                } else {                    
                    res += indents;
                }
                res += code.value.substring(end);
                code.value = res;
                code.selectionStart = code.selectionEnd = start + 1 + cnt;
            // Auto Brackets
            } else if(event.key === '[' || event.key === '{' || event.key === '(' || event.key === '\"' || event.key === '\'') {
                event.preventDefault();
                let start = code.selectionStart as number;
                let end = code.selectionEnd as number;
                let nextKey = '';
                switch(event.key) {
                    case '[' : nextKey = ']'; break;
                    case '{' : nextKey = '}'; break;
                    case '(' : nextKey = ')'; break;
                    default : nextKey = event.key;
                }
                code.value = code.value.substring(0, start) + event.key + nextKey + code.value.substring(end);
                code.selectionStart = code.selectionEnd = start + 1;
            }
        });
    }

    static get observedAttributes() {
        return ['show'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if(name === 'show') {
            const overlay = this.children.item(0) as HTMLElement;
            if(oldValue === 'true' && newValue === 'false') {
                overlay.style.display = 'none';
            } else if(oldValue === 'false' && newValue === 'true') {
                overlay.style.display = 'flex';
            }
        }
    }
}