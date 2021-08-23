import Component from "../domain/component";

export default class ShowNotes extends Component{
    constructor() {
        super();
    }

    get template() {
        let tmpl = "";
        if(window.location.pathname === "/") {
            tmpl += `<guide-note class="note" title="welcome"></guide-note><guide-note class="note" title="write-note"></guide-note>`;
        }
        window.$store.state["notes"].map((x, idx) => {
            tmpl += `<code-note class="note" note-idx="${idx.toString()}"></code-note>`;
        });
        return tmpl;
    }
}