import Component from "../domain/component";
import scrollUtils from "../tools/scrollUtils";

export default class SearchedNotes extends Component{
    count: number;

    constructor() {
        super({
            subscribe: 'notesChange'
        });
        this.count = 0;
    }

    get searchParam() {
        const count = `count=${this.count++}`;
        return window.location.search.startsWith('?')
        ? window.location.search + '&' + count
        : '?' + count;
    }

    dispatch() {
        window.$store.dispatch('getInitNotes', this.searchParam);
    }

    render() {
        this.innerHTML = `<show-notes class="printer"></show-notes>`;
    }

    addEvents() {
        scrollUtils.addBottomEventHandler(() => {
            window.$store.dispatch('getMoreNotes', this.searchParam);
        });
    }

    disconnectedCallback() {
        scrollUtils.removeBottomEventHandler();
    }
}