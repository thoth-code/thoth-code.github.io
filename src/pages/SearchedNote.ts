import Component from "../domain/component";
import scrollUtils from "../tools/scrollUtils";

export default class SearchedNotes extends Component{
    constructor() {
        super({
            subscribe: 'notesChange'
        });
    }

    dispatch() {
        window.$store.dispatch('getAllNotes', window.location.search);
    }

    render() {
        this.innerHTML = `<show-notes class="printer"></show-notes>`;
    }

    addEvents() {
        scrollUtils.addBottomEventHandler(() => {
            console.warn("TODO: load more notes");
        });
    }

    disconnectedCallback() {
        scrollUtils.removeBottomEventHandler();
    }
}