import Component from "../lib/component";
import * as strconv from "../modules/parseCode";

export default class NewNote extends Component {
    constructor() {
        /*
         * Select Existing Elements
         */
        super({
            element: document.getElementById('new-note-overlay') as HTMLElement,
        });
        const createBtn = document.getElementById('create-new-note') as HTMLElement;

        /*
         * Creating New Elements
         */
        const article = document.createElement('article');
        //Guidelines
        const guide1 = document.createElement('span');
        const guide2 = document.createElement('span');
        //Inputs
        const inputContainer = document.createElement('div');
        const h1 = document.createElement('h1');
        const title = document.createElement('input');
        const parag = document.createElement('p');
        const code = document.createElement('textarea');
        const span = document.createElement('span');
        const tag = document.createElement('input');
        //Save, Cancel, Maintain
        const saveContainer = document.createElement('div');
        const save = document.createElement('button');
        const cancel = document.createElement('button');
        const maintain = document.createElement('button');

        /*
         * Set Properties
         */
        article.id = 'new-note';
        guide1.classList.add('save-note-guide');
        guide1.innerText = 'Click Outside to Save';
        guide2.classList.add('save-note-guide');
        guide2.innerText = 'Click Outside to Save';
        inputContainer.id = 'input-container';
        h1.id = 'new-note-title';
        parag.id = 'new-note-code';
        span.id = 'new-note-tag';
        title.placeholder = 'Title';
        code.autocomplete = 'off';
        code.spellcheck = false;
        code.placeholder = 'Write Code...';
        tag.placeholder = '@Language';
        saveContainer.id = 'save-container';
        saveContainer.innerText = 'Do you want to save note?';
        save.id = 'save-btn';
        save.innerText = 'Yes I want to save it';
        maintain.innerText = 'No I want to write more';
        maintain.id = 'maintain-btn';
        cancel.innerText = 'Just put it into trash bin';
        cancel.id = 'cancel-btn'

        /*
         * Connect DOM Tree
         */
        this.element.appendChild(guide1);
        this.element.appendChild(article);
        this.element.appendChild(guide2);
        article.appendChild(inputContainer);
        article.appendChild(saveContainer);
        inputContainer.appendChild(h1);
        inputContainer.appendChild(parag);
        inputContainer.appendChild(span);
        h1.appendChild(title);
        parag.appendChild(code);
        span.appendChild(tag);
        saveContainer.appendChild(save);
        saveContainer.appendChild(maintain);
        saveContainer.appendChild(cancel);

        /*
         * Create note
         */
        let self = this;
        createBtn.addEventListener('click', () => {
            self.element.style.display = 'flex';
        });

        /*
         * Save note
         */
        //Reset guide, display
        function resetCreation() {
            guide1.innerText = 'Click Outside to Save';
            guide2.innerText = 'Click Outside to Save';
            inputContainer.style.display = 'block';
            saveContainer.style.display = 'none';
        }

        //Clear values
        function clear() {
            title.value = "";
            code.value = "";
            tag.value = "";
        }

        //Overlay click event
        self.element.addEventListener('click', event => {
            if(event.target === self.element) {
                if(inputContainer.style.display !== 'none') {
                    guide1.innerText = 'Click Outside to Write More';
                    guide2.innerText = 'Click Outside to Write More';
                    inputContainer.style.display = 'none';
                    saveContainer.style.display = 'flex';
                } else {
                    resetCreation();
                }
            }
        });

        //Do save
        save.addEventListener('click', () => {
            self.store.dispatch('postNote', {
                title: title.value,
                code: code.value,
                tag: tag.value,
            });
            resetCreation();
            clear();
            self.element.style.display = 'none';
        });

        //Maintain note
        maintain.addEventListener('click', () => {
            resetCreation();
        });

        //Cancel note
        cancel.addEventListener('click', () => {
            resetCreation();
            clear();
            self.element.style.display = 'none';
        });

        /*
         * Allowing Tab in Code
         */
        code.addEventListener('keydown', event => {
            if(event.key === 'Tab') {
                event.preventDefault();
                let start = code.selectionStart as number;
                let end = code.selectionEnd as number;
                code.value = code.value.substring(0, start) + '\t' + code.value.substring(end);
                code.selectionStart = code.selectionEnd = start + 1;
            }
        });
    
        /*
         * Maintain Tab When Enter
         */
        code.addEventListener('keydown', event => {
            if(event.key === 'Enter') {
                event.preventDefault();
                let start = code.selectionStart as number;
                let end = code.selectionEnd as number;
                let cnt = strconv.maintainIndent(code.value);
                let res = code.value.substring(0, start) + '\n';
                for(let i = 0; i < cnt; i ++) {
                    res += '\t';
                }
                res += code.value.substring(end);
                code.value = res;
                code.selectionStart = code.selectionEnd = start + 1 + cnt;
            }
        });
    };

    render() {}
}