<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
// import SongService from '@/services/SongService'
// import Panel from '@/components/Panel'
export default {
  components: {
    // Panel,
    SongsPanel,
    SongsSearchPanel
  }
  // data () {
  //   return {
  //     songs: null
  //   }
  // },
  // async mounted () {
  //   var songsRes = await SongService.index()
  //   console.log('Songs', songsRes)
  //   this.songs = songsRes.data
  // },
  // methods: {
  //   navigateTo (route) {
  //     this.$router.push(route)
  //   }
  // }
}
</script>

<style scoped>

/* .song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
} */
</style>
