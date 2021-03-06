import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
import VueLocalStorage from 'vue-ls'
import 'amfe-flexible/index.js'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueLocalStorage)
// vant components
import { Button, Field, Cell, CellGroup, Image, Search, Toast, Tabbar, TabbarItem } from 'vant'
Vue.use(Button).use(Field).use(Cell).use(CellGroup).use(Image).use(Search).use(Toast).use(Tabbar).use(TabbarItem)

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
