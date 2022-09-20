<template>
    <HomeLayout>
        Home Layout
        auth/loggedIn state : {{loggedIn}} <br/>
        auth/authenticationState state : {{authenticationState}} <br/>
        auth/getAge getters: {{getAge}}
    </HomeLayout>
</template>

<script>
import HomeLayout from "@/layout/HomeLayout.vue";
import { mapGetters, mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            loggedIn: state => state.auth.loggedIn,
        }),
        ...mapGetters('auth',['getAge', 'authenticationState'])
    },
    components: {
        HomeLayout,
    },
}
</script>

<style lang="scss" scoped>

</style>