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
        const before = this.children;
        while(before.length !== 0) {
            before.item(0)?.remove();
        }
        
        window.$store.state["notes"].map((x, idx) => {
            const note = document.createElement('code-note');
            note.setAttribute('note-idx', idx.toString());
            note.classList.add("note");
            this.appendChild(note);
        });
    };
}