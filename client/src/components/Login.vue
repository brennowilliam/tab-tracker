<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="green darken-1" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            name="email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            v-model="password"
            hint="At least 8 charactes and max 32 characters"
            min="8"
            type="password"
          >
          </v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn
              class="green darken-1" dark
              @click="login">
              login</v-btn>
         </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationServices.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error { color: white; }

</style>
