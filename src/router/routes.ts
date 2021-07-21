import { st } from "state-types";

const routes: st.routes = {
    '/': {
        component: 'searched-notes',
        attributes: [
            {
                name: 'dispatch',
                value: 'getAllNotes',
            },
        ],
    },
    '/signin': {
        component: 'sign-in',
        attributes: [],
    },
    '/signup': {
        component: 'sign-up',
        attributes: [],
    }
};

export default routes;