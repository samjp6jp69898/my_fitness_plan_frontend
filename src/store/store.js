import { createStore } from "vuex";
import user from "./module/user.module";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user
  },
  plugins: [createPersistedState()]
});
