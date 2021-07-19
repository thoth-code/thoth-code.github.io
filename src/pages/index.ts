import MainApp from '../App';
import SearchedNotes from "./SearchedNote";
import SignIn from './SignIn';

export default function InstallPages() {
    customElements.define('main-app', MainApp);
    customElements.define('searched-notes', SearchedNotes);
    customElements.define('sign-in', SignIn);
}