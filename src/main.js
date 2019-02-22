import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
/* eslint no-new:"off" */


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
