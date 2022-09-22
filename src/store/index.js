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
        barColor: '#f5f5f5;',
        barImage: 'https://previews.123rf.com/images/apostrophe/apostrophe2007/apostrophe200700048/151181580-abstract-black-background-blur-with-gold-ribbon-sidebar-luxury-background-dark-gray-background-with-.jpg?fj=1',
        drawer: null,
    },
    getters: {
    },
    mutations: {
        SET_BAR_IMAGE (state, payload) {
            state.barImage = payload
          },
          SET_DRAWER (state, payload) {
            state.drawer = payload
          },
    },
    actions: {
    },
    modules: {
        auth,
        lang
    }
})

export default store;