import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/global.scss';

import GlobalVComponent from '@/components/GlobalVComponent.vue';

Vue.config.productionTip = false; //? wtf

Vue.component('global-v-component', GlobalVComponent);

// создание нового экземпляра Vue (view model)
new Vue({
  router,
  store,
  render: (h) => h(App), // эквивалент createElement
}).$mount('#app'); // происходит замена #app
