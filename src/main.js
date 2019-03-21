import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
/* eslint no-new:"off" */


// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 3,
})
new Vue({
  el: '#app',
  router,
  store,
  // components:{
  //   App
  // },
  // template:'<App/>'
  render: h => h(App),
})
