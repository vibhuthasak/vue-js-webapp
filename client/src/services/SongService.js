import api from '@/services/api'

export default {
  index () {
    return api().get('songs')
  },
  post (song) {
    return api().post('songs', song)
  },
  save (song) {
    return api().put(`songs/${song.id}`, song)
  },
  show (songId) {
    return api().get(`songs/${songId}`)
  }
}
