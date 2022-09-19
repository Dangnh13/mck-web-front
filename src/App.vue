<template>
  <v-app>
    <div>
      <router-view v-if="loginState"></router-view>
      <router-view v-else name="anonymous"></router-view>
    </div>
  </v-app>

</template>
<script>
export default {
  computed: {
    loginState() {
      return this.$store.state.loggedIn 
    }
  },
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
