import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import VueScrollTo from 'vue-scrollto';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Element)
Vue.use(VueScrollTo)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
