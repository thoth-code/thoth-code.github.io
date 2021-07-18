declare module 'state-types' {
    export namespace st {
        interface ChannelInterface {
            components: components;
            subscribe: (eventName: string, component: ComponentInterface) => number;
            publish: (eventName: string) => void[];
        }
        
        interface StoreInterface {
            events: Channel;
            actions: actions;
            mutations: mutations;
            state: state;
            status: string;
            dispatch: (actionKey: string, data?: note) => boolean;
            commit: (mutationKey: string, payLoad: note) => boolean;
        }

        interface ComponentInterface {
            el: ShadowRoot;
            store: Store;
            render: () => void;
            addEvents: () => void;
            addStyles: () => void;
        }

        type note = {title: string, code: string, tag: string};

        type action = (context: Store, data?: note) => void;
        type state = {[index: string]: note[]};
        type mutation = (state: state, payload: any) => void;

        type components = {[index: string]: ComponentInterface[]};
        type actions = {[index: string]: action};
        type mutations = {[index: string]: mutation};

        type elementForm = {component: string, attributes: {name: string, value: string}[]}
        type routes = {[index: string]: elementForm}
    }
}