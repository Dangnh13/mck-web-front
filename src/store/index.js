import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth'
import lang from './modules/lang'
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        paths: ['auth.authenticated', 'lang']
    })],
    state: {
    },
    getters: {
    },
    mutations: {
       
    },
    actions: {
    },
    modules: {
        auth,
        lang
    }
})

export default store;