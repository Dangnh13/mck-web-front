const state = {
    langItems: [
        {
            key: 'en',
            title: 'langTitleEN',
            seletected: true
        },
        {
            key: 'vi',
            title: 'langTitleVN',
            seletected: false
        }
    ]

};
const getters = {
    getLangItemSelected: state => state.langItems.find(e => e.seletected),
    getIndexOfLangItemSelected: state => state.langItems.findIndex(e => e.seletected),
};
const mutations = {
    CHANGE_LANGUAGE: (state, index) => {
        let currentLang =  getters.getLangItemSelected(state);
        let foundLang = state.langItems[index]
        if(foundLang) {
            foundLang.seletected = true;
            currentLang.seletected = false;
        }
    },
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