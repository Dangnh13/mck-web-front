<template>
    <div>
        <v-app-bar app>
            <v-app-bar-title>Appbar title</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="forwardToRouteName('about')">
                About Us
            </v-btn>
            <v-btn text>
                Pricing
            </v-btn>
            <v-btn text>
                Use Cases
            </v-btn>
            <v-btn text>
                Contact
            </v-btn>

            <v-spacer></v-spacer>
            <v-menu transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="ma-2" text v-bind="attrs" v-on="on">
                        <v-icon dark left>
                            mdi-web
                        </v-icon>English
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item-group color="primary">
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-btn text @click="OPEN_LOGIN_WINDOW('LOGIN')">
                Login
            </v-btn>
            <v-btn text @click="OPEN_LOGIN_WINDOW('SIGN_UP')">
                Sign Up
            </v-btn>
        </v-app-bar>
        <v-main app>
            <v-container grid-list-xs>
                <LoginAndRegist />
                <slot>
                    <router-view></router-view>
                </slot>
            </v-container>
        </v-main>
        <v-footer dark padless app>
            <v-card flat tile class="indigo lighten-1 white--text text-center">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                    Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                    dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                    Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
                    diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import LoginAndRegist from '@/components/login/LoginAndRegist.vue';
export default {
    data() {
        return {
            items: [
                { title: "English" },
                { title: "VietNam" },
            ],
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        };
    },
    methods: {
        ...mapMutations("auth", ["CHANGE_LOGGEDIN_STATE", "OPEN_LOGIN_WINDOW"]),
    },
    components: { LoginAndRegist }
}
</script>

<style lang="scss" scoped>

</style>