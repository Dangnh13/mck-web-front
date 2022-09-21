const state = {
    loginWindow: null,

    loggedIn: false,
    info: {
        age: 20
    }
};
const getters = {
    isOpenLoginWindow: state => state.loginWindow,

    authenticationState: state => state.loggedIn,
    getAge: state => state.info.age
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


    CHANGE_LOGGEDIN_STATE: state => {
        console.log('vao CHANGE_LOGGEDIN_STATE mutation');
        state.loggedIn = !state.loggedIn
    },
    LOGOUT: (state, username) => {
        state.loggedIn = !state.loggedIn
        console.log(`${username} click logout`);
    }

};
const actions = {
    logoutAction: (context, uName) => {
        let { commit } = context;
        commit('LOGOUT', uName)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}