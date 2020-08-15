<template>
  <div class="tarifs">
    <h1>Gestion tarifs</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".tarifaddmodal">+ Ajouter un
      Tarif</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Type</th>
                <th>Catégorie</th>
                <th>Prix 1</th>
                <th>Prix 2</th>
                <th>Prix 3</th>
                <th>Détails</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tarif, index) in getAllTarifs" :key="tarif.id">
                <th>{{tarif.id}}</th>
                <th>{{tarif.type}}</th>
                <th>{{tarif.category}}</th>
                <th>{{tarif.price1}}</th>
                <th>{{tarif.price2}}</th>
                <th>{{tarif.price3}}</th>
                <th>{{tarif.details}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteTarif(tarif.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=tarif.id" class="fas fa-edit" data-toggle="modal" :data-target="'#tarifeditmodal'+tarif.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=tarif.id" class="fas fa-eye" data-toggle="modal" :data-target="'#tarifshowmodal'+tarif.id"></i>
                  </a>
                </th>

              <!-- Show Tarif modal -->


          <div class="modal fade" :id="'tarifshowmodal'+tarif.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails tarif</h6><br><br>
                  <div class="signup-row">
                    <h3>{{tarif.type}}</h3>
                  </div>
                  <div class="signup-row">
                   <h6>{{tarif.category}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>{{tarif.price1}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>{{tarif.price2}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>{{tarif.price3}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>{{tarif.details}}</h6>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=tarif.id" data-toggle="modal" :data-target="'#tarifeditmodal'+tarif.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Tarif modal -->


          <div class="modal fade" :id="'tarifeditmodal'+tarif.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onTarifEdit(tarif)" class="sign-back">
                  <h1>Modification tarif</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Type" v-model="tarif.type"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Catégorie" v-model="tarif.category"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="tarif.price1" name="" value="" placeholder="Prix 1"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="tarif.price2" name="" value="" placeholder="Prix 2"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="tarif.price3" name="" value="" placeholder="Prix 3"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="tarif.details"></textarea>
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

          <!-- Add Tarifs modal -->


          <div class="modal fade tarifaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onTarifsubmit" class="sign-back">
                  <h1>Ajout tarif</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Type" v-model="type"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Catégorie" v-model="category"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price1" name="" value="" placeholder="Prix 1"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price2" name="" value="" placeholder="Prix 2"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price3" name="" value="" placeholder="Prix 3"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="details" name="" value="" placeholder="Détails"></textarea>
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
    name: 'tarifs',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        type: '',
        category: '',
        price1: '',
        price2: '',
        price3: '',
        details: '',
        
      }
    },
    methods: {

      ...mapActions(['createTarif', 'editTarif', 'fetchAllTarifs', 'fetchTarifById', 'deleteTarif']),
      onTarifsubmit(e) {
        e.preventDefault();
        var obj = {
          'type': this.type,
          'category': this.category,
          'price1': this.price1,
          'price2': this.price2,
          'price3': this.price3,
          'details': this.details,

        }
        this.createTarif(obj);
        this.fetchAllTarifs();

      },
      onTarifEdit(tarif) {
        //e.preventDefault();
        var obj = {
          'id':tarif.id,
          'type': tarif.type,
          'category': tarif.category,
          'price1': tarif.price1,
          'price2': tarif.price2,
          'price3': tarif.price3,
          'details': tarif.details,
        }
        this.editTarif(obj);
        this.fetchAllTarifs();

      },
      onDeleteTarif(id, index) {
        this.deleteTarif(id)
        this.getAllTarifs.splice(index, 1)
      },

    },
    computed: mapGetters(['getTarifMessage', 'getAllTarifs', 'getTarif', 'infoTarifById', 'getUpdateTarifMessage' ]),
    created() {

      this.fetchAllTarifs();
      
      //this.fetchTarifById(this.$route.params.id);
    }
  }
</script>