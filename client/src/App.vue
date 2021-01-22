<template>
    <router-view/>
</template>

<script>
export default {
  created () {
    this.$store.commit('setUsername', localStorage.username)
    // this.$store.dispatch('SOCKET_serverGreeting', { username: localStorage.username })
    this.$socket.emit('getAllPlayers')
  }
}
</script>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
