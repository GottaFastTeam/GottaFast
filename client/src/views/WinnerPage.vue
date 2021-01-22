<template>
  <div id="winnerPage">
      <div id="winnerBox" class="text-center mt-5">
          <img src="../assets/winner1.gif" id="imageWinner1">
          <h1 id="winnerName" v-for="(names,i) in winnerName" :key="i" >{{i++}}.{{names.username}} </h1>
          <div class="container">
            <a @click="play" class="button">Play Again</a>
          </div>
      </div>
      <img src="../assets/winner2.gif" id="imageWinner2">
      <img src="../assets/winner2.gif" id="imageWinner3">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WinnerPage',
  computed: {
    ...mapState(['username', 'players']),
    winnerName () {
      return this.players.filter(winner => winner.score)
    }
  },
  methods: {
    play () {
      this.$socket.emit('resetGame', { username: this.username })
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style>
  body {
    background-color: #F3F8F2;
  }
  #winnerPage {
    margin-left: 30%;
    border-radius: 25px;
    width: 500px;
    height: 500px;
    background-color: #3581B8;
    box-shadow: 0 40px 100px rgba(51, 49, 49, 0.8);
  }
  #imageWinner1 {
    width: 300px;
    height: 300px;
    animation: MoveUpDown 1s linear infinite;
    position: relative;
    left: 0;
    bottom: 0;
  }
  #imageWinner2 {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 180px;
    top: 250px;
    z-index: -1;
  }
  #imageWinner3 {
    width: 300px;
    height: 300px;
    position: absolute;
    right: 180px;
    top: 250px;
    z-index: -1;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  #winnerName {
    color: white;
  }
  .button {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
  }
  .button:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #F18701;
    border-radius: 10rem;
    z-index: -2;
  }
  .button:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #F7B801;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  .button:hover {
    color: #fff;
  }
  .button:hover:before {
    width: 100%;
  }

  * {
    font-family: Arial;
    text-decoration: none;
    font-size: 20px;
  }

  .container {
    padding-top: 50px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }

  @keyframes MoveUpDown {
    0%, 100% {
        bottom: 0;
    }
    50% {
        bottom: 20px;
  }
}
</style>
