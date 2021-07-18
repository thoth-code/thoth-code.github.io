// Install CSS
import './style/App';
import './style/fonts';

// Install Custom Components
import Home from './pages/Home';
import Note from './components/Note';
import NewNote from './components/NewNote';
customElements.define('home-page', Home);
customElements.define('code-note', Note);
customElements.define('new-note', NewNote);

//Run App
import App from './App';
App();