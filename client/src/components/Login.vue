<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
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
            login
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error { color: white; }

</style>
