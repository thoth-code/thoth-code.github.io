import { st } from "state-types";

export default class Channel implements st.ChannelInterface {
    components: st.components;

    constructor() {
        this.components = {};
    }

    subscribe(eventName: string, component: st.ComponentInterface) {
        if(!this.components.hasOwnProperty(eventName)) {
            this.components[eventName] = [];
        }
        return this.components[eventName].push(component)
    }

    publish(eventName: string) {
        if(!this.components.hasOwnProperty(eventName)) {
            return [];
        }        
        return this.components[eventName].map((component: st.ComponentInterface) => component.render());
    }
}