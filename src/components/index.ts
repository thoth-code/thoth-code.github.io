import CodeNote from './CodeNote';
import AsideFlags from './AsideFlags';
import GuideNote from './GuideNote';
import ShowNotes from './ShowNotes';

export default function InstallComponents() {
    customElements.define('code-note', CodeNote);
    customElements.define('aside-flags', AsideFlags);
    customElements.define('guide-note', GuideNote);
    customElements.define('show-notes', ShowNotes);
}