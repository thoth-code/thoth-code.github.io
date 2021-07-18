import CodeNote from './CodeNote';
import NewNote from './NewNote';

export default function InstallComponents() {
    customElements.define('code-note', CodeNote);
    customElements.define('new-note', NewNote);
}