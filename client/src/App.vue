<template>
    <router-view/>
</template>

<script>
export default {
  created () {
    if (localStorage.username) {
      this.$store.commit('setUsername', localStorage.username)
      this.$socket.emit('getAllPlayers')
    } else {
      this.$router.push({ name: 'Login' })
    }
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
