<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <slot>
          <v-text-field label="Email" v-model="email"> </v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password"> </v-text-field>
          <br>
          <div class="error_log" v-html="error" />
          <br>
          <v-btn class="cyan" @click="register" dark> Register </v-btn>
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
    async register () {
      try {
        await authenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$router.push({
          name: 'login'
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
