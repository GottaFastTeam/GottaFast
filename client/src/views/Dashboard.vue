<template>
  <div class="mt-5">
   <h1 class="text-center">List Player</h1>
      <div class="card">
        <div class="card-group " width='350px'>
        <CardUser
          v-for="(player, i) in players"
          :key="i"
          :player="player"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardUser from '../components/CardUser'
export default {
  computed: {
    ...mapState(['players'])
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
