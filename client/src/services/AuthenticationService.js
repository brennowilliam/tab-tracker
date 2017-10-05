import Api from '@/services/Api'
// Api returns an axios object configured with the base URL.
export default {
  register: function (credentials) {
    return Api().post('register', credentials)
  },
  login: function (credentials) {
    return Api().post('login', credentials)
  }
}
