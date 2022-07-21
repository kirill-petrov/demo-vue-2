import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return { count: 0 };
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  getters: {
    multiplyByTwo(state) {
      return state.count * 2;
    },
  },
  actions: {},
  modules: {},
});
