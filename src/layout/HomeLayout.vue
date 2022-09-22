<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-app-bar-title>Appbar title</v-app-bar-title>
            <v-spacer></v-spacer>
            <nav class="d-none d-md-block">
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
            </nav>
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

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <LoginAndRegist />
            <slot>
                <router-view></router-view>
            </slot>
        </v-main>
        <v-footer dark padless app>
            <v-card width="100%" flat tile class="blue white--text text-center">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
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
            drawer: false,
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
    components: { LoginAndRegist, }
}
</script>

<style lang="scss" scoped>

</style>