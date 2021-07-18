import {st} from 'state-types';
import store from "../store";

export default abstract class Component extends HTMLElement {
    readonly store: st.StoreInterface;

    constructor(option?: {
        subscribe: string
    }) {
        super();
        this.store = store;
        if(typeof option !== 'undefined') {
            this.store.events.subscribe(option.subscribe, this);
        }
    }

    connectedCallback() {
        const props = this.innerHTML;
        this.innerHTML = this.template;
        this.addEvents();
        this.addStyles();
        this.propsHandler(props);
        this.dispather();
    }

    abstract get template(): string;

    render() {}
    addEvents() {}
    addStyles() {}
    dispather() {}
    propsHandler(props: string) {}
}