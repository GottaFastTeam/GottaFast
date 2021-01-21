<template>
<div class="mycard text-center">
    <img class="card-img-top" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/50cff0e0-1005-487c-8705-c04f919c3964" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{player.username}}</h5>
      <p class="card-text">{{player.status}}</p>
      <a href="#" class="btn btn-primary">Leave</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'CardUser',
  props: ['player']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mycard {
    margin: 10px;
    height: 350px;
    min-width: 100px;
    max-width: 250px;
    background: #3581b8;
    border-radius: 10px;
    margin: auto;
  }

  .card-img-top {
    padding: 10px;
  }

  .card-title {
    color: #f7b801;
  }

  .card-text {
    color: #f7b801;
    border: 1px  #f3f8f2 solid;
    border-radius: 10px;
  }

  .btn-primary {
    background: #f3f8f2;
    color:  #3581b8;
  }
</style>
