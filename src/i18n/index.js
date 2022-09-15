import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages/index.js'

Vue.use(VueI18n)

export default new VueI18n(
    {
        locale: 'vi',
        fallbackLocale: 'en',
        silentFallbackWarn: true, // disable fallback local warning message in console log
        messages
        
    }
)