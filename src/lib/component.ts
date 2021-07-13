import {st} from 'state-types';
import store from "../store";

export default class Component implements st.ComponentInterface{
    element: HTMLElement;
    store: st.StoreInterface;

    constructor(props: {element: HTMLElement}) {
        this.store = store;
        this.element = props.element;
        this.store.events.subscribe('stateChange', this);
    };

    render() {};
}