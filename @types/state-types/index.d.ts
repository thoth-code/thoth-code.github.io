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
            dispatch: (actionKey: string) => boolean;
            commit: (mutationKey: string, payLoad: note) => boolean;
        }

        interface ComponentInterface {
            element: HTMLElement | null;
            store: Store;
            render: () => void;
        }

        type note = {title: string, code: string, tag: string};

        type action = (context: Store) => void;
        type state = {[index: string]: note[]};
        type mutation = (state: state, payload: any) => void;

        type components = {[index: string]: ComponentInterface[]};
        type actions = {[index: string]: action};
        type mutations = {[index: string]: mutation};
    }
}