import { st } from "state-types";

export default class Component extends HTMLElement implements st.ComponentInterface{
    constructor(option?: {
        subscribe: string
    }) {
        super();
        if(typeof option !== 'undefined') {
            window.$store.events.subscribe(option.subscribe, this);
        }
    }

    // Pre-defined methods
    connectedCallback() {
        const props = this.innerHTML;
        this.innerHTML = this.template;
        this.propsHandler(props);
        this.dispatch();
        this.addStyles();
        this.addEvents();
    }

    // Child-define methods
    get template() { return ''; }

    render() {}
    dispatch() {}
    addStyles() {}
    addEvents() {}
    propsHandler(props: string) {}
}