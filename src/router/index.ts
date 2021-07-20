import Router from './router';

declare global {
    interface Window {
        $router: Router;
    }
}

function InstallRouter() {
    window.onload = () => {
        window.$router = new Router('#whiteboard');
        window.$router.push(window.location.pathname);
    }
}

export default InstallRouter;