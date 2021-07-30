import Channel from "../domain/channel";
import {st} from 'state-types';

export default class Store implements st.StoreInterface {
    events: st.ChannelInterface;
    actions: st.actions;
    mutations: st.mutations
    state: st.state
    status: string;

    constructor(params: {
        actions: st.actions,
        mutations: st.mutations,
        state: st.state})
    {
        this.events = new Channel();
        this.status = 'resting';
        this.actions = params.actions;
        this.mutations = params.mutations;
        let self = this;
        this.state = new Proxy(params.state, {
            set: function(state: st.state, key, value: st.note[]) {
                state[key.toString()] = value;
                console.log(`[${new Date()} State changed : ${state}[${String(key)}] = ${value}]`);
                self.events.publish('stateChange');
                self.status = 'mutations';
                return true;
            },
        });
    };

    dispatch(actionKey: string, data: st.actionData) {
        if(typeof this.actions[actionKey] !== 'function') {
            console.error(`Action ${actionKey} doesn't exists`);
            return false;
        }
        this.status = 'action';
        this.actions[actionKey](this, data);
        return true;
    };

    commit(mutationKey: string, payLoad: st.mutationPayload) {
        if(typeof this.mutations[mutationKey] !== 'function') {
            console.error(`Mutation ${mutationKey} doesn't exists`);
            return false;
        }
        this.status = 'mutation';
        let newState = this.mutations[mutationKey](this.state, payLoad);
        this.state = Object.assign(this.state, newState);
        return true;
    }
}