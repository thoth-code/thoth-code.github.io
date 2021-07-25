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

export function isOpen(str: string) {
    const last = str.charAt(str.length - 1)
    return (last === '(' || last === '{' || last === '[');
}