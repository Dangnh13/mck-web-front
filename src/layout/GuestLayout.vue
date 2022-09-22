<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-app-bar-title>Appbar title</v-app-bar-title>
            <v-spacer></v-spacer>
            <nav class="d-none d-md-block">
                <v-btn text @click="forwardToRouteName('home')">
                    {{$t('nav.home')}}
                </v-btn>
                <v-btn text @click="forwardToRouteName('about')">
                    {{$t('nav.aboutUs')}}
                </v-btn>
                <v-btn text>
                    {{$t('nav.pricing')}}
                </v-btn>
                <v-btn text>
                    {{$t('nav.useCases')}}
                </v-btn>
                <v-btn text>
                    {{$t('nav.contact')}}
                </v-btn>
            </nav>
            <v-spacer></v-spacer>
            <v-menu transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="ma-2" text v-bind="attrs" v-on="on">
                        <v-icon dark left>
                            mdi-web
                        </v-icon>{{$t(getLangItemSelected.title)}}
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item-group color="primary" @change="changeLang()" v-model="selectedLang">
                        <v-list-item v-for="(item, i) in langItems" :key="i">
                            <v-list-item-title>{{$t( item.title )}}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-btn text @click="OPEN_LOGIN_WINDOW('LOGIN')">
                {{$t('nav.signIn')}}
            </v-btn>
            <v-btn text @click="OPEN_LOGIN_WINDOW('SIGN_UP')">
                {{$t('nav.signUp')}}
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
                <v-list-item  :key="1" link>
                    <v-list-item-content>
                        <v-list-item-title>ITEM 1</v-list-item-title>
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
import { mapState, mapGetters, mapMutations, } from 'vuex';
import LoginAndRegist from '@/components/login/LoginAndRegist.vue';
export default {
    data() {
        return {
            selectedLang: null,
            drawer: false,
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        };
    },
    created () {
        this.selectedLang = this.getIndexOfLangItemSelected;
    },
    computed: {
        ...mapState({
            langItems: state => state.lang.langItems,
        }),
        ...mapGetters('lang', ['getLangItemSelected', 'getIndexOfLangItemSelected']),
       
    },
    methods: {
        ...mapMutations("auth", ["OPEN_LOGIN_WINDOW"]),
        ...mapMutations("lang", ['CHANGE_LANGUAGE']),
        changeLang() {
            this.CHANGE_LANGUAGE(this.selectedLang)
            this.$i18n.locale=this.getLangItemSelected.key
        }
    },
    components: { LoginAndRegist, }
}
</script>

<style lang="scss" scoped>

</style>