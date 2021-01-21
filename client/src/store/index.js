import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    welcoming: '',
    players: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.welcoming = payload.messages[0].message
    },
    SOCKET_messageNewPlayer (state, payload) {
      state.players = payload
    }
  },
  actions: {
    SOCKET_serverGreeting (payload) {
      router.push({ name: 'Dashboard' })
      console.log(payload)
    },
    SOCKET_fullRoom (payload) {
      console.log(payload)
      Swal.fire(
        'Warning!',
        'Room Full!',
        'warning'
      )
    }
  }
})
