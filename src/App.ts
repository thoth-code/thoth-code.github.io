import Component from './domain/component';
import * as su from './tools/searchUtils';

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
                        <input type="text" id="search-input" placeholder="@lang Search Notes!">
                        <button id="search-submit"><i class="bi bi-search"></i></button>
                    </div>
                    <hr>
                </nav>
                <aside-flags></aside-flags>
                <!-- Routed -->
                <main id="whiteboard" class="m26"></main>
                <footer>copyright © saltwalks2021</footer>`;
    }

    addEvents() {
        this.querySelector('#create-new-note')?.addEventListener('click', event => {
            event.preventDefault();
            window.$router.push('/note/new')
        });

        this.querySelector('#logo')?.addEventListener('click', event => {
            event.preventDefault();
            window.$router.push('/');
        });

        this.querySelector('#search-input')?.addEventListener('keydown', event => {
            const keyEvent = event as KeyboardEvent;
            if(keyEvent.key === 'Enter') {
                event.preventDefault();
                this.searchSubmitEvent();
            }
        });

        this.querySelector('#search-submit')?.addEventListener('click', event => {
            event.preventDefault();
            this.searchSubmitEvent();
        });
    }

    searchSubmitEvent() {
        const input = this.querySelector('#search-input') as HTMLInputElement;
        window.$router.push(su.urlify(input.value));
    } 
}