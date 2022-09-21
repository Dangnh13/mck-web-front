import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    data() {
        return {
        }
    },

    computed: {
        ...mapState({
            loginWindow: state => state.auth.loginWindow,
        }),
        ...mapGetters("auth", ["isOpenLoginWindow",]),
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
    },
    methods: {
        ...mapMutations("auth", ["OPEN_LOGIN_WINDOW", "CLOSE_LOGIN_WINDOW"]),
        ...mapActions('auth', ['setAuthenticationState'])
      },
    components: {
    },

};
