import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import SecondPage from './pages/secondpage.vue';

import Vuex from 'vuex'
import storePlugin from './store/storeplugin'
import { MyVuexStore } from './store/store.js'
import VueResource from 'vue-resource'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/secondpage',
    name: 'secondpage',
    component: SecondPage,
  },

  {
    path: '*',
    redirect: {
      name: 'home',
    },
  },
];
const router = new VueRouter({
  routes,
  root: '/home',
  mode: 'history'
});

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(storePlugin)


Vue.use( Vue.prototype.$dataStore);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});
