import en from 'vuetify/lib/locale/en.js'
import validationMessage from 'vee-validate/dist/locale/en.json'
export default {
        ...en,
        hello: 'HI',
        validations: {
                fields: {
                        email: 'Email',
                        password: 'Password'
                },
                messages: {
                        ...validationMessage.messages
                }

        }
}