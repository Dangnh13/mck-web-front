<template>
  <v-app>
    <div>
      <router-view v-if="authenticationState"></router-view>
      <router-view v-else name="anonymous"></router-view>
    </div>
  </v-app>

</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {

  computed: {...mapState(['loggedIn']), ...mapGetters(['authenticationState'])}
  
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
