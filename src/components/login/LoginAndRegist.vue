<template>
    <v-overlay opacity="0.7" :value="openLoginDialog">
        <v-dialog overlay-opacity="1" fullscreen transition="dialog-top-transition" v-model="openLoginDialog">
            <v-row justify="center">
                <v-col cols="10" sm="10">
                    <v-card class="mt-10">
                        <v-window v-model="changeLoginWindow">
                            <LoginForm />
                            <RegistForm />
                        </v-window>
                        <v-card-actions class="justify-end">
                            <v-btn text @click="CLOSE_LOGIN_WINDOW">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-dialog>
    </v-overlay>
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