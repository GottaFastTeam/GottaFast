<template>
  <div class="dashboard text-center mt-5">
    <div class="jumbotron">
      <h2 class="mb-5">{{welcoming}}</h2>
      <form @submit.prevent="sendUsername">
        <div class="form-group">
          <input v-model="name" type="text" class="form-control" id="username"  placeholder="Enter Your Username !!!">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['welcoming', 'players', 'username'])
  },
  methods: {
    sendUsername () {
      if (this.name.length === 0) {
        Swal.fire(
          'Warning!',
          'Please input username',
          'warning'
        )
      } else {
        this.$socket.emit('newPlayers', { username: this.name, score: 0, status: 'idle' })
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
  created () {
    if (this.username) {
      this.$router.push({ name: 'Dashboard' })
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
