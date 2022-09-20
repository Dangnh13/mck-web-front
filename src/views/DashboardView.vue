<template>
  <div class="home">
    Dashboard after login
    <router-link to="/about">About</router-link> |
    <v-btn color="success" @click="LOGOUT('NGO HAI DANG')">LOGOUT</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';


export default {
  name: 'DashboardView',
  components: {
  },
  methods: 
    mapMutations(['CHANGE_LOGGEDIN_STATE', 'LOGOUT'])
}
</script>
