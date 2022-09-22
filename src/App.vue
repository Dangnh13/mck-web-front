<template>
  <v-app>
    <div>
      <router-view v-if="getAuthenticated"></router-view>
      <router-view v-else name="anonymous"></router-view>
    </div>
  </v-app>

</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  created() {
    let langSeleteced = this.getLangItemSelected;
    if (!langSeleteced) {
      let currentLocal = this.$i18n.locale;
      this.SELETECT_LANG(currentLocal)
    } else {
      this.$i18n.locale = langSeleteced.key
    }
  },
  computed: {
    ...mapGetters(
      'auth', ['getAuthenticated',],
    ),
    ...mapGetters('lang', ['getLangItemSelected']),
  },
    methods: {
        ...mapMutations("lang", [ 'SELETECT_LANG']),
        changeLang() {
            this.CHANGE_LANGUAGE(this.selectedLang)
            this.$i18n.locale=this.getLangItemSelected.key
        }
    },

}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
