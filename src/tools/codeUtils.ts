// noHTML has been DEPRECATED. use <pre><code> instead.
export function noHTML(str: string) {
    return str.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\t/g, '&emsp;&emsp;');
}

export function maintainIndent(str: string) {
    let cnt = 0
    let indents = '';
    for(let i = str.lastIndexOf('\n') + 1; str.charAt(i) === '\t'; i++) {
        cnt++;
        indents += '\t';
    }
    return {cnt, indents};
}

export function isBracketOpen(str: string) {
    const last = str.charAt(str.length - 1)
    return (last === '(' || last === '{' || last === '[');
}

export function addCodeBoxEvents(inputEl: HTMLInputElement) {
    inputEl.addEventListener('keydown', event => {
        // Allowing Tab in Code
        if(event.key === 'Tab') {
            event.preventDefault();
            let start = inputEl.selectionStart as number;
            let end = inputEl.selectionEnd as number;
            inputEl.value = inputEl.value.substring(0, start) + '\t' + inputEl.value.substring(end);
            inputEl.selectionStart = inputEl.selectionEnd = start + 1;
        // Auto Indentation
        } else if(event.key === 'Enter') {
            event.preventDefault();
            const start = inputEl.selectionStart as number;
            const end = inputEl.selectionEnd as number;
            const front = inputEl.value.substring(0, start);
            let {cnt, indents} = maintainIndent(front);
            const isOpen = isBracketOpen(front);

            let res = inputEl.value.substring(0, start) + '\n';
            if(isOpen) {
                res += indents + '\t' + '\n' + indents;
                cnt++;
            } else {                    
                res += indents;
            }
            res += inputEl.value.substring(end);
            inputEl.value = res;
            inputEl.selectionStart = inputEl.selectionEnd = start + 1 + cnt;
        // Auto Brackets
        } else if(event.key === '[' || event.key === '{' || event.key === '(' || event.key === '\"' || event.key === '\'') {
            event.preventDefault();
            let start = inputEl.selectionStart as number;
            let end = inputEl.selectionEnd as number;
            let nextKey = '';
            switch(event.key) {
                case '[' : nextKey = ']'; break;
                case '{' : nextKey = '}'; break;
                case '(' : nextKey = ')'; break;
                default : nextKey = event.key;
            }
            inputEl.value = inputEl.value.substring(0, start) + event.key + nextKey + inputEl.value.substring(end);
            inputEl.selectionStart = inputEl.selectionEnd = start + 1;
        }
    });
}