<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="mr-4">
      <span class='home' @click="navigateTo({name: 'root'})">
        VuejsApp
      </span>
    </v-toolbar-title>

  <v-toolbar-items>
    <v-btn
      flat
      dark
      @click="navigateTo({name: 'songs'})">
      Browse
    </v-btn>
  </v-toolbar-items>

  <v-spacer> </v-spacer>

  <v-toolbar-items>
    <v-btn
      v-if="!$store.state.isLoggedIn"
      flat dark @click="navigateTo({name: 'login'})"> Login </v-btn>
    <v-btn
      v-if="!$store.state.isLoggedIn"
      flat dark @click="navigateTo({name: 'register'})"> Sign Up </v-btn>
    <v-btn
      v-if="$store.state.isLoggedIn"
      flat dark @click="logout"> Sign Out </v-btn>
  </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      // console.log(this)
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect user to homepage
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}

</style>
