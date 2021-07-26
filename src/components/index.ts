import CodeNote from './CodeNote';
import NewNote from './NewNote';
import AsideFlags from './AsideFlags';

export default function InstallComponents() {
    customElements.define('code-note', CodeNote);
    customElements.define('new-note', NewNote);
    customElements.define('aside-flags', AsideFlags);
}