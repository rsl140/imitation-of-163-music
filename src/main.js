import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
import VueLocalStorage from 'vue-ls'
import 'lib-flexible/flexible'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueLocalStorage)

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {

})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
