import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import GlobalComponent from './components/GlobalComponent'
Vue.component('global-component',GlobalComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
