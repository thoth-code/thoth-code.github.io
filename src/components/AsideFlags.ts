import Component from "../domain/component";
import * as cu from '../tools/cookieUtils';

export default class AsideFlags extends Component{
    constructor() {
        super({
            subscribe: 'stateChange'
        });
    }

    get template() {
        return '<ul id="aside-items"></ul>';
    }

    render() {
        const aside = this.querySelector('#aside-items') as HTMLElement;
        if(cu.isAcceptTokenAvailable()) {
            aside.innerHTML = `
                <li><a href="/">MyBoard</a></li>
                <li><a href="/">@Python</a></li>
                <li><a href="/">@Go</a></li>`;
        } else {
            aside.innerHTML = `
                <li><a href="/signin">Sign In</a></li>
                <li><a href="/signup">Sign Up</a></li>`;
        }
        this.addStyles();
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

    addEvents() {
        const routerLinks = this.querySelectorAll('a');
        routerLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const path = link.getAttribute('href') as string;
                window.$router.push(path);
            });
        });
    }
}