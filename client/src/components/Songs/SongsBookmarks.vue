<template>
  <panel title="Bookmarks">
    <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="bookmarks">
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">
            {{ props.item.title }}
          </td>
          <td class="text-xs-right">
            {{ props.item.artist }}
          </td>
        </template>
      </v-data-table>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarksService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'date',
        descending: true
      },
      bookmarks: [
      ]
    }
  },
  computed: {
    ...mapState([
      'isLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isLoggedIn) {
      this.bookmarks = (await BookmarkService.index({
        userId: this.user.id
      })).data
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
