<template>
  <div>
    <v-icon>mdi-test-tube</v-icon> <br />
    <p>message clgt: {{ $t('hello') }}</p>
    {{'my name is Hai Dang' | uppercaseFirst}}
    <v-btn color="success" @click="changeLocale()">Change local</v-btn>
    <br /> validation:
    <ValidationProvider rules="required|email" name="email" v-slot="{ errors }">
      <v-text-field v-model="value" label="Email" :error-messages="errors"></v-text-field>
    </ValidationProvider>

  </div>
 
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = 'en';
    }
  },
}
</script>

<style lang="scss" scoped>

</style>