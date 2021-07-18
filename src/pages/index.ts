import HomePage from './HomePage';
import SearchedNotes from "./SearchedNote";

export default function InstallPages() {
    customElements.define('home-page', HomePage);
    customElements.define('searched-notes', SearchedNotes);
}