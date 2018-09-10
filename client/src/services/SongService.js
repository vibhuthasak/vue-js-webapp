import api from '@/services/api'

export default {
  index (search) {
    return api().get('songs', {
      params: {
        search: search
      }
    })
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
