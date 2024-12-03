import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';  

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: Cookies.get('token') || '',  // 初始化时从 cookie 获取 token
  },
  mutations: {
    // 修改 token 的 mutation
    setToken(state, token) {
      state.token = token;
      Cookies.set('token', token);  // 在 cookie 中保存 token
    },
    // 清除 token 的 mutation
    removeToken(state) {
      state.token = '';
      Cookies.remove('token');  // 从 cookie 中移除 token
    }
  },
  actions: {
    // 从 cookie 中读取 token 并保存到 state
    loadToken({ commit }) {
      const token = Cookies.get('token');
      if (token) {
        commit('setToken', token);
      }
    },
    // 设置 token
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    // 清除 token
    removeToken({ commit }) {
      commit('removeToken');
    }
  },
  getters: {
    // 获取当前 token
    getToken(state) {
      return state.token;
    }
  }
});
