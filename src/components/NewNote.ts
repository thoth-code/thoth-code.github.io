import Component from "../domain/component";
import * as codeUtils from "../tools/codeUtils";
import * as cookieUtils from "../tools/cookieUtils";

export default class NewNote extends Component {
    constructor() {
        super();
        if(!cookieUtils.isAcceptTokenAvailable()) {
            alert("Sign in first");
            window.$router.pushWithRefresh('/signin');
        }
    };

    get template() {
        return `<span class="save-note-guide">Click Outside to Save</span>
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
                        <div id="new-note-ref">
                            <textarea autocomplete="off" spellcheck="false" placeholder="Source of this code! (separate with enters or spaces)" id="input-ref"></textarea>
                        </div>
                    </div>
                    <div id="save-container">
                        Do you want to save note?
                        <button id="save-btn">Yes I want to save it</button>
                        <button id="maintain-btn">No I want to write more</button>
                        <button id="cancel-btn">Just put it into trash bin</button>
                    </div>
                </article>
                <span class="save-note-guide">Click Outside to Save</span>`;
    }

    addEvents() {
        this.addButtonEvents();
        this.addCodeBoxEvents();
    }

    addButtonEvents() {
        const guides = this.querySelectorAll('.save-note-guide');
        const inputContainer = this.querySelector('#input-container') as HTMLElement;
        const saveContainer = this.querySelector('#save-container') as HTMLElement;

        const title = this.querySelector('#input-title') as HTMLInputElement;
        const code = this.querySelector('#input-code') as HTMLInputElement;
        const tag = this.querySelector('#input-tag') as HTMLInputElement;
        const ref = this.querySelector('#input-ref') as HTMLInputElement;

        const save = this.querySelector('#save-btn') as HTMLElement;
        const maintain = this.querySelector('#maintain-btn') as HTMLElement;
        const cancel = this.querySelector('#cancel-btn') as HTMLElement;

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
            const refs = ref.value.split(/\s+/g)
            window.$store.dispatch('postNote', {
                oid: "",
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
}