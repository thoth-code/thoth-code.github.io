import { st } from "state-types";
import routes from "./routes";

export default class Router {
    private readonly target: HTMLElement;

    constructor(targetName: string) {
        this.target = document.querySelector(targetName) as HTMLElement;
        window.onpopstate = event => {
            this.render(routes[window.location.pathname]);
        };
    }

    private render(el: st.elementForm) {
        const source = document.createElement(el.component) as HTMLElement;
        for(let attr of el.attributes) {
            source.setAttribute(attr.name, attr.value)
        }
        const childrens = this.target.children;
        while(childrens.length !== 0) {
            childrens.item(0)?.remove();
        }
        this.target.appendChild(source);
    }

    public push(path: string) {
        window.history.pushState({}, path, window.location.origin + path);
        this.render(routes[path]);
    }
}