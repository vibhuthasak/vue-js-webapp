<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <Panel title="Song Metadata">
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
                name: 'song-edit',
                params: {
                  songId: song.id
                }
              })">
              Edit
            </v-btn>
          </v-flex>

          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl">
            <br>
            {{song.album}}
          </v-flex>
          </v-layout>
        </Panel>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <Panel title="Youtube Video">
          <!-- {{song.youtubeId}} -->
          <youtube
            :video-id="song.youtubeId"
            :player-width="500"
            :player-height="400">
          </youtube>
        </Panel>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <Panel title="Tabs">
            <textarea
            readonly
            v-model="song.tab">
            </textarea>
        </Panel>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <Panel title="Lyrics">
          <textarea
            readonly
            v-model="song.lyrics">
          </textarea>
        </Panel>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>

import SongService from '@/services/SongService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },

  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    // console.log(this.song)
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },

  components: {
    Panel
  }
}
</script>

<style scoped>

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  /* padding: 40px; */
}

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
