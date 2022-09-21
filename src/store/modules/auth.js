const state = {
    loginWindow: null,
    authenticated: false,
};
const getters = {
    isOpenLoginWindow: state => state.loginWindow,
    getAuthenticated: state => state.authenticated,
};
const mutations = {
    OPEN_LOGIN_WINDOW: (state, windowType) => {
        if (windowType === 'LOGIN') {
            state.loginWindow = 1
        } else {
            state.loginWindow = 2
        }
    },
    CLOSE_LOGIN_WINDOW: state => {
        state.loginWindow = null;
    },
    SET_AUTHENTICATION_STATE: (state, isLoggedIn) => {
        state.authenticated = isLoggedIn;
    }
};
const actions = {
    setAuthenticationState({ commit }, isLoggedIn) {
        commit("SET_AUTHENTICATION_STATE", isLoggedIn);
      },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}