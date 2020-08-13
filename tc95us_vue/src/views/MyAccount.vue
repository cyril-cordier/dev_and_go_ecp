<template>
  <div class="MyAccount">
    <h1>Admin</h1>

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">

          <li class="list-group">
            <ul @click="users_toggle = !users_toggle, 
            products_toggle = false,
            events_toggle = false,   
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            championships_toggle = false" class="List-group-item list-group-item-action">Gestion Utilisateurs
            </ul>
            <ul class="List-group-item list-group-item-action" @click="products_toggle = !products_toggle, 
            users_toggle = false,
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            championships_toggle = false">
              Gestion Produits
            </ul>
            <ul class="List-group-item list-group-item-action" @click="events_toggle = !events_toggle, 
            products_toggle = false,
            users_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            championships_toggle = false">
              Gestion Evennements
            </ul>
            <ul class="List-group-item list-group-item-action" @click="challengeusers_toggle = !challengeusers_toggle, 
            products_toggle = false,
            events_toggle = false, 
            users_toggle = false, 
            challengeresults_toggle = false,
            championships_toggle = false">
              Gestion Joueurs Challenge
            </ul>
            <ul class="List-group-item list-group-item-action" @click="challengeresults_toggle = !challengeresults_toggle, 
            products_toggle = false,
            events_toggle = false, 
            challengeusers_toggle = false, 
            users_toggle = false,
            championships_toggle = false">
              Gestion Résultats Challenge
            </ul>
            <ul class="List-group-item list-group-item-action" @click="championships_toggle = !championships_toggle, 
            products_toggle = false, 
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            users_toggle = false">
              Gestion Championnats
            </ul>
          </li>
        </div>

        <div class="col-9 bg-light" v-show="users_toggle">
          <users />
        </div>

        <div class="col-9 bg-light" v-show="products_toggle">
          <products />
        </div>
        <div class="col-9 bg-light" v-show="events_toggle">
          <events />
        </div>
<!--
        <div class="col-9 bg-light" v-show="products_toggle">
          <products />
        </div>
        <div class="col-9 bg-light" v-show="users_toggle">
          <users />
        </div>

        <div class="col-9 bg-light" v-show="products_toggle">
          <products />
        </div> -->

      </div>



    </div>
  </div>


</template>

<script>
  // @ is an alias to /src

  import users from '@/components/users.vue'
  import products from '@/components/products.vue'
  import events from '@/components/events.vue'
  /* import Footer from '@/components/footer.vue' */


  export default {
    name: 'MyAccount',
    components: {
      /*  Footer, */
      users,
      products, 
      events


    },
    data() {
      return {
        
        users_toggle: true,
        products_toggle: false,
        events_toggle: false,
        challengeusers_toggle: false,
        challengeresults_toggle: false,
        championships_toggle: false,
        
      }
    },
   
  }
</script>