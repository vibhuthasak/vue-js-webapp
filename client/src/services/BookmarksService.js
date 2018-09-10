import api from '@/services/api'

export default {
  index (params) {
    return api().get('bookmarks', {
      params: params
    })
  },
  post (bookmark) {
    return api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return api().delete(`bookmarks/${bookmarkId}`)
  }
}
