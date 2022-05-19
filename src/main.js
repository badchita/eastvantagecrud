import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false

library.add(fas);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueSweetalert2);

Vue.component('fontA', FontAwesomeIcon);

import "bootstrap/dist/js/bootstrap.js"
import router from './router'
