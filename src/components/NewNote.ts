import Component from "../lib/component";
import note from "./Note";
import * as strconv from "../modules/parseCode";

class NewNote extends Component {
    constructor() {
        //Select existing elements
        super({ element: document.getElementById('new-note-overlay') as HTMLElement });
        const createBtn = document.getElementById('create-new-note') as HTMLElement;

        //Creating new element
        const article = document.createElement('article');
        const h1 = document.createElement('h1');
        const title = document.createElement('input');
        const parag = document.createElement('p');
        const code = document.createElement('textarea');
        const span = document.createElement('span');
        const tag = document.createElement('input');

        //DOM Tree
        this.element.appendChild(article);
        article.appendChild(h1);
        article.appendChild(parag);
        article.appendChild(span);
        h1.appendChild(title);
        parag.appendChild(code);
        span.appendChild(tag);

        //ID
        article.id = 'new-note'

        //Save note
        let self = this;
        createBtn.addEventListener('click', () => {
            title.value = "",
            code.value = "",
            tag.value = "",
            self.element.style.display = 'flex';
        });
    
        //Create new note
        self.element.addEventListener('click', event => {
            if(event.target === self.element) {
                self.store.dispatch('postNote', {
                    title: title.value,
                    code: code.value,
                    tag: tag.value,
                });
                self.element.style.display = 'none';
            }
        });
    
        //Allowing Tab
        code.addEventListener('keydown', event => {
            if(event.key === 'Tab') {
                event.preventDefault(); //입력 멈춤
                let start = code.selectionStart as number; //드래그한 범위 맨처음 인덱스
                let end = code.selectionEnd as number; //드래그한 범위 맨 뒤 인덱스
                //드래그하지 않고 커서 하나만 깜빡거리면 start === end이다
                code.value = code.value.substring(0, start) + '\t' + code.value.substring(end); //str[:start] + "\t" + str[end:]
                code.selectionStart = code.selectionEnd = start + 1; //move curser next to tab
            }
        });
    
        //Maintain tab when enter
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

    render() {
        note.render();
    }
}

export default NewNote;