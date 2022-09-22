<template>
  <v-app>
    <div>
      <router-view v-if="getAuthenticated"></router-view>
      <router-view v-else name="anonymous"></router-view>
    </div>
  </v-app>

</template>
<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    let langSeleteced = this.getLangItemSelected;
    if (langSeleteced) {
      this.$i18n.locale = langSeleteced.key
    }
  },
  computed: {
    ...mapGetters(
      'auth', ['getAuthenticated',],
    ),
    ...mapGetters('lang', ['getLangItemSelected']),
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
