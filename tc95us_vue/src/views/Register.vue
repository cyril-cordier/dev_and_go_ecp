<template>
  <div class="Register container-fluid mt-5">
    <div v-for="message in getMessage.error" :key="message.id">
      <div class="alert alert-danger" role="alert">
        <p>{{message.toString()}}</p>
      </div>
    </div>

    <!-- Start Main Container -->
    <div class="main-container">
      <div class="signup-form">
        <form @submit="onsubmit" class="sign-back">
          <h1>REGISTER FORM</h1>
          <div class="signup-row">
            <i class="fa fa-user"></i>
            <input type="text" name="" value="" id="exampleInputName1" placeholder="Nom" v-model="lastname">
          </div>
          <div class="signup-row">
            <i class="fa fa-user"></i>
            <input type="text" name="" value="" id="exampleInputName1" placeholder="Prénom" v-model="firstname">
          </div>
          <div class="signup-row">
            <i class="fa fa-envelope"></i>
            <input type="text" v-model="email" name="" value="" placeholder="Email">
          </div>
          <div class="signup-row">
            <i class="fa fa-key"></i>
            <input type="password" v-model="password" name="" value="" placeholder="Mot de passe">
          </div>
          <div class="signup-row">
            <i class="fa fa-key"></i>
            <input type="password" v-model="c_password" name="" value="" placeholder="Confirmez votre mot de passe">
          </div>

          

          <div style="width: max;" align="center">
            <button type="submit" class="btn btn-success">S'enregistrer</button>
          </div>


          <p><br>ou connectez-vous <br>si vous avez déjà un compte</p>
          <div style="width: max;" align="center">
            <router-link :to="'/Login'">
              <button class="btn btn-success">Se connecter</button>
            </router-link>
          </div>
        </form>

      </div>
    </div>
    <!-- End Main Forms -->









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
    name: 'Register',
    components: {
     /*  Footer, */


    },
    data() {
      return {
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        c_password: '',
      }
    },
    methods: {
      ...mapActions(['registerForm', /* 'addPokemon' */]),
      onsubmit(e) {
        e.preventDefault();
        var obj = {
          'firstname': this.firstname,
          'lastname': this.lastname,
          'email': this.email,
          'password': this.password,
          'c_password': this.c_password,

        }
        this.registerForm(obj);

      }
    },
    computed: mapGetters(['getMessage', /* 'addPokemonMessage' */]),
  }
</script>
<style scoped>
  .Register {
    margin-bottom: 10rem;
  }

  .clicked:hover {
    border: 2px solid #ffffff;
  }



  body {
    background-size: cover;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  .main-container {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }


  .signup-form {
    background-image: url(../assets/tennis.jpg);
    background-size: 100%;
    border-radius: 10px;
  }

 /*  .sign-back {
    background: linear-gradient(rgba(255, 202, 0, 0.4), #FFCA00 35%);
    border-radius: 10px;
    padding: 25px 0;
    margin-bottom: 125px;
    margin-top: 110px;
  } */

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


  .main-forms {
    overflow: hidden;
    display: none;
    position: relative;
  }

</style>