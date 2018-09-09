<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <panel title="Song Metadata">
          <v-text-field
            label="Title"
            :rules = [rules.required]
            v-model="song.title"
          ></v-text-field>

          <v-text-field
            label="Artist"
            :rules = [rules.required]
            v-model="song.artist"
          ></v-text-field>

          <v-text-field
            label="Genre"
            :rules = [rules.required]
            v-model="song.genre"
          ></v-text-field>

          <v-text-field
            label="Album"
            :rules = [rules.required]
            v-model="song.album"
          ></v-text-field>

          <v-text-field
            label="Album Image Url"
            :rules = [rules.required]
            v-model="song.albumImageUrl"
          ></v-text-field>

          <v-text-field
            label="YouTube id"
            :rules = [rules.required]
            v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-flex>

      <v-flex xs8 >
        <panel title="Song Structure" class="ml-4">
          <v-text-field
              label="Tab"
              :rules = [rules.required]
              multi-line
              v-model="song.tab"
            ></v-text-field>

            <v-text-field
              label="Lyrics"
              :rules = [rules.required]
              multi-line
              v-model="song.lyrics"
            ></v-text-field>
        </panel>

        <div class="error-validate" v-if="error">
          {{error}}
        </div>

        <v-btn
          dark
          class="cyan"
          @click="create">
          Create Song
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      rules: {
        required: (value) => !!value || 'Required'
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areFilledIn) {
        this.error = 'Please fill required fields'
        return
      }

      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

.error-validate {
  color: red;
}
</style>
