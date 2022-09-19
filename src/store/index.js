import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store =new Vuex.Store({
  state: {
    loggedIn: false
  },
  getters: {
  },
  mutations: {
    changeLoggedInState(state) {
        state.loggedIn = !state.loggedIn
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;