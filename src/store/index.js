import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store =new Vuex.Store({
  state: {
    loggedIn: false
  },
  getters: {
    authenticationState: state => state.loggedIn
  },
  mutations: {
    CHANGE_LOGGEDIN_STATE: state => {
        state.loggedIn = !state.loggedIn
    },
    LOGOUT: (state, username) => {
        state.loggedIn = !state.loggedIn
        console.log(`${username} click logout`);
    }
    
  },
  actions: {
  },
  modules: {
  }
})

export default store;