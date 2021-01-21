<template>
  <div id="playPage">
    <div id="playPageBox">
      <img src="../assets/winner4.gif" id="seekImg1">
      <img src="../assets/winner4.gif" id="seekImg2">
      <div id="imageBox">
        <img src="../assets/kecoa.png" alt="" @click="play">
      </div>
      <div id="scoreBox">
        <h3>SCORE</h3>
        <p>tommy: 20</p>
        <p>samiun: 20</p>
        <p>tommy: 20</p>
        <p>tommy: 20</p>
      </div>
    </div>
  </div>
</template>

<script>
import useSound from 'vue-use-sound'
import oof from '../assets/Music/click-oof.mp3'

export default {
  name: 'Home',
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

<style>
  #playPageBox {
    border-radius: 25px;
    margin-left: 23%;
    margin-top: 2%;
    width: 700px;
    height: 450px;
    background-color: #f18701;
    border: 0;
    display: flex;
    flex-direction: row;
    box-shadow: 10px 10px 5px grey;
  }
  #seekImg1 {
    width: 400px;
    height: 200px;
    position: absolute;
    left: -10px;
    top: 210px;
    z-index: -1;
  }
    #seekImg2 {
    width: 400px;
    height: 200px;
    position: absolute;
    right: -10px;
    top: 210px;
    z-index: -1;
  }
  #imageBox {
    width: 250px;
    height: 300px;
    border-radius: 25px;
    border: 0;
    margin-top: 70px;
    margin-left: 70px;
    background-color: #F3F8F2;
  -moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
-o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    overflow: hidden;
  }
  #imageBox:hover {
    -webkit-transform: translate(0, -8px);
    -moz-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    transform: translate(0, -8px);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
  }
  #imageBox img {
    width: 250px;
    height: 300px;
    border-radius: 25px;
    cursor: pointer;
  }
  #scoreBox {
    width: 250px;
    height: 300px;
    border-radius: 25px;
    margin-top: 70px;
    margin-left: 60px;
    background-color: #F3F8F2;
    animation: MoveUpDown 1s linear infinite;
    position: relative;
    left: 0;
    bottom: 0;
    box-shadow: 6px 7px 5px black;
  }
  #scoreBox p {
    width: 200px;
    height: 40px;
    padding: 4px 4px 4px 4px;
    margin-left: 10%;
    border-radius: 25px;
    margin-top: 20px;
    font-size: 25px;
    color: white;
    background-color: black;
    font-size: 25px;
  }
  #scoreBox h3 {
    font-size: 20px;
    margin-left: 30%;
    padding: 5px;
    margin-top: -15px;
    width: 100px;
    height: 30px;
    border-radius: 25px;
    background-color: black;
    color: white;
  }
   @keyframes MoveUpDown {
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 10px;
  }
}
</style>
