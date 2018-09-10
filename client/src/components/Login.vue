<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <slot>
          <v-text-field label="Email" v-model="email"> </v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password"> </v-text-field>
          <br>
          <div class="error_log" v-html="error" />
          <br>
          <v-btn class="cyan" @click="login" dark> Login </v-btn>
        </slot>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationService from '@/services/authenticationService'
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
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
        // console.log(this)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user.email)
        this.$router.push({
          name: 'songs'
        })
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

<style scoped>

.error_log {
  color: red;
}

</style>
