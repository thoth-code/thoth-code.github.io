import Note from "../components/Note";

function Main() {
    Note.store.dispatch("getAllNotes");
}

export default Main