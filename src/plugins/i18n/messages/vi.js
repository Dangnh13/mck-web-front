import vi from 'vuetify/lib/locale/vi.js'
import validationMessage from 'vee-validate/dist/locale/vi.json'
export default {
        ...vi,
        hello: 'Xin chào',
        validations: {
                fields: {
                        email: 'Địa chỉ Email',
                        password: 'Mật khẩu'
                },
                messages: {
                        ...validationMessage.messages
                }

        }
}