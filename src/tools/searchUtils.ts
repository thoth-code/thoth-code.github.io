import queryString from 'query-string'

export function urlify(path: string, query: string) {
    let search = '';
    let lang: string[] = []
    let ptr = 0
    for(let aIdx = 0; aIdx < query.length; aIdx++) {
        if(query.charAt(aIdx) === "@") {
            search += query.substring(ptr, aIdx).trim() + " ";
            let sIdx: number
            for(sIdx = aIdx; sIdx < query.length && query.charAt(sIdx) !== " "; sIdx++) {}
            lang.push(query.substring(aIdx + 1, sIdx));
            ptr = sIdx + 1;
        }
    }
    search += query.substring(ptr);
    search = search.trim();
    
    const reqParam = queryString.stringify({
        lang,
        search,
    });
    return `${path}?${reqParam}`;
}