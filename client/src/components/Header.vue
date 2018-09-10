<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="mr-4">
      <router-link
        class='home'
        tag="span"
        :to="{name: 'songs'}">
        VuejsApp
      </router-link>
    </v-toolbar-title>

  <v-toolbar-items>
    <v-btn
      flat
      dark
      :to="{
        name : 'songs'
        }">
      Browse
    </v-btn>
  </v-toolbar-items>

  <v-spacer> </v-spacer>

  <v-toolbar-items>
    <v-btn
      v-if="!$store.state.isLoggedIn"
      flat
      dark
      :to="{name: 'login'}"> Login </v-btn>
    <v-btn
      v-if="!$store.state.isLoggedIn"
      flat dark :to="({name: 'register'})"> Sign Up </v-btn>
    <v-btn
      v-if="$store.state.isLoggedIn"
      flat dark @click="logout"> Sign Out </v-btn>
  </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    // navigateTo (route) {
    //   // console.log(this)
    //   this.$router.push(route)
    // },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect user to homepage
      this.$router.push({
        name: 'songs'
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
  color: cyan;
}

</style>
