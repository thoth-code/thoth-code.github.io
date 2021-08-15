import { st } from "state-types";
import Component from "../domain/component";
import * as cu from '../tools/cookieUtils';

export default class AsideFlags extends Component{
    constructor() {
        super({
            subscribe: 'flagsChange'
        });
    }

    get template() {
        return '<ul id="aside-items"></ul>';
    }

    dispatch() {
        window.$store.dispatch('getFlags', window.location.search)
    }

    onStateChange() {
        const aside = this.querySelector('#aside-items') as HTMLElement;
        if(cu.isAcceptTokenAvailable()) {
            aside.innerHTML = `
                <li id="l0"><a id="sign-out">Sign Out</a></li>
                <li id="l1"><a href="/my-board">MyBoard</a></li>`;
                let i = 2
                window.$store.state["flags"].map(row => {
                    const refined = row as st.flag;
                    const li = document.createElement('li')
                    li.id = `l${i++}`;
                    li.innerHTML = `<a href="${refined.path}">${refined.title}</a>`;
                    aside.appendChild(li);
                })
        } else {
            aside.innerHTML = `
                <li id="l0"><a href="/signin">Sign In</a></li>
                <li id="l1"><a href="/signup">Sign Up</a></li>`;
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
        const items = this.querySelector('#aside-items')?.children as HTMLCollection;
        for(let i = 0; i < items.length; i++) {
            let item = items.item(i) as HTMLElement;
            item.style.backgroundColor = config.color[i%config.color.length];
            item.style.zIndex = `${items.length - i - 1}`;
        }

        let i = 0;
        this.querySelectorAll('li').forEach(item => {
            item.style.backgroundColor = config.color[i++ % config.color.length];
        });

        this.setZIndex("l0");
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