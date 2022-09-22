import vi from 'vuetify/lib/locale/vi.js'
import validationMessage from 'vee-validate/dist/locale/vi.json'
export default {
        ...vi,
        hello: 'Xin chào',
        langTitleEN: 'Tiếng Anh',
        langTitleVN: 'Tiếng Việt',
        nav: {
                home: "TRANG CHỦ",
                aboutUs: "VỀ CHÚNG TÔI",
                pricing: "GIÁ",
                useCases: "CÁC TÌNH HUỐNG",
                contact: "LIÊN HỆ",
                signIn: 'ĐĂNG NHẬP',
                signUp: 'ĐĂNG KÝ'
        },
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