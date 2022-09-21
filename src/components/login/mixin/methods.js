
import { mapMutations } from 'vuex';

export default {
  ...mapMutations("auth", ["OPEN_LOGIN_WINDOW", "CLOSE_LOGIN_WINDOW"]),
}