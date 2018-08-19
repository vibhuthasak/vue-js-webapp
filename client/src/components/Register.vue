<template>
  <div>
    <h1> Register </h1>

    <input type="email" name="email" v-model="email" placeholder="Email" />
    <br>
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <br>
    <button @click="register"> Register </button>
  </div>

</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: 'abcd',
      password: '123445'
    }
  },
  methods: {
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
