<template>
    <v-dialog transition="dialog-top-transition"   v-model="openLoginDialog">
        <v-row justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-10">
                    <v-window v-model="changeLoginWindow">
                        <LoginForm />
                        <RegistForm />
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-dialog>
</template>

<script>
import LoginForm from './LoginForm.vue';
import RegistForm from './RegistForm.vue';
import mixin from './mixin'
export default {
    mixins: [mixin],
    components: { LoginForm, RegistForm }
}
</script>

<style lang="scss" scoped>

</style>