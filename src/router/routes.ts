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
                attributes: [
                    {
                        name: "class",
                        value: "printer",
                    },
                ],
            };
        case '/signup' :
            return {
                component: 'sign-up',
                attributes: [
                    {
                        name: "class",
                        value: "printer",
                    },
                ],
            };
        case '/note/new' :
            return {
                component: 'new-note',
                attributes: [
                    {
                        name: "class",
                        value: "editor",
                    },
                ],
            };
        case '/myboard' :
            return {
                component: 'my-board',
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
            } else if(/\/note\/edit\/.*/.test(path)) {
                return {
                    component: 'edit-note',
                    attributes: [
                        {
                            name: "class",
                            value: "editor",
                        },
                    ],
                }
            } else {
                return {
                    component: path,
                    attributes: [],
                };
            }
    }
}