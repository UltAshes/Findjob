import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './app.vue';
import store from './store';
import router from './router';
import axios from 'axios';
import Cookies from 'js-cookie';
Vue.use(Vant);
Vue.config.productionTip = false;

// 创建Axios实例
const instance = axios.create({
  baseURL: 'api', // 基础URL，建议确认路径或使用代理
  timeout: 5000, // 请求超时时间，适当调整为较长时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    console.log(response)
    const token = response.headers['authorization'].replace('Bearer ', '');
    const base64Payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(base64Payload));
    console.log(decodedPayload);
    if (token) {
      Cookies.set('token', token, { expires: 7 });
      this.$store.dispatch('setToken', token);  // 通过 action 保存 token
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 将Axios实例挂载到Vue原型
Vue.prototype.$axios = instance;

// 初始化Vue实例
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
