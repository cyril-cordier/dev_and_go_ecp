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
            contents_toggle = false,
            officeusers_toggle = false,
            championships_toggle = false, 
            tarifs_toggle = false" class="List-group-item list-group-item-action">Gestion Utilisateurs
            </ul>
            <ul class="List-group-item list-group-item-action" @click="products_toggle = !products_toggle, 
            users_toggle = false,
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            championships_toggle = false, 
            contents_toggle = false,
            officeusers_toggle = false,
            tarifs_toggle = false">
              Gestion Produits
            </ul>
            <ul class="List-group-item list-group-item-action" @click="events_toggle = !events_toggle, 
            products_toggle = false,
            users_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            championships_toggle = false, 
            contents_toggle = false,
            officeusers_toggle = false,
            tarifs_toggle = false">
              Gestion Evennements
            </ul>
            <ul class="List-group-item list-group-item-action" @click="challengeusers_toggle = !challengeusers_toggle, 
            products_toggle = false,
            events_toggle = false, 
            users_toggle = false, 
            challengeresults_toggle = false,
            championships_toggle = false, 
            contents_toggle = false,
            officeusers_toggle = false,
            tarifs_toggle = false">
              Gestion Joueurs Challenge
            </ul>
            <ul class="List-group-item list-group-item-action" @click="challengeresults_toggle = !challengeresults_toggle, 
            products_toggle = false,
            events_toggle = false, 
            challengeusers_toggle = false, 
            users_toggle = false,
            contents_toggle = false,
            championships_toggle = false, 
            officeusers_toggle = false,
            tarifs_toggle = false">
              Gestion Résultats Challenge
            </ul>
            <ul class="List-group-item list-group-item-action" @click="championships_toggle = !championships_toggle, 
            products_toggle = false, 
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            users_toggle = false,
            contents_toggle = false,
            officeusers_toggle = false,
            tarifs_toggle = false">
              Gestion Championnats
            </ul>
            <ul class="List-group-item list-group-item-action" @click="tarifs_toggle = !tarifs_toggle, 
            products_toggle = false, 
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            users_toggle = false,
            contents_toggle = false,
            officeusers_toggle = false,
            championships_toggle = false">
              Gestion Tarifs
            </ul>
            <ul class="List-group-item list-group-item-action" @click="contents_toggle = !contents_toggle, 
            products_toggle = false, 
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            users_toggle = false,
            tarifs_toggle = false,
            officeusers_toggle = false,
            championships_toggle = false">
              Gestion Contenus
            </ul>
            <ul class="List-group-item list-group-item-action" @click="officeusers_toggle = !officeusers_toggle, 
            products_toggle = false, 
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            users_toggle = false,
            tarifs_toggle = false,
            contents_toggle = false,
            championships_toggle = false">
              Gestion Membres du bureau
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

        <div class="col-9 bg-light" v-show="challengeusers_toggle">
          <challengeusers />
        </div>
        <div class="col-9 bg-light" v-show="challengeresults_toggle">
          <challengeresults />
        </div>
        <div class="col-9 bg-light" v-show="championships_toggle">
          <championnats />
        </div>
        <div class="col-9 bg-light" v-show="tarifs_toggle">
          <tarifs />
        </div>
        <div class="col-9 bg-light" v-show="contents_toggle">
          <contents />
        </div>
        <div class="col-9 bg-light" v-show="officeusers_toggle">
          <officeusers />
        </div>
        
<!--        <div class="col-9 bg-light" v-show="users_toggle">
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
  import challengeusers from '@/components/challengeusers.vue'
  import challengeresults from '@/components/challengeresults.vue'
  import championnats from '@/components/championnats.vue'
  import tarifs from '@/components/tarifs.vue'
  import contents from '@/components/contents.vue'
  import officeusers from '@/components/officeusers.vue'

  /* import Footer from '@/components/footer.vue' */


  export default {
    name: 'MyAccount',
    components: {
      /*  Footer, */
      users,
      products, 
      events,
      challengeusers, 
      challengeresults, 
      championnats, 
      tarifs,
      contents, 
      officeusers



    },
    data() {
      return {
        
        users_toggle: true,
        products_toggle: false,
        events_toggle: false,
        challengeusers_toggle: false,
        challengeresults_toggle: false,
        championships_toggle: false,
        tarifs_toggle: false,
        contents_toggle: false,
        officeusers_toggle: false,
        
      }
    },
   
  }
</script>