import Component from "../domain/component";
import * as cu from '../tools/cookieUtils';

export default class AsideFlags extends Component{
    constructor() {
        super();
    }

    get template() {
        if(cu.isAcceptTokenAvailable()) {
            return `<ul id="aside-items">
                        <li id="l0"><a id="sign-out">Sign Out</a></li>
                        <li id="l1"><a href="/my-board">MyBoard</a></li>
                    </ul>`;
        } else {
            return `<ul id="aside-items">
                        <li id="l0"><a href="/signin">Sign In</a></li>
                        <li id="l1"><a href="/signup">Sign Up</a></li>
                    </ul>`;
        }
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

        let i = 0;
        let selected = "l0";
        this.querySelectorAll('li').forEach(item => {
            item.style.backgroundColor = config.color[i++ % config.color.length];
            selected = item.children.item(0)?.getAttribute("href") === window.location.pathname ? item.id : selected;
        });

        this.setZIndex(selected);
    }

    addEvents() {
        const routerLinks = this.querySelectorAll('a');
        routerLinks.forEach(link => {
            const path = link.getAttribute('href')
            if(typeof path === 'string') {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    let lid = link.parentElement?.id as string
                    this.setZIndex(lid);
                    window.$router.push(path);
                });
            }
        });

        this.querySelector('#sign-out')?.addEventListener('click', event => {
            event.preventDefault();
            cu.deleteAccessToken();
            alert('Sign Out Success')
            window.$router.pushWithRefresh('/');
        });
    }

    setZIndex(selectedId: string) {
        let i = 0;
        let found = false;
        this.querySelectorAll('li').forEach(item => {
            item.style.zIndex = `${i}`;
            found = item.id === selectedId ? true : found;
            i = found ? i - 1 : i + 1;
        });
    }
}