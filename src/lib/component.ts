import {st} from 'state-types';
import store from "../store";

export default class Component implements st.ComponentInterface{
    element: HTMLElement;
    store: st.StoreInterface;

    constructor(arg: {element: HTMLElement}) {
        this.element = arg.element;
        this.store = store;
        this.store.events.subscribe('stateChange', this);
    };

    render() {};
}