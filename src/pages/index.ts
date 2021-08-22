import MainApp from '../App';
import SearchedNotes from "./SearchedNote";
import SignIn from './SignIn';
import SignUp from './Signup';
import NewNote from './NewNote';
import EditNote from './EditNote';
import MyBoard from './MyBoard';

export default function InstallPages() {
    customElements.define('my-board', MyBoard);
    customElements.define('new-note', NewNote);
    customElements.define('edit-note', EditNote);
    customElements.define('main-app', MainApp);
    customElements.define('searched-notes', SearchedNotes);
    customElements.define('sign-in', SignIn);
    customElements.define('sign-up', SignUp);
}