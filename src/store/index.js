import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import people from './modules/people'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

    },
    getters: {
    },
    mutations: {

    },
    actions: {
    },
    modules: {
        people,
        auth,
    }
})

export default store;