import Vue from "vue";
import Vuex from "vuex";
import { cars } from "./modules/cars";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cars,
  },
  state: () => {
    return { count: 0 };
  },
  getters: {
    multiplyByTwo(state) {
      return state.count * 2;
    },
    getCount(state) {
      if (state.count <= 0) return 0;
      return state.count;
    },
  },
  mutations: {
    // мутации должны быть синхронными
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
    addTen(state, payload) {
      state.count += payload.value;
    },
  },
  // для работы с асинхронным кодом
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit("addTen", {
          value: 10,
        });
      }, 1000);
    },
  },
});
