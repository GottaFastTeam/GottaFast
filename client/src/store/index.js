import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userReady: 0,
    username: '',
    welcoming: '',
    players: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.welcoming = payload.messages[0].message
    },
    SOCKET_updatePlayers (state, payload) {
      state.players = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    setuUerReady (state, payload) {
      state.userReady = payload
    }
  },
  actions: {
    SOCKET_serverGreeting ({ commit }, payload) {
      localStorage.setItem('username', payload.username)
      commit('setUsername', payload.username)
      router.push({ name: 'Dashboard' })
    },
    SOCKET_countPlayerReady ({ commit }, payload) {
      commit('setuUerReady', payload)
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
