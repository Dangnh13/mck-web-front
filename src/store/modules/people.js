const state = {
    info: {
        age: 100
    }
    
};
const getters = {
    getAge: state=> state.info.age
};
const mutations = {
    

};
const actions = {
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}