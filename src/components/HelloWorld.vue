<template>
  <v-app>
    <v-icon>mdi-test-tube</v-icon> <br/>
    <p>message : {{ $t('hello') }}</p> 
    <v-btn color="success" @click="changeLocale()">Change local</v-btn>
  </v-app>
</template>

<script>
  export default {
    methods: {
      changeLocale() {
        this.$i18n.locale = 'en';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>