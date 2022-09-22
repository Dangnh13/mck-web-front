import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages/index.js'

Vue.use(VueI18n)

const findLang = () => {
    return window.navigator.language ? window.navigator.language.split("-")[0] : 'en'
}


export default new VueI18n(
    {
        locale: findLang(),
        fallbackLocale: 'en',
        silentFallbackWarn: true, // disable fallback local warning message in console log
        messages
        
    }
)