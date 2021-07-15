import {st} from 'state-types';
import store from "../store";

export default class Component implements st.ComponentInterface{
    element: HTMLElement;
    store: st.StoreInterface;
    props: st.note | undefined;

    constructor(args: {element: HTMLElement, props?: st.note, subscribe?: string}) {
        this.store = store;
        this.element = args.element;
        this.props = args.props;
        if(typeof args.subscribe === 'string') {
            this.store.events.subscribe(args.subscribe, this);
        }
    };

    render() {};
}