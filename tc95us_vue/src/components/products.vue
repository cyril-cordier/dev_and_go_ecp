<template>
  <div class="products">
    <h1>Gestion produits</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".productaddmodal">+ Ajouter un
      Produit</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Nom</th>
                <th>Détail</th>
                <th>Prix</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in getAllProducts" :key="product.id">
                <th>{{product.id}}</th>
                <th>{{product.name}}</th>
                <th>{{product.details}}</th>
                <th>{{product.price}}</th>
                <th><img :src="`http://localhost:8000/storage/images/product/${product.image_name}`"/></th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteProduct(product.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=product.id" class="fas fa-edit" data-toggle="modal" :data-target="'#producteditmodal'+product.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=product.id" class="fas fa-eye" data-toggle="modal" :data-target="'#productshowmodal'+product.id"></i>
                  </a>
                </th>

              <!-- Show Product modal -->


          <div class="modal fade" :id="'productshowmodal'+product.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails produit</h6><br><br>
                  <div class="signup-row">
                    <h3>{{product.name}}</h3>
                  </div>
                  <div class="signup-row">
                   <h6>{{product.details}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>{{product.price}}</h6>
                  </div>
                  
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=product.id" data-toggle="modal" :data-target="'#producteditmodal'+product.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Product modal -->


          <div class="modal fade" :id="'producteditmodal'+product.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onProductEdit(product)" class="sign-back">
                  <h1>Modification produit</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Nom" v-model="product.name"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="product.details"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="product.price" name="" value="" placeholder="Prix"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <input type="text" v-model="product.image" name="" value="" placeholder="Image">
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

          <!-- Add Products modal -->


          <div class="modal fade productaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onProductsubmit" class="sign-back" enctype="multipart/form-data">
                  <h1>Ajout produit</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Nom" v-model="name"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="details"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price" name="" value="" placeholder="Prix"></textarea>
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
    name: 'products',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        name: '',
        details: '',
        price: '',
        image: '',
        image_name:'',
        extension:''
        
      }
    },
    methods: {

      ...mapActions(['createProduct', 'editProduct', 'fetchAllProducts', 'fetchProductById', 'deleteProduct']),
      onImageChange(e){
        //console.log(e.target.files[0]);
        this.image = e.target.files[0];
      },
      onProductsubmit(e) {
        let ext = this.image.name.substring(this.image.name.lastIndexOf('.') + 1);
        e.preventDefault();
        var obj = {
          'name': this.name,
          'details': this.details,
          'price': this.price,
          'image': this.image,
          'image_name':Date.now(),
          'extension': ext

        }
        this.createProduct(obj);
        this.fetchAllProducts();

      },
      onProductEdit(product) {
        let ext = this.image.name.substring(this.image.name.lastIndexOf('.') + 1);
        //e.preventDefault();
        var obj = {
          'id':product.id,
          'name': product.name,
          'details': product.details,
          'price': product.price,
          'image': product.image,
          'image_name':Date.now(),
          'extension': ext
        }
        this.editProduct(obj);
        this.fetchAllProducts();

      },
      onDeleteProduct(id, index) {
        this.deleteProduct(id)
        this.getAllProducts.splice(index, 1)
      },

    },
    computed: mapGetters(['getProductMessage', 'getAllProducts', 'getProduct', 'infoProductById', 'getUpdateProductMessage' ]),
    created() {

      this.fetchAllProducts();
      
      //this.fetchProductById(this.$route.params.id);
    }
  }
</script>