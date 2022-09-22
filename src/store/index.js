import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        paths: ['auth.authenticated']
    })],
    state: {
        count: 1
    },
    getters: {
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        }
    },
    actions: {
    },
    modules: {
        auth,
    }
})

export default store;