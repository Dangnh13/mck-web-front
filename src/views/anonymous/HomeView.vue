<template>
    <HomeLayout>
        Home Layout
        auth/loggedIn state :  <br/>
        auth/authenticationState state :  <br/>
        auth/getAge getters: 
        <br/>
        <div style="border: 1px solid red;height: 1200px"></div>
    </HomeLayout>
</template>

<script>
import HomeLayout from "@/layout/HomeLayout.vue";
import { mapGetters } from "vuex";

export default {
   
    computed: {
        ...mapGetters('auth',['authenticationState'])
    },
    components: {
        HomeLayout,
    },
}
</script>

<style lang="scss" scoped>

</style>