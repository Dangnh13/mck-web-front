const state = {
    langItems: [
        {
            key: 'en',
            title: 'langTitleEN',
            seletected: false
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
    getLangByKey: (state, key) => state.langItems.find(e => e.key === key),
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
    SELETECT_LANG: (state, key) => {
        let findByKey = getters.getLangByKey(state, key);
        if(findByKey) {
            findByKey.seletected = true;
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