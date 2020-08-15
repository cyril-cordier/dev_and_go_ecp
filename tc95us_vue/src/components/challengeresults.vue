<template>
  <div class="challengeresults">
    <h1>Gestion Résultats Challenge</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".challengeresultaddmodal">+ Ajouter un
      match joué</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Vainqueur</th>
                <th>Perdant</th>
                <th>Set 1</th>
                <th>Set 2</th>
                <th>Set 3</th>
                <th>Points vainqueur</th>
                <th>Points perdant</th>
                <th>Détails</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(challengeresult, index) in getAllChallengeresults" :key="challengeresult.id">
                <th>{{challengeresult.id}}</th>
                <th>{{challengeresult.winner}}</th>
                <th>{{challengeresult.looser}}</th>
                <th>{{challengeresult.S1W}}/{{challengeresult.S1L}}</th>
                <th>{{challengeresult.S2W}}/{{challengeresult.S2L}}</th>
                <th>{{challengeresult.S3W}}/{{challengeresult.S3L}}</th>
                <th>{{challengeresult.pointsW}}</th>
                <th>{{challengeresult.pointsL}}</th>
                <th>{{challengeresult.details}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteChallengeresult(challengeresult.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=challengeresult.id" class="fas fa-edit" data-toggle="modal" :data-target="'#challengeresulteditmodal'+challengeresult.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=challengeresult.id" class="fas fa-eye" data-toggle="modal" :data-target="'#challengeresultshowmodal'+challengeresult.id"></i>
                  </a>
                </th>

              <!-- Show Challengeresult modal -->


          <div class="modal fade" :id="'challengeresultshowmodal'+challengeresult.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails match</h6><br><br>
                  <div class="signup-row">
                    <h6>Vainqueur : {{challengeresult.winner}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>Perdant : {{challengeresult.looser}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>Résultat : {{challengeresult.S1W}}/{{challengeresult.S1L}} {{challengeresult.S2W}}/{{challengeresult.S2L}} {{challengeresult.S3W}}/{{challengeresult.S3L}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>Points vainqueur : {{challengeresult.pointsW}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>Points perdant : {{challengeresult.pointsL}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>Détails : {{challengeresult.details}}</h6>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=challengeresult.id" data-toggle="modal" :data-target="'#challengeresulteditmodal'+challengeresult.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Challengeresult modal -->


          <div class="modal fade" :id="'challengeresulteditmodal'+challengeresult.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onChallengeresultEdit(challengeresult)" class="sign-back">
                  <h1>Modification du match</h1>
                  <div class="signup-row">
                    
                    Vainqueur : <textarea class="form-control" name="" value=""  placeholder="Vainqueur" v-model="challengeresult.winner"></textarea>
                  </div>
                  <div class="signup-row">
                    Perdant : <textarea class="form-control" name="" value=""  placeholder="Perdant" v-model="challengeresult.looser"></textarea>
                  </div>
                  <div class="signup-row">
                    Résultat S1 V : <textarea class="form-control" name="" value=""  placeholder="Résultat S1 V" v-model="challengeresult.S1W"></textarea>
                  </div>
                  <div class="signup-row">
                    Résultat S1 P : <textarea class="form-control" name="" value=""  placeholder="Résultat S1 P" v-model="challengeresult.S1L"></textarea>
                  </div>
                  <div class="signup-row">
                    Résultat S2 V : <textarea class="form-control" name="" value=""  placeholder="Résultat S2 V" v-model="challengeresult.S2W"></textarea>
                  </div>
                  <div class="signup-row">
                    Résultat S2 P : <textarea class="form-control" name="" value=""  placeholder="Résultat S2 P" v-model="challengeresult.S2L"></textarea>
                  </div>
                  <div class="signup-row">
                    Résultat S3 V : <textarea class="form-control" name="" value=""  placeholder="Résultat S3 V" v-model="challengeresult.S3W"></textarea>
                  </div>
                  <div class="signup-row">
                    Résultat S3 P : <textarea class="form-control" name="" value=""  placeholder="Résultat S3 P" v-model="challengeresult.S3L"></textarea>
                  </div>
                  <div class="signup-row">
                    Points vainqueur : <textarea class="form-control" name="" value=""  placeholder="Points vainqueur" v-model="challengeresult.pointsW"></textarea>
                  </div>
                  <div class="signup-row">
                    Points perdant : <textarea class="form-control" name="" value=""  placeholder="Points perdant" v-model="challengeresult.pointsL"></textarea>
                  </div>
                  <div class="signup-row">
                    Details : <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="challengeresult.details"></textarea>
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

          <!-- Add Challengeresults modal -->


          <div class="modal fade challengeresultaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onChallengeresultsubmit" class="sign-back">
                  <h1>Ajout d'un match challenge</h1>
                  <div class="signup-row"> 
                    <textarea class="form-control" name="" value=""  placeholder="Vainqueur" v-model="winner"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Perdant" v-model="looser"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Résultat S1 V" v-model="S1W"></textarea>
                  </div>
                  <div class="signup-row">
                   <textarea class="form-control" name="" value=""  placeholder="Résultat S1 P" v-model="S1L"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Résultat S2 V" v-model="S2W"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Résultat S2 P" v-model="S2L"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Résultat S3 V" v-model="S3W"></textarea>
                  </div>
                  <div class="signup-row">
                   <textarea class="form-control" name="" value=""  placeholder="Résultat S3 P" v-model="S3L"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Points vainqueur" v-model="pointsW"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Points perdant" v-model="pointsL"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="details"></textarea>
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
    name: 'challengeresults',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        winner: '',
        looser: '',
        S1W: '',
        S1L: '',
        S2W: '',
        S2L: '',
        S3W: '',
        S3L: '',
        pointsW: '',
        pointsL: '',
        details: '',
        
      }
    },
    methods: {

      ...mapActions(['createChallengeresult', 'editChallengeresult', 'fetchAllChallengeresults', 'fetchChallengeresultById', 'deleteChallengeresult']),
      onChallengeresultsubmit(e) {
        e.preventDefault();
        var obj = {
          'winner': this.winner,
          'looser': this.looser,
          'S1W': this.S1W,
          'S1L': this.S1L,
          'S2W': this.S2W,
          'S2L': this.S2L,
          'S3W': this.S3W,
          'S3L': this.S3L,
          'pointsW': this.pointsW,
          'pointsL': this.pointsL,
          'details': this.details,
        }
        this.createChallengeresult(obj);
        this.fetchAllChallengeresults()

      },
      onChallengeresultEdit(challengeresult) {
        //e.preventDefault();
        var obj = {
          'id':challengeresult.id,
          'winner': challengeresult.winner,
          'looser': challengeresult.looser,
          'S1W': challengeresult.S1W,
          'S1L': challengeresult.S1L,
          'S2W': challengeresult.S2W,
          'S2L': challengeresult.S2L,
          'S3W': challengeresult.S3W,
          'S3L': challengeresult.S3L,
          'pointsW': challengeresult.pointsW,
          'pointsL': challengeresult.pointsL,
          'details': challengeresult.details,
        }
        this.editChallengeresult(obj);
        this.fetchAllChallengeresults()

      },
      onDeleteChallengeresult(id, index) {
        this.deleteChallengeresult(id)
        this.getAllChallengeresults.splice(index, 1)
      },

    },
    computed: mapGetters(['getChallengeresultMessage', 'getAllChallengeresults', 'getChallengeresult', 'infoChallengeresultById', 'getUpdateChallengeresultMessage' ]),
    created() {

      this.fetchAllChallengeresults();
      
      //this.fetchChallengeresultById(this.$route.params.id);
    }
  }
</script>