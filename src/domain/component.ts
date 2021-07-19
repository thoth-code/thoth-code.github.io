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

    connectedCallback() {
        const props = this.innerHTML;
        this.innerHTML = this.template;
        this.addEvents();
        this.addStyles();
        this.propsHandler(props);
        if(this.dispatch !== '') {
            window.$store.dispatch(this.dispatch);
        }
    }

    get template() { return ''; }
    get dispatch() { return ''; }

    render() {}
    addEvents() {}
    addStyles() {}
    propsHandler(props: string) {}
}