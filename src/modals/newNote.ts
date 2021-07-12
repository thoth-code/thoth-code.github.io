import store from "../store";
import * as strconv from "../modules/parseCode";

function NewNote() {
    const createBtn = document.getElementById('create-new-note') as HTMLElement;
    const overlay = document.getElementById('new-note-overlay') as HTMLElement;
    const code = document.getElementById('newNoteCode') as HTMLInputElement;

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

    createBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', event => {
        if(event.target === overlay) {
            const title = document.getElementById('newNoteTitle') as HTMLInputElement;
            const tag = document.getElementById('newNoteTag') as HTMLInputElement;
            store.dispatch('postNote', {
                title: title.value,
                code: code.value,
                tag: tag.value,
            });
            overlay.style.display = 'none';
        }
    });
}

export default NewNote;