import Api from '@/services/Api'
// Api returns an axios object configured with the base URL.
export default {
  index () {
    return Api().get('songs')
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (song) {
    return Api().post('songs', song)
  }
}
