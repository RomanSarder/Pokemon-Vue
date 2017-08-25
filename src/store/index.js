import Vue from 'vue';
import Vuex from 'vuex';

import pagination from "./modules/pagination";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false
    },
    modules: {
        pagination
    }
});