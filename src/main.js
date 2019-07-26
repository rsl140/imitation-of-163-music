import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VueLocalStorage from 'vue-ls';
import 'lib-flexible/flexible';
import './assets/styles/border.css'
import './assets/styles/reset.css'

Vue.config.productionTip = false
Vue.use(VueLocalStorage);

router.beforeEach((to, from, next) => {
  next()
});

router.afterEach(() => {

});

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
