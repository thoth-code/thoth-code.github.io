import { st } from "state-types";

const routes: st.routes = {
    '/': {
        component: 'searched-notes',
        attributes: [
            {
                name: 'dispatch',
                value: 'getAllNotes',
            }
        ]
    },
    '/signin': {
        component: 'searched-notes',
        attributes: [
            {
                name: 'dispatch',
                value: 'getAllNotes',
            }
        ]
    }
};

export default routes;