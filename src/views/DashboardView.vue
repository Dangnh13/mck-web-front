<template>
  <div class="home">
    Dashboard after login with: <br />
    PeopleAge is {{peopleAge}} <br />
    AuthAge is {{getAge}}
    <br /> myGetAge: {{myGetAge}}
    <router-link to="/about">About</router-link> |
    <v-btn color="success" @click="logoutAction('NGO Thu DANG')">LOGOUT</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'DashboardView',
  components: {
  },
  computed: {
    ...mapGetters(
      'people', { peopleAge: 'getAge' },
    ),
    ...mapGetters(
      'auth', ['getAge'],
    ),

    myGetAge() {
      return this.getAge
    }
  },
  methods: {
    ...mapActions('auth', [
      'logoutAction',
    ]),

    ...mapMutations('auth', ['CHANGE_LOGGEDIN_STATE', 'LOGOUT']),
  }
}
</script>
