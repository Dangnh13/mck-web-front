<template>
  <div class="home">
    Dashboard after login with: <br />
    PeopleAge is {{peopleAge}} <br />
    AuthAge is {{getAge}}
    <br /> myGetAge: {{myGetAge}}
    <router-link to="/about">About</router-link> |
    <v-btn color="success" @click="doLogout()">LOGOUT</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  components: {
  },
  computed: {
  },
  methods: {
    doLogout() {
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
}
</script>
