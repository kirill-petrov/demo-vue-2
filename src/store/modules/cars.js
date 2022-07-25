export const cars = {
  // геттеры, действия и мутации будут автоматически связаны с этим пространством имён, основываясь на пути, по которому зарегистрирован модуль
  // getters['account/isAdmin']
  // dispatch('account/login')
  // commit('account/login')
  namespaced: true,

  state: () => ({
    cars: [
      {
        model: 'Toyota',
        color: 'black',
      },
      {
        model: 'Tesla',
        color: 'red',
      },
    ],
    somedata: 'somedata123',
  }),
  mutations: {
    addCar: (state, payload) => {
      state.cars.push(payload);
    },
  },
  actions: {},
  getters: {},
};
