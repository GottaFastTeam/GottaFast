<template>
  <div class="home">
    <a href="#" @click="play">
      <img alt="Vue logo" src="../assets/kecoa.png" height="300px" >
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import useSound from 'vue-use-sound'
import oof from '../assets/Music/click-oof.mp3'

export default {
  name: 'Home',
  sockets: {
  },
  components: {
  },
  methods: {
  },
  setup () {
    const [play] = useSound(oof)
    return {
      play
    }
  }
}
</script>
