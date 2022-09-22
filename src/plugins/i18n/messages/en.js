import en from 'vuetify/lib/locale/en.js'
import validationMessage from 'vee-validate/dist/locale/en.json'
export default {
        ...en,
        hello: 'HI',
        langTitleEN: 'English',
        langTitleVN: 'VietNam',
        nav: {
                home: "HOME",
                aboutUs: "ABOUT US",
                pricing: "PRICING",
                useCases: "USE CASES",
                contact: "CONTACT",
                signIn: 'SIGN IN',
                signUp: 'SIGN UP'
        },
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