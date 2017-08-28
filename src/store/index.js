import Vue from 'vue';
import Vuex from 'vuex';

import display from "./modules/display";
import types from "./modules/types";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false
    },
    modules: {
        display,
        types
    }
});