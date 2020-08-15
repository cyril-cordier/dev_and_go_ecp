import Vue from 'vue'
import Vuex from 'vuex'
//import tcus from './modules/tcus.js'
import users from './modules/users.js'
import products from './modules/products.js'
import events from './modules/events.js'
import challengeusers from './modules/challengeusers.js'
import challengeresults from './modules/challengeresults.js'
import championnats from './modules/championnats.js'
import tarifs from './modules/tarifs.js'
import contents from './modules/contents.js'
import officeusers from './modules/officeusers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    /* tcus, */ users, products, events, challengeusers, challengeresults, championnats, tarifs, contents, officeusers
  }
})
