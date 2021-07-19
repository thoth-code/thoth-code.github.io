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
            dispatch: (actionKey: string, data?: note | userInfo) => boolean;
            commit: (mutationKey: string, payLoad: note[] | authToken) => boolean;
        }

        interface ComponentInterface {
            get template(): string
            get dispatch(): string
            render: () => void
            addEvents: () => void
            addStyles: () => void
            propsHandler: (props: string) => void
        }

        type authToken = {accessToken: string, refreshToken: string};
        type userInfo = {email: string, password: string};
        type note = {title: string, code: string, tag: string};

        type action = (context: Store, data?: note | userInfo) => void;
        type state = {[index: string]: note[]};
        type mutation = (state: state, payload: any) => void;

        type components = {[index: string]: ComponentInterface[]};
        type actions = {[index: string]: action};
        type mutations = {[index: string]: mutation};

        type elementForm = {component: string, attributes: {name: string, value: string}[]}
        type routes = {[index: string]: elementForm}
    }
}