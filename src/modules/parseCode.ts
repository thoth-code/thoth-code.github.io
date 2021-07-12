export function noHTML(str: string) {
    return str.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\t/g, '&emsp;&emsp;');
}

export function maintainIndent(str: string) {
    if(str.indexOf('\n') == -1) {
        return 0;
    }
    let last = str.lastIndexOf('\n')
    let cnt = 0;
    let temp = str.substring(last).indexOf('\t');
    while(temp !== -1) {
        cnt++;
        temp = str.substring(last).indexOf('\t', temp + 1);
    }
    return cnt;
}