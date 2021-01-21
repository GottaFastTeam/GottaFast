<template>
  <div class="dashboard">
    <div class="jumbotron">
      <h1>Gotta Fast : The Ultimated Speed Clicker</h1>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="user" type="text" class="form-control" id="username"  placeholder="Enter Your Username !!!">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  },
  connect: function () {
    console.log('socket connected')
  }
}
</script>

<style>
  .dashboard {
    width: 750px;
    margin: auto;
    padding: 2em;
    border: 3px solid #000000;
    background: #ffffff;
    border-radius: .5em;
    box-sizing: border-box;
  }
</style>
