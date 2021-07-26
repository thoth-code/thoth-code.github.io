import MainApp from '../App';
import SearchedNotes from "./SearchedNote";
import SignIn from './SignIn';
import SignUp from './Signup';

export default function InstallPages() {
    customElements.define('main-app', MainApp);
    customElements.define('searched-notes', SearchedNotes);
    customElements.define('sign-in', SignIn);
    customElements.define('sign-up', SignUp);
}