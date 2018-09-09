<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <router-link
          slot="action"
          :to="{name: 'songs-create'}">
          <v-btn
            class="cyan accent-2"
            small
            absolute
            right
            middle
            light
            fab>
            <v-icon>add</v-icon>
          </v-btn>
        </router-link>
        <slot>
          <div
            v-for="song in songs"
            class="song"
            :key="song.id">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{song.title}}
                </div>
                <div class="song-artist">
                  {{song.artist}}
                </div>
                <div class="song-genre">
                  {{song.genre}}
                </div>

                <v-btn
                  dark
                  class="cyan"
                  @click="navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id
                    }
                  })">
                  View
                </v-btn>
              </v-flex>

              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl">
              </v-flex>
            </v-layout>
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
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

.song {
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
}
</style>
