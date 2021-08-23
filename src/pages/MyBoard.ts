import Component from "../domain/component";
import * as cookieUtils from "../tools/cookieUtils";

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

    onStateChange() {
        this.innerHTML = `<show-notes class="printer"></show-notes>`;
    };
}