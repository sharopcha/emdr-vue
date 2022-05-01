import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    isLoggedIn: true,
  },
  mutations: {
    loginUser(state) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;

      sessionStorage.removeItem('token');
    },
  },
  actions: {
    async login(context) {},
  },
  modules: {},
});
