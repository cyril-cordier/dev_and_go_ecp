<template>
  <div class="events">
    <h1>Gestion Evennements</h1>



    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".eventaddmodal">+ Ajouter un
      Evènnement</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th>Nom</th>
          <th>Détail</th>
          <th>Lieu</th>
          <th>Prix</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in getAllEvents" :key="event.id">
          <th>{{event.id}}</th>
          <th>{{event.title}}</th>
          <th>{{event.details}}</th>
          <th>{{event.place}}</th>
          <th>{{event.price}}</th>
          <th>{{event.image}}</th>
          <th>
            <a href="#" class="icon">
              <i v-on:click="onDelete(event.id, index)" class="fa fa-trash"></i>
            </a> |
            <a href="#" class="icon">
              <!-- <i v-on:click="onEdit(user.id, index)" class="fas fa-edit"></i> -->
            </a>
            <!-- <router-link 
                    :to="{
                      name:'Userinfo', 
                      params:{id: event.id}
                    }" 
                    class="icon"
                    >
                      <i class="far fa-eye"></i>
                    </router-link> -->
          </th>

          <!-- Edit Events modal -->


          <div class="modal fade eventeditmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onEdit" class="sign-back">
                  <h1>Modification évènnement</h1>
                  <div class="signup-row">

                    <input type="text" name="" value="" id="exampleInputName1" placeholder="Nom" v-model="event.name">
                  </div>
                  <div class="signup-row">

                    <input type="textarea" name="" value="" id="exampleInputName1" placeholder="Détails"
                      v-model="event.details">
                  </div>
                  <div class="signup-row">

                    <input type="text" v-model="event.place" name="" value="" placeholder="Lieu">
                  </div>
                  <div class="signup-row">

                    <input type="text" v-model="event.price" name="" value="" placeholder="Prix">
                  </div>
                  <div class="signup-row">

                    <input type="text" v-model="event.image" name="" value="" placeholder="Image">
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

    <!-- Add Events modal -->


    <div class="modal fade eventaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <form @submit="onsubmit" class="sign-back">
            <h1>Ajout Evennement</h1>
            <div class="signup-row">

              <textarea class="form-control" name="" value="" id="eventtitle" placeholder="Nom" v-model="title"></textarea>
            </div>
            <div class="signup-row">
              <!-- <label for="details" class="control-label">Details</label> -->
              <textarea class="form-control" name="" value="" id="details" placeholder="Détails" v-model="details"></textarea>
              <!-- <input type="message-text" name="" value="" id="exampleInputName1" placeholder="Détails" v-model="details"> -->
            </div>
            <div class="signup-row">

              <textarea class="form-control" name="" value="" v-model="place" placeholder="Lieu"></textarea>
            </div>
            <div class="signup-row">

              <textarea class="form-control" v-model="price" name="" value="" placeholder="Prix"></textarea>
            </div>
            <div class="signup-row">

              <input type="image" v-model="image" name="" value="" placeholder="Image">
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
    name: 'events',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        title: '',
        details: '',
        place:'',
        price: '',
        image: '',
        
      }
    },
    methods: {

      ...mapActions(['createForm', 'fetchEvent', 'fetchAllEvents', 'fetchEventById', 'deleteEvent', 'editEvent']),
      onsubmit(e) {
        e.preventDefault();
        var obj = {
          'title': this.title,
          'details': this.details,
          'place': this.place,
          'price': this.price,
          'image': this.image,

        }
        this.createForm(obj);

      },
      onEdit(e) {
        e.preventDefault();
        var obj = {
          'title': this.title,
          'details': this.details,
          'place': this.place,
          'price': this.price,
          'image': this.image,
        }
        this.editEvent(obj);

      },
      onDelete(id, index) {
        this.deleteEvent(id)
        this.getAllEvents.splice(index, 1)
      },

    },
    computed: mapGetters(['getMessage', 'getAllEvents', 'getEvents', 'infoEventsById', ]),
    created() {

      this.fetchAllEvents();
      this.fetchEvent();
      this.fetchEventById(this.$route.params.id);
    }
  }
</script>