import CodeNote from './CodeNote';
import NewNote from './NewNote';
import AsideFlags from './AsideFlags';
import GuideNote from './GuideNote';

export default function InstallComponents() {
    customElements.define('code-note', CodeNote);
    customElements.define('new-note', NewNote);
    customElements.define('aside-flags', AsideFlags);
    customElements.define('guide-note', GuideNote);
}