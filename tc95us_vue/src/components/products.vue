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
                <th>{{product.image}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDelete(product.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <!-- <i v-on:click="onEdit(user.id, index)" class="fas fa-edit"></i> -->
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

              <!-- Edit Products modal -->


          <div class="modal fade producteditmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onEdit" class="sign-back">
                  <h1>Modification produit</h1>
                  <div class="signup-row">
                    
                    <input type="text" name="" value="" id="exampleInputName1" placeholder="Nom" v-model="product.name">
                  </div>
                  <div class="signup-row">
                    
                    <input type="textarea" name="" value="" id="exampleInputName1" placeholder="Détails" v-model="product.details">
                  </div>
                  <div class="signup-row">
                    
                    <input type="text" v-model="product.price" name="" value="" placeholder="Prix">
                  </div>
                  <div class="signup-row">
                    
                    <input type="text" v-model="product.image" name="" value="" placeholder="Image">
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
                <form @submit="onsubmit" class="sign-back">
                  <h1>Ajout produit</h1>
                  <div class="signup-row">
                    
                    <input type="text" name="" value="" id="exampleInputName1" placeholder="Nom" v-model="name">
                  </div>
                  <div class="signup-row">
                    
                    <input type="textarea" name="" value="" id="exampleInputName1" placeholder="Détails" v-model="details">
                  </div>
                  <div class="signup-row">
                    
                    <input type="text" v-model="price" name="" value="" placeholder="Prix">
                  </div>
                  <div class="signup-row">
                    
                    <input type="image" v-model="password" name="" value="" placeholder="Image">
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
    name: 'products',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        name: '',
        details: '',
        price: '',
        image: '',
        editProduct: {
          'id': '',
          'name': '',
          'details': '',
          'price': '',
          'image': ''

        }
      }
    },
    methods: {

      ...mapActions(['registerProduct', 'fetchProduct', 'fetchAllProducts', 'fetchProductById', 'deleteProduct']),
      onsubmit(e) {
        e.preventDefault();
        var obj = {
          'name': this.name,
          'details': this.details,
          'price': this.price,
          'image': this.image,

        }
        this.createForm(obj);

      },
      onEdit(e) {
        e.preventDefault();
        var obj = {
          'name': this.name,
          'details': this.details,
          'price': this.price,
          'image': this.image,
        }
        this.editProduct(obj);

      },
      onDelete(id, index) {
        this.deleteProduct(id)
        this.getAllProducts.splice(index, 1)
      },

    },
    computed: mapGetters(['getMessage', 'getAllProducts', 'getProducts', 'infoProductsById', ]),
    created() {

      this.fetchAllProducts();
      this.fetchProduct();
      this.fetchProductById(this.$route.params.id);
    }
  }
</script>