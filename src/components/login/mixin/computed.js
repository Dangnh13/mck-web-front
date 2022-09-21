import { mapGetters, mapState } from 'vuex';

export default {
    ...mapState({
        loginWindow: state => state.auth.loginWindow,
    }),
    ...mapGetters("auth", ["isOpenLoginWindow"]),
    changeLoginWindow: {
        // getter
        get: function () {
            return this.loginWindow;
        },
        // setter
        set: function () {
        }
    },
    openLoginDialog: {
        // getter
        get: function () {
            return this.isOpenLoginWindow;
        },
        // setter
        set: function (isOpen) {
            if (!isOpen)
                this.CLOSE_LOGIN_WINDOW();
        }
    }
}