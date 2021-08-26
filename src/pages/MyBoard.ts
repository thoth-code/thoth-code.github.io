import Component from "../domain/component";
import * as cookieUtils from "../tools/cookieUtils";
import scrollUtils from "../tools/scrollUtils";

export default class MyBoard extends Component{
    count: number;

    constructor() {
        super({
            subscribe: 'notesChange'
        });
        if(!cookieUtils.isAccessTokenAvailable()) {
            alert("Sign in first");
            window.$router.pushWithRefresh('/signin');
        }
        this.count = 0;
        const searchPlaceholder = document.getElementById("search-input") as HTMLInputElement;
        searchPlaceholder.placeholder = "@lang Search from my board!"
    }

    get searchParam() {
        const count = `count=${this.count++}`;
        return window.location.search.startsWith('?')
        ? window.location.search + '&' + count
        : '?' + count;
    }

    dispatch() {
        window.$store.dispatch('getInitMyBoard', this.searchParam);
    }

    render() {
        this.innerHTML = `<show-notes class="printer"></show-notes>`;
    }

    addEvents() {
        scrollUtils.addBottomEventHandler(() => {
            window.$store.dispatch('getMoreMyBoard', this.searchParam);
        });
    }

    disconnectedCallback() {
        scrollUtils.removeBottomEventHandler();
        const searchPlaceholder = document.getElementById("search-input") as HTMLInputElement;
        searchPlaceholder.placeholder = "@lang Search notes!"
    }
}