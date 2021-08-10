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
            dispatch: (actionKey: string, data: actionData) => boolean;
            commit: (stateKey: string, mutationKey: string, payLoad: mutationPayload) => boolean;
        }

        interface ComponentInterface {
            get template(): string
            render: () => void
            dispatch: () => void
            addEvents: () => void
            propsHandler: (props: string) => void
        }

        type error = {error: string};
        type userInfo = {uname?: string, email: string, password: string};
        type note = {oid: string, title: string, code: string, tag: string[], ref: string[]};
        type flag = {title: string, path: string};
        type reqParamQuery = string;

        type stateType = note | flag
        type actionData = note | userInfo | reqParamQuery;
        type mutationPayload = note[] | flag[];

        type action = (context: StoreInterface, data?: actionData) => void;
        type state = {[index: string]: stateType[]};
        type mutation = (state: stateType[], payload: mutationPayload) => void;

        type components = {[index: string]: ComponentInterface[]};
        type actions = {[index: string]: action};
        type mutations = {[index: string]: mutation};

        type elementForm = {component: string, attributes: {name: string, value: string}[]}
        type routes = {[index: string]: elementForm}
    }
}