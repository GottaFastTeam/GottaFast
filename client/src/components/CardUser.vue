<template>
  <div class="card-group " width='350px'>
        <div class="card">
            <img class="card-img-top" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/50cff0e0-1005-487c-8705-c04f919c3964" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">User 01</h5>
              <a href="#" class="btn btn-primary">Leave</a>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/50cff0e0-1005-487c-8705-c04f919c3964" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title">User 01</h5>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/50cff0e0-1005-487c-8705-c04f919c3964" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">User 01</h5>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/50cff0e0-1005-487c-8705-c04f919c3964" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">User 01</h5>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'CardUser'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
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

  .btn-primary {
    background: #f3f8f2;
    color:  #3581b8;
  }
</style>
