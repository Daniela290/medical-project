import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  render: h => h(App),
}).$mount('#app')
