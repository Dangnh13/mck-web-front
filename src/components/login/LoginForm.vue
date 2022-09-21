<template>
    <v-window-item :value="1">
        <v-row>
            <v-col cols="12" md="6">
                <ValidationObserver ref="loginFormRef" v-slot="{handleSubmit }">
                    <v-form @submit.prevent="handleSubmit(loginHandling)">
                        <v-card-text class="mt-12">
                            <h1 class="text-center">Login in to Your Account</h1>
                            <h5 class="mt-2 text-center grey--text ">
                                Log in to your account so you can continue builiding <br>
                                and editing your onboarding flows
                            </h5>
                            <v-row align="center" justify="center">
                                <v-col cols="12" sm="8">
                                    <ValidationProvider rules="required|email" name="email" v-slot="{ errors }">
                                        <v-text-field v-model="email" label="Email" outlined dense color="blue"
                                            autocomplete="false" class="mt-10" :error-messages="errors" />
                                    </ValidationProvider>
                                    <ValidationProvider rules="required" name="password" v-slot="{ errors }">
                                        <v-text-field v-model="password" label="Password" outlined dense color="blue"
                                            autocomplete="false" type="password" class="mt-10"
                                            :error-messages="errors" />
                                    </ValidationProvider>
                                    <v-row>
                                        <v-col cols="12" sm="7">
                                            <v-checkbox label="Remember Me" class="mt-n1" color="blue">
                                            </v-checkbox>
                                        </v-col>
                                        <v-col cols="12" sm="5">
                                            <span class="caption blue--text">Forgot password</span>
                                        </v-col>
                                    </v-row>
                                    <v-btn color="blue" dark block tile type="submit">Sign in</v-btn>

                                    <h5 class="text-center  grey--text mt-4 mb-3">
                                        Or Log in using
                                    </h5>
                                    <div class="d-flex justify-space-between align-center mx-10 mb-16">
                                        <v-btn depressed outlined color="grey">
                                            <v-icon color="red">mdi-google</v-icon>
                                        </v-btn>
                                        <v-btn depressed outlined color="grey">
                                            <v-icon color="blue">mdi-facebook</v-icon>
                                        </v-btn>
                                        <v-btn depressed outlined color="grey">
                                            <v-icon color="light-blue lighten-3">mdi-twitter
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-form>
                </ValidationObserver>
            </v-col>
            <v-col cols="12" md="6" class="blue rounded-bl-xl">
                <div style="text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                        <h1 class="text-center ">Don't Have an Account Yet?</h1>
                        <h5 class="mt-3 text-center">Let's get you all set up so you can
                            start creating your your first<br> onboarding experience
                        </h5>
                    </v-card-text>
                    <div class="text-center">
                        <v-btn tile outlined dark @click="OPEN_LOGIN_WINDOW('SIGN_UP')">SIGN UP
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-window-item>
</template>

<script>
import mixin from './mixin'
import AuthService from '@/service/AuthService'
import LoginRequest from '@/service/dto/auth/LoginRequest'
export default {
    mixins: [mixin],
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async loginHandling() {
            this.$refs.loginFormRef.validate().then(async success => {
                if (success) {
                    let response = await AuthService.login(new LoginRequest('dang.nh@gmail.com', 'pass123'))
                    console.log('response :', response);
                    localStorage.setItem('user', JSON.stringify(response))
                    return true;
                }
                return false;
            });
        }
    },
}
</script>

<style lang="scss" scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>