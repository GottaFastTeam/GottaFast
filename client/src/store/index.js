import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    user: '',
    clickCount: '',
    score: '',
    welcoming: ''
  },
  mutations: {
    setWellcoming (stage, payload) {
      stage.welcoming = payload
    }
  },
  actions: {
    SOCKET_init (context, payload) {
      context.commit('setWellcoming', payload.messages[0].message)
    }
  },
  modules: {
  }
})
