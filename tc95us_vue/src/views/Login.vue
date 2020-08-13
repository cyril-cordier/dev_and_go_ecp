<template>
  <div class="Register container-fluid mt-5">

    <div v-for="message in getLogin" :key="message.id">
      <div v-if="getLogin.error" class="alert alert-danger" role="alert">
        <p>{{message.toString()}}</p>
      </div>
    </div>
 <div class="main-container">
      <div class="signup-form">

    <form @submit="onsubmit" class="sign-back">
                <h1>LOGIN</h1>

      <div class="signup-row">
        <input type="email" v-model="email"  id="exampleInputEmail1" aria-describedby="emailHelp"
          autocomplete="off" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="signup-row">
        <input type="password" v-model="password"  id="exampleInputPassword1"
          placeholder="Password">
      </div>
<div class="footers" style="width: max;" align="center">
        <button type="submit" class="btn btn-success">Login</button>
  <p><br>or register if you don't have an account</p>
    <router-link :to="'/Register'">
      <button class="btn btn-success">Register</button>
    </router-link>
    </div>
    </form>
    
     </div>
      </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
  // @ is an alias to /src


  /* import Footer from '@/components/footer.vue' */
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'Login',
    components: {
      /* Footer, */


    },
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      ...mapActions(['loginForm']),
      onsubmit(e) {
        e.preventDefault();
        var obj = {

          'email': this.email,
          'password': this.password
        }
        this.loginForm(obj);


      }
    },
    computed: mapGetters(['getLogin'])
  }
</script>
<style scoped>



  body {
    background-size: cover;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  .main-container {
    width: 90%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

  }


  .signup-form {
    background-image: url(../assets/tennis.jpg);
    background-size: 100%;
    border-radius: 10px;
  }

  /* .sign-back {
    background: linear-gradient(rgba(255, 202, 0, 0.4), #FFCA00 35%);
    border-radius: 10px;
    padding: 125px 0;
  } */

  .footers {
    padding-top: 6rem;
  }

  .sign-back h1 {
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    margin-top: 0;
    letter-spacing: 5px;
    text-shadow: 2px 2px 2px #333
  }

  .sign-back h6 {
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
    margin-top: 0;
    text-shadow: 1px 1px 1px #333
  }

  .sign-back p {
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-size: 0.9rem;
    margin-top: 0;
    text-shadow: 1px 1px 1px #333
  }

  .signup-row {
    text-align: center;
    margin: 20px 0;
    position: relative;
  }

  .signup-row input {
    padding: 5px 0;
    border: 0;
    border-bottom: 1px solid #fff;
    background: transparent;
    width: 60%;
    text-align: center;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    text-shadow: 1px 1px 1px #333;
  }

  .signup-row input::-webkit-input-placeholder {
    color: #fff;
    text-shadow: 1px 1px 1px rgba(51, 51, 51, 0.6)
  }

  .signup-row i {
    color: #fff;
    position: relative;
    left: 20px;
    text-shadow: 1px 1px 1px rgba(51, 51, 51, 0.6)
  }

  .signup-row a {
    font-size: 40px;
    text-decoration: none;
  }

  .signup-row a i {
    left: 0;
  }

  .form-bottom {
    display: flex;
    justify-content: center;
  }


  input[type="checkbox"] {
    position: relative;
    top: 1px;
    transition: all 500ms;

  }

  .main-forms {
    overflow: hidden;
    display: none;
    position: relative;
  }

</style>