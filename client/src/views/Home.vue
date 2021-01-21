<template>
  <div class="home">
    <a href="#" @click="play">
      <img alt="Vue logo" src="../assets/kecoa.png" height="300px" >
    </a>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import useSound from 'vue-use-sound'
import oof from '../assets/Music/click-oof.mp3'

export default {
  name: 'Home',
  components: {
    HelloWorld
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

<style>

</style>
