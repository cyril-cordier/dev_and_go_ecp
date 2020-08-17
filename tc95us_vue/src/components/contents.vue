<template>
  <div class="contents">
    <h1>Gestion contenus</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".contentaddmodal">+ Ajouter un
      Contenu</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Titre</th>
                <th>Contenu</th>
                <th>Nom</th>
                <th>Fonction</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(content, index) in getAllContents" :key="content.id">
                <th>{{content.id}}</th>
                <th>{{content.title}}</th>
                <th>{{content.content}}</th>
                <th>{{content.name}}</th>
                <th>{{content.fonction}}</th>
                <th><img :src="`http://localhost:8000/storage/images/content/${content.image_name}`"/></th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteContent(content.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=content.id" class="fas fa-edit" data-toggle="modal" :data-target="'#contenteditmodal'+content.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=content.id" class="fas fa-eye" data-toggle="modal" :data-target="'#contentshowmodal'+content.id"></i>
                  </a>
                </th>

              <!-- Show Content modal -->


          <div class="modal fade" :id="'contentshowmodal'+content.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails content</h6><br><br>
                  <div class="signup-row">
                    <h3>{{content.title}}</h3>
                  </div>
                  <div class="signup-row">
                   <h6>{{content.content}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>{{content.name}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>{{content.fonction}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>{{content.image}}</h6>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=content.id" data-toggle="modal" :data-target="'#contenteditmodal'+content.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Content modal -->


          <div class="modal fade" :id="'contenteditmodal'+content.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onContentEdit(content)" class="sign-back">
                  <h1>Modification contenu</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Titre" v-model="content.title"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Contenu" v-model="content.content"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="content.name" name="" value="" placeholder="Nom"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="content.fonction" name="" value="" placeholder="Fonction"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="content.image" name="" value="" placeholder="Image"></textarea>
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

          <!-- Add Contents modal -->


          <div class="modal fade contentaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onContentsubmit" class="sign-back" enctype="multipart/form-data">
                  <h1>Ajout content</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Titre" v-model="title"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Contenu" v-model="content"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="name" name="" value="" placeholder="Nom"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="fonction" name="" value="" placeholder="Fonction"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <strong>Image:</strong>

                        <input type="file" name="image" class="form-control" @change="onImageChange">
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
    name: 'contents',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        title: '',
        content: '',
        name: '',
        fonction: '',
        image_name:'',
        extension:'',
        image: '',        
      }
    },
    methods: {

      ...mapActions(['createContent', 'editContent', 'fetchAllContents', 'fetchContentById', 'deleteContent']),
       onImageChange(e){
        //console.log(e.target.files[0]);
        this.image = e.target.files[0];
       },
      onContentsubmit(e) {
        let ext = this.image.name.substring(this.image.name.lastIndexOf('.') + 1);
        e.preventDefault();
        var obj = {
          'title': this.title,
          'content': this.content,
          'name': this.name,
          'fonction': this.fonction,
          'image': this.image,
          'image_name':Date.now(),
          'extension': ext

        }
        this.createContent(obj);
        this.fetchAllContents();

      },
      onContentEdit(content) {
        //e.preventDefault();
        let ext = this.image.name.substring(this.image.name.lastIndexOf('.') + 1);
        var obj = {
          'id':content.id,
          'title': content.title,
          'content': content.content,
          'name': content.name,
          'fonction': content.fonction,
          'image': this.image,
          'image_name':Date.now(),
          'extension': ext
        }
        this.editContent(obj);
        this.fetchAllContents();

      },
      onDeleteContent(id, index) {
        this.deleteContent(id)
        this.getAllContents.splice(index, 1)
      },

    },
    computed: mapGetters(['getContentMessage', 'getAllContents', 'getContent', 'infoContentById', 'getUpdateContentMessage' ]),
    created() {

      this.fetchAllContents();
      
      //this.fetchContentById(this.$route.params.id);
    }
  }
</script>