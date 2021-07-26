import Component from './domain/component';
import * as cu from './tools/cookieUtils';

export default class MainApp extends Component {
    constructor() {
        super();
    };

    get template() {
        return `<!-- Presets -->
                <header class="row space-between m26">
                    <div id="logo-box">
                        <a href="/" id="logo">Thoth</a>
                    </div>
                    <button id="create-new-note">New Note</button>
                </header>
                <nav class="m26">
                    <div class="row" id="search-box">
                        <span id="search-label">Search</span>
                        <input type="text" id="search-input">
                        <button id="search-submit"><i class="bi bi-search"></i></button>
                    </div>
                    <hr>
                </nav>
                <aside-flags></aside-flags>
                <!-- Modal -->
                <new-note show="false"></new-note>
                <!-- Main -->
                <main id="whiteboard" class="m26"></main>
                <footer>copyright © saltwalks2021</footer>`;
    }

    addEvents() {
        this.querySelector('#create-new-note')?.addEventListener('click', () => {
            if(cu.isAcceptTokenAvailable()) {
                this.querySelector('new-note')?.setAttribute('show', 'true');
            } else {
                alert('Sign In First');
                window.$router.push('/signin');
            }
        });

        this.querySelector('#logo')?.addEventListener('click', event => {
            event.preventDefault();
            const eventTarget = event.target as HTMLElement
            const path = eventTarget.getAttribute('href') as string;
            window.$router.push(path);
        });

        this.querySelector('#search-submit')?.addEventListener('click', event => {
            event.preventDefault();
            window.$router.push('/notes?tag=go');
        });
    }
}