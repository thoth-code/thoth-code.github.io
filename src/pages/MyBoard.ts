import Component from "../domain/component";
import * as cookieUtils from "../tools/cookieUtils";
import scrollUtils from "../tools/scrollUtils";

export default class MyBoard extends Component{
    constructor() {
        super({
            subscribe: 'notesChange'
        });
        if(!cookieUtils.isAcceptTokenAvailable()) {
            alert("Sign in first");
            window.$router.pushWithRefresh('/signin');
        }
    }

    dispatch() {
        window.$store.dispatch('getMyBoard');
    }

    render() {
        this.innerHTML = `<show-notes class="printer"></show-notes>`;
    }

    addEvents() {
        scrollUtils.addBottomEventHandler(() => {
            console.warn("TODO: load more my-board notes");
        });
    }

    disconnectedCallback() {
        scrollUtils.removeBottomEventHandler();
    }
}