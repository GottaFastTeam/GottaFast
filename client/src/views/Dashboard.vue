<template>
  <div>
   <h1>List Player</h1>
      <div class="card">
        <CardUser />
      </div>
  </div>
</template>

<script>
import CardUser from '../components/CardUser.vue'
export default {
  data () {

  },
  components: {
    CardUser
  }
}
</script>

<style scoped>
  .card {
    width: 70%;
    margin-top: 10px;
    margin: auto;
    padding: 20px;
    background: black;
  }
</style>>
