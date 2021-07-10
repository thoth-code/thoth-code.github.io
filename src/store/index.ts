import actions from "./actions";
import state from "./state";
import mutations from "./mutations";
import Store from "./store";

export default new Store({
    actions,
    state,
    mutations,
});