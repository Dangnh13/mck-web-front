<template>
  <div class="home">
    Dashboard after login
    <router-link to="/about">About</router-link> |
    <v-btn color="success" @click="logout()">LOGOUT</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'DashboardView',
  components: {
  },
  methods: {
    logout() {
      this.$store.commit('changeLoggedInState');
    }
  },
}
</script>
