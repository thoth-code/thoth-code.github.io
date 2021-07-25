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
                <aside>
                    <ul id="aside-items">
                        <li class="no-auth"><a href="/signin">Sign In</a></li>
                        <li class="no-auth"><a href="/signup">Sign Up</a></li>
                        <li class="auth"><a href="/">Whiteboard</a></li>
                        <li class="auth"><a href="/">@Python</a></li>
                        <li class="auth"><a href="/">@Go</a></li>
                    </ul>
                </aside>
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

        const routerLinks = this.querySelectorAll('a');
        routerLinks.forEach(routerLink => {
            routerLink.addEventListener('click', event => {
                event.preventDefault();
                const eventTarget = event.target as HTMLElement
                const path = eventTarget.getAttribute('href') as string;
                window.$router.push(path);
            });
        });
    }

    addStyles() {
        const config = {
            color: [
                '#FFA0D5', // Pink
                '#FFD760', // Orange
                '#DAF7A6', // Green
                '#FFFAA0', // Yellow
                '#89CFF0', // Blue
            ],
        };
        const items = this.querySelector('#aside-items')?.children as HTMLCollection;
        for(let i = 0; i < items.length; i++) {
            let item = items.item(i) as HTMLElement;
            item.style.backgroundColor = config.color[i%config.color.length];
        }

        const noAuth = this.querySelectorAll('.no-auth');
        noAuth.forEach(el => {
            const refined = el as HTMLElement;
            refined.hidden = cu.isAcceptTokenAvailable();
        });
        const auth = this.querySelectorAll('.auth');
        auth.forEach(el => {
            const refined = el as HTMLElement;
            refined.hidden = !cu.isAcceptTokenAvailable();
        });
    }
}