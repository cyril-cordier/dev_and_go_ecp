import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('token');
    if (isLogged) next()
    else{
      if(to.meta.requiresVisitor) next()
      else next('/Login')
    }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
