import Component from "../domain/component";

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
}