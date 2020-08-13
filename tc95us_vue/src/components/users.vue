<template>
  <div class="users">
    <h1>Gestion utilisateurs</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".useraddmodal">+ Ajouter un Utilisateur</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Nom pour Challenge</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in getAllUsers" :key="user.id">
                <th>{{user.id}}</th>
                <th>{{user.firstname}}</th>
                <th>{{user.lastname}}</th>
                <th>{{user.email}}</th>
                <th>{{user.challengename}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDelete(user.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i v-on:click="onEdit(user.id)" class="fas fa-edit" data-toggle="modal" data-target=".usereditmodal"></i>
                  </a>
                  <!-- <router-link 
                    :to="{
                      name:'Userinfo', 
                      params:{id: product.id}
                    }" 
                    class="icon"
                    >
                      <i class="far fa-eye"></i>
                    </router-link> -->
                </th>
<!-- Edit User modal -->


          <div class="modal fade usereditmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onEdit" class="sign-back">
                  <h1>Modification Utilisateur</h1>
                  <div class="signup-row">
                    <i class="fa fa-user"></i>
                    <input type="text" name="" value="" id="exampleInputName1" placeholder="Nom" v-model="user.lastname">
                  </div>
                  <div class="signup-row">
                    <i class="fa fa-user"></i>
                    <input type="text" name="" value="" id="exampleInputName1" placeholder="Prénom" v-model="user.firstname">
                  </div>
                  <div class="signup-row">
                    <i class="fa fa-envelope"></i>
                    <input type="text" v-model="user.email" name="" value="" placeholder="Email">
                  </div>
                  <div class="signup-row">
                    <i class="fa fa-user"></i>
                    <input type="text" name="" value="" id="exampleInputName1" placeholder="Nom pour le Challenge" v-model="user.challengename">
                  </div>


                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
              </tr>
            </tbody>
          </table>

          <!-- Add User modal -->


          <div class="modal fade useraddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onsubmit" class="sign-back">
                  <h1>Formulaire d'enregistrement</h1>
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
                    <input type="password" v-model="c_password" name="" value=""
                      placeholder="Confirmez le mot de passe">
                  </div>


                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>



        






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
    name: 'users',
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
        editUser: {
          'id': '',
          'lastname': '',
          'firstname': '',
          'email': '',
          'challengename': ''

        }
      }
    },
    methods: {

      ...mapActions(['registerForm', 'fetchUser', 'fetchAllUsers', 'fetchUserById', 'deleteUser', 'editUser']),
      onsubmit() {
        //e.preventDefault();
        var obj = {
          'firstname': this.firstname,
          'lastname': this.lastname,
          'email': this.email,
          'password': this.password,
          'c_password': this.c_password,

        }
        this.registerForm(obj);

      },
      onEdit() {
        //e.preventDefault();
        var obj = {
          'firstname': this.firstname,
          'lastname': this.lastname,
          'email': this.email,
        }
        this.editUser(obj);

      },
      onDelete(id, index) {
        this.deleteUser(id)
        this.getAllUsers.splice(index, 1)
      },

    },
    computed: mapGetters(['getMessage', 'getAllUsers', 'getUser', 'infoUserById', ]),
    created() {

      this.fetchAllUsers();
      this.fetchUser();
      this.fetchUserById(this.$route.params.id);
    }
  }
</script>