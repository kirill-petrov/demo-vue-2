import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GlobalVComponent from "@/components/GlobalVComponent.vue";

Vue.config.productionTip = false; //? wtf

Vue.component("global-v-component", GlobalVComponent);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
