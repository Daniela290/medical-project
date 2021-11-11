import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import Element from 'element-ui';
import VueScrollTo from 'vue-scrollto';
import store from './store';


Vue.use(Element)
Vue.use(VueScrollTo)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
