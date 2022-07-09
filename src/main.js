/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import store from './store';
import VueRouter from 'vue-router';
import router from './router';
import App from './components/App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueSweetalert2 from 'vue-sweetalert2';
import ElementUI from 'element-ui';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import loader from 'vue-ui-preloader';
import { Message } from 'element-ui';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.use(loader);
Vue.component(Message.name, Message);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  components: {
    loader: loader,
  },
  render: h => h(App),
}).$mount('#app');
