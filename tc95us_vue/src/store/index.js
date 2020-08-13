import Vue from 'vue'
import Vuex from 'vuex'
//import tcus from './modules/tcus.js'
import users from './modules/users.js'
import products from './modules/products.js'
import events from './modules/events.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    /* tcus, */ users, products, events
  }
})
