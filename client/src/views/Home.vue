<template>
  <div class="login">
    <div class="container">
      <div class="d-flex justify-content-center h-100 mt-5">
        <div class="card">
          <div class="card-header">
            <h1>WELLCOME</h1>
          </div>
          <div class="card-body">
            <form @submit.prevent="">
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input v-model="user" type="text" class="form-control" placeholder="user name">
              </div>
              <div class="form-group">
                <input type="submit" value="Submit" class="btn float-right login_btn">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
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

<style scoped>

  @import url('https://fonts.googleapis.com/css?family=Numans');
  h3{
    text-align: left;
  }
  .container{
  height: 100%;
  align-content: center;
  }

  .card{
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0,0,0,0.5) !important;
  }

  .social_icon span{
  font-size: 60px;
  margin-left: 10px;
  color: #FFC312;
  }

  .social_icon span:hover{
  color: white;
  cursor: pointer;
  }

  .card-header h3{
  color: white;
  }

  .social_icon{
  position: absolute;
  right: 20px;
  top: -45px;
  }

  .input-group-prepend span{
  width: 50px;
  background-color: #FFC312;
  color: black;
  border:0 !important;
  }

  input:focus{
  outline: 0 0 0 0  !important;
  box-shadow: 0 0 0 0 !important;

  }

  .remember{
  color: white;
  }

  .remember input
  {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
  }

  .login_btn{
  color: black;
  background-color: #FFC312;
  width: 100px;
  }

  .login_btn:hover{
  color: black;
  background-color: white;
  }

  .links{
  color: white;
  }

  .links a{
  margin-left: 4px;
  }
  </style>
