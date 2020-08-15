<template>
  <div class="challengeusers">
    <h1>Gestion joueurs Challenge</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".challengeuseraddmodal">+ Ajouter un
      Joueur</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Nom</th>
                <th>Contact (mail/tel)</th>
                <th>Classement FFT</th>
                <th>Nb Matchs</th>
                <th>Match average</th>
                <th>Set average</th>
                <th>Jeux average</th>
                <th>Visible</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(challengeuser, index) in getAllChallengeusers" :key="challengeuser.id">
                <th>{{challengeuser.id}}</th>
                <th>{{challengeuser.challengename}}</th>
                <th>{{challengeuser.contact}}</th>
                <th>{{challengeuser.ranking}}</th>
                <th>{{challengeuser.nbmatchs}}</th>
                <th>{{challengeuser.matchaverage}}</th>
                <th>{{challengeuser.setaverage}}</th>
                <th>{{challengeuser.gameaverage}}</th>
                <th>{{challengeuser.visible}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteChallengeuser(challengeuser.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=challengeuser.id" class="fas fa-edit" data-toggle="modal" :data-target="'#challengeusereditmodal'+challengeuser.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=challengeuser.id" class="fas fa-eye" data-toggle="modal" :data-target="'#challengeusershowmodal'+challengeuser.id"></i>
                  </a>
                </th>

              <!-- Show Challengeuser modal -->


          <div class="modal fade" :id="'challengeusershowmodal'+challengeuser.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails joueur</h6><br><br>
                  <div class="signup-row">
                    <h3>{{challengeuser.challengename}}</h3>
                  </div>
                  <div class="signup-row">
                   <h6>Contact : {{challengeuser.contact}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>Classement : {{challengeuser.ranking}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>Nb matchs joués : {{challengeuser.nbmatchs}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>Match average : {{challengeuser.matchaverage}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>Set average : {{challengeuser.setaverage}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>Jeu average : {{challengeuser.gameaverage}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>Joueur visible : {{challengeuser.visible}}</h6>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=challengeuser.id" data-toggle="modal" :data-target="'#challengeusereditmodal'+challengeuser.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Challengeuser modal -->


          <div class="modal fade" :id="'challengeusereditmodal'+challengeuser.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onChallengeuserEdit(challengeuser)" class="sign-back">
                  <h1>Modification du joueur</h1>
                  <div class="signup-row">
                    
                    Nom : <textarea class="form-control" name="" value=""  placeholder="Nom" v-model="challengeuser.challengename"></textarea>
                  </div>
                  <div class="signup-row">
                    Contact : <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="challengeuser.contact"></textarea>
                  </div>
                  <div class="signup-row">
                    Classement : <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="challengeuser.ranking"></textarea>
                  </div>
                  <div class="signup-row">
                    Nb matchs joués : <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="challengeuser.nbmatchs"></textarea>
                  </div>
                  <div class="signup-row">
                    Match average : <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="challengeuser.matchaverage"></textarea>
                  </div>
                  <div class="signup-row">
                    Set average : <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="challengeuser.setaverage"></textarea>
                  </div>
                  <div class="signup-row">
                    Jeu average : <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="challengeuser.gameaverage"></textarea>
                  </div>
                  <div class="signup-row">
                   <input type="radio" id="one" value="Dans le challenge" v-model="challengeuser.visible">
                    <label for="one">Dans le challenge</label>
                    <br>
                    <input type="radio" id="two" value="Eliminé" v-model="challengeuser.visible">
                    <label for="two">Eliminé</label>
                    <br>
                    <span>Choisi : {{ challengeuser.visible }}</span>
                      
                  </div>



                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
              </tr>
            </tbody>
          </table>

          <!-- Add Challengeusers modal -->


          <div class="modal fade challengeuseraddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onChallengeusersubmit" class="sign-back">
                  <h1>Ajout d'un joueur</h1>
                  <div class="signup-row"> 
                    Nom : <textarea class="form-control" name="" value="" placeholder="Nom" v-model="challengename"></textarea>
                  </div>
                  <div class="signup-row">
                    Classement :<textarea class="form-control" name="" value=""  placeholder="Classement FFT" v-model="ranking"></textarea>
                  </div>
                  <div class="signup-row">
                    Contact : <textarea class="form-control" name="" value="" placeholder="Contact (tel/mail)" v-model="contact" ></textarea>
                  </div>
                  <div class="signup-row">
                    Nb matchs joués : <textarea class="form-control" name="" value="" placeholder="Nombre de matchs" v-model="nbmatchs"></textarea>
                  </div>
                  <div class="signup-row">
                    Match average : <textarea class="form-control" name="" value=""  placeholder="Matchs average" v-model="matchaverage"></textarea>
                  </div>
                  <div class="signup-row">
                    Set average : <textarea class="form-control" name="" value="" placeholder="Set average" v-model="setaverage"></textarea>
                  </div>
                  <div class="signup-row">
                    Jeu average : <textarea class="form-control" name="" value=""  placeholder="Game average" v-model="gameaverage"></textarea>
                  </div>

                  <div class="signup-row">
                   <input type="radio" id="one" value="Dans le challenge" v-model="visible">
                    <label for="one">Dans le challenge</label>
                    <br>
                    <input type="radio" id="two" value="Eliminé" v-model="visible">
                    <label for="two">Eliminé</label>
                    <br>
                    <span>Choisi : {{ visible }}</span>
                      
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary" >Enregistrer</button>
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
    name: 'challengeusers',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        challengename: '',
        ranking: '',
        contact: '',
        nbmatchs: '',
        matchaverage: '',
        setaverage: '',
        gameaverage: '',
        visible: '',

        
      }
    },
    methods: {

      ...mapActions(['createChallengeuser', 'editChallengeuser', 'fetchAllChallengeusers', 'fetchChallengeuserById', 'deleteChallengeuser']),
      onChallengeusersubmit(e) {
        e.preventDefault();
        var obj = {
          'challengename': this.challengename,
          'ranking': this.ranking,
          'contact': this.contact,
          'nbmatchs': this.nbmatchs,
          'matchaverage': this.matchaverage,
          'setaverage': this.setaverage,
          'gameaverage': this.gameaverage,
          'visible': this.visible,
        }
        this.createChallengeuser(obj);
        this.fetchAllChallengeusers()

      },
      onChallengeuserEdit(challengeuser) {
        //e.preventDefault();
        var obj = {
          'id':challengeuser.id,
          'challengename': challengeuser.challengename,
          'ranking': challengeuser.ranking,
          'contact': challengeuser.contact,
          'nbmatchs': challengeuser.nbmatchs,
          'matchaverage': challengeuser.matchaverage,
          'setaverage': challengeuser.setaverage,
          'gameaverage': challengeuser.gameaverage,
          'visible': challengeuser.visible,
        }
        this.editChallengeuser(obj);
        this.fetchAllChallengeusers()

      },
      onDeleteChallengeuser(id, index) {
        this.deleteChallengeuser(id)
        this.getAllChallengeusers.splice(index, 1)
      },

    },
    computed: mapGetters(['getChallengeuserMessage', 'getAllChallengeusers', 'getChallengeuser', 'infoChallengeuserById', 'getUpdateChallengeuserMessage' ]),
    created() {

      this.fetchAllChallengeusers();
      
      //this.fetchChallengeuserById(this.$route.params.id);
    }
  }
</script>