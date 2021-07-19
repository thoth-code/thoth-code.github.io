import actions from "./actions";
import state from "./state";
import mutations from "./mutations";
import Store from "./store";

declare global {
    interface Window {
        $store: Store;
    }
}

export default function InstallStore() {
    window.$store = new Store({
        actions,
        state,
        mutations,
    });
}