import {st} from 'state-types';
import store from "../store";

export default class Component extends HTMLElement {
    readonly $store: st.StoreInterface;

    constructor(option?: {
        subscribe: string
    }) {
        super();
        this.$store = store;
        if(typeof option !== 'undefined') {
            this.$store.events.subscribe(option.subscribe, this);
        }
    }

    connectedCallback() {
        const props = this.innerHTML;
        this.innerHTML = this.template;
        this.addEvents();
        this.addStyles();
        this.propsHandler(props);
        if(this.dispatch !== '') {
            this.$store.dispatch(this.dispatch);
        }
    }

    get template() { return ''; }
    get dispatch() { return ''; }

    render() {}
    addEvents() {}
    addStyles() {}
    propsHandler(props: string) {}
}