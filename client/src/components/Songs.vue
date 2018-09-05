<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <slot>
          <div v-for="song in songs" :key="song.id">
            {{song.title}} -
            {{song.artist}} -
            {{song.album}}
          </div>
        </slot>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    var songsRes = await SongService.index()
    console.log('Songs', songsRes)
    this.songs = songsRes.data
  }
}
</script>

<style scoped>
</style>
