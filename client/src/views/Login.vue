<template>
  <div class="dashboard">
    <div class="jumbotron">
      <h2 class="mb-5">{{welcoming}}</h2>
      <form @submit.prevent="sendUsername">
        <div class="form-group">
          <input v-model="username" type="text" class="form-control" id="username"  placeholder="Enter Your Username !!!">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      username: '',
      welcoming: '',
      players: []
    }
  },
  methods: {
    sendUsername () {
      if (this.username.length === 0) {
        Swal.fire(
          'Warning!',
          'Please input username',
          'warning'
        )
      } else {
        this.$socket.emit('newPlayers', { username: this.username, score: 0, status: 'idle' })
        if (this.players.length < 4) {
          Swal.fire(
            'Success!',
            'Yey, you play',
            'success'
          )
        }
      }
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
      this.welcoming = payload.messages[0].message
    },
    serverGreeting (payload) {
      this.$router.push({ name: 'Dashboard' })
      console.log(payload)
    },
    messageNewPlayer (payload) {
      this.players = payload
      console.log(payload)
    },
    fullRoom (payload) {
      Swal.fire(
        'Warning!',
        `${payload}`,
        'warning'
      )
    }
  }
}
</script>

<style>
  .dashboard {
    width: 750px;
    margin: auto;
    padding: 2em;
    border: 3px solid #000000;
    background: #ffffff;
    border-radius: .5em;
    box-sizing: border-box;
  }
</style>
