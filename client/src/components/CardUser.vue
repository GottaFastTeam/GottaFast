<template>
<div class="mycard text-center">
    <img class="card-img-top" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/50cff0e0-1005-487c-8705-c04f919c3964" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{player.username}}</h5>
      <p class="card-text">{{player.status}}</p>
      <a v-show="player.username === username" v-if="player.status === 'idle'" @click="play" @click.prevent="updateStatus" type="button" class="btn btn-sm btn-warning">Ready</a>
      <a type="button" v-show="player.username === username" @click.prevent="logout" class="btn btn-sm btn-danger text-white ml-1">Leave</a>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import useSound from 'vue-use-sound'
import GetReady from '../assets/Music/Get_ready.mp3'

export default {
  name: 'CardUser',
  props: ['player'],
  computed: {
    ...mapState(['username', 'userReady'])
  },
  methods: {
    updateStatus () {
      this.updatePlayerReady()
      this.$socket.emit('updateStatus', { username: this.player.username, status: 'ready' })
    },
    updatePlayerReady () {
      this.$socket.emit('updatePlayerReady')
    },
    logout () {
      localStorage.clear()
      this.$socket.emit('logout', { username: this.player.username })
      this.$router.push({ name: 'Login' })
    }
  },
  setup () {
    const [play] = useSound(GetReady)
    return {
      play
    }
  },
  watch: {
    userReady () {
      if (this.userReady === 4) {
        this.$router.push({ name: 'PlayPage' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mycard {
    margin: 10px;
    height: 350px;
    min-width: 100px;
    max-width: 250px;
    background: #3581b8;
    border-radius: 10px;
    margin: auto;
  }

  .card-img-top {
    padding: 10px;
  }

  .card-title {
    color: #f7b801;
  }

  .card-text {
    color: #f7b801;
    border: 1px  #f3f8f2 solid;
    border-radius: 10px;
  }
</style>
