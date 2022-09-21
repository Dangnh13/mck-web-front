<template>
  <div class="home">
    Dashboard view <br />
    <router-link to="/about">About</router-link> |
    <v-btn color="success" @click="setAuthenticationState(false)">LOGOUT</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'DashboardView',
  components: {
  },
  computed: {
  },
  methods: {
    ...mapActions('auth', ['setAuthenticationState'])
  },

}
</script>
