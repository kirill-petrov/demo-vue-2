export const vmail = {
  namespaced: true,

  state: () => ({
    isAuth: false,
  }),
  mutations: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
  actions: {},
  getters: {
    checkAuth(state) {
      return state.isAuth;
    },
  },
};
