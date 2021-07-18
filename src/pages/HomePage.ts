import Component from '../domain/component';
//import router from '../router';

export default class HomePage extends Component {
    constructor() {
        super();
    };

    get template() {
        return `<!-- Presets -->
                <header class="row space-between m26">
                    <div id="logo">
                        <a href="/">Thoth</a>
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
                        <li><a href="/signin" class="router-link">Sign In</a></li>
                        <li><a href="/signup" class="router-link">Sign Up</a></li>
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
            this.querySelector('new-note')?.setAttribute('show', 'true');
        });

        const routerLinks = this.querySelectorAll('.router-link');
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
    }
}