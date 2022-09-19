<template>
    <div>
        <v-app-bar app>
            <v-app-bar-title>Appbar title</v-app-bar-title>
            <v-spacer></v-spacer>
            <nav>
                <router-link active-class="active" to="/">Login</router-link> |
                <router-link active-class="active" to="/about">About</router-link>
                <v-btn color="success" @click="login()">Perform login</v-btn>
            </nav>
        </v-app-bar>
        <v-main>
            <slot>
                <router-view></router-view>
            </slot>
        </v-main>
        <v-footer app>
            Footer
        </v-footer>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.commit('changeLoggedInState')
        }
    },
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    background-color: red;
}
</style>