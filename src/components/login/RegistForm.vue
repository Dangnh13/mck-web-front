<template>
    <v-window-item :value="2">
        <v-row>
            <v-col cols="12" md="6" class="blue rounded-br-xl">
                <div style="text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                        <h1 class="text-center ">Alredy Signed up?</h1>
                        <h5 class="mt-3 text-center">
                            Log in to your account so you can continue building and<br>
                            editing your onboarding flows
                        </h5>
                    </v-card-text>
                    <div class="text-center">
                        <v-btn tile outlined dark @click="OPEN_LOGIN_WINDOW('LOGIN')">Sign in</v-btn>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" md="6">
                <v-card-text class="mt-12">
                    <h1 class="text-center">Sign Up for an Account</h1>
                    <h5 class="mt-3 text-center  grey--text ">
                        Let's get you all set up so you can start creatin your <br>
                        first onboarding experiance</h5>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="First Name" outlined dense color="blue" autocomplete="false"
                                        class="mt-4" />
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Last Name" outlined dense color="blue" autocomplete="false"
                                        class="mt-4" />
                                </v-col>
                            </v-row>
                            <v-text-field label="Email" outlined dense color="blue" autocomplete="false" />
                            <v-text-field label="Password" outlined dense color="blue" autocomplete="false" type="password" />
                            <v-text-field label="Confirm password" outlined dense color="blue" autocomplete="false" type="password" />
                            <v-row>
                                <v-col cols="12" sm="12" class="text-justify">
                                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với <span class="blue--text ">
                                        Terms & Conditions
                                    </span> của chúng tôi
                                </v-col>
                            </v-row>
                            <v-btn color="blue" class="mt-2" dark block tile>Sign up</v-btn>

                            <h5 class="text-center  grey--text mt-4 mb-3">Or Sign up
                                using</h5>
                            <div class="d-flex  justify-space-between align-center mx-10 mb-11">
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
            </v-col>
        </v-row>
    </v-window-item>
</template>

<script>
import mixin from './mixin'

export default {
    mixins: [mixin],
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