import { st } from "state-types";

export default function routes(path: string): st.elementForm {
    switch(path) {
        /** 
         * STATIC ROUTES
         */
        case '/' :
            return {
                component: 'searched-notes',
                attributes: [],
            };
        case '/signin' :
            return {
                component: 'sign-in',
                attributes: [],
            };
        case '/signup' :
            return {
                component: 'sign-up',
                attributes: [],
            };
        default :
        /**
         * DYNAMIC ROUTES
         */
            if(/\/notes.*/.test(path)) {
                return {
                    component: 'searched-notes',
                    attributes: [],
                };
            } else {
                return {
                    component: '',
                    attributes: [],
                };
            }
    }
}