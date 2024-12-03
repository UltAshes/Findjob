import Vue from 'vue';
import VueRouter from 'vue-router';
import Register_findjob from '../pages/register_findjob/register_findjob.vue';
import Login_findjob from '../pages/login_findjob/login_findjob.vue';
import Homepage from '../pages/homepage/homepage.vue';
import Login_recruitment from '../pages/login_recruitment/login_recruitment.vue';
import Register_recruitment from '../pages/register_recruitment/register_recruitment.vue';
import Cookies from 'js-cookie';
import Searchpage from '../pages/searchpage/searchpage.vue';
import companypage from '../pages/details/companypage.vue';
import jobpage from '../pages/details/jobpage.vue';
import Resumepage from '../pages/resumepage/resumepage.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'register_findjob',
    component: Register_findjob,
  },
  {
    path: '/login_findjob',
    name: 'login_findjob',
    component: Login_findjob,
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: Homepage,
    meta: { requiresAuth: true } //需要token检验
  },
  {
    path: '/login_recruitment',
    name: 'login_recruitment',
    component: Login_recruitment,
  },
  {
    path: '/register_recruitment',
    name: 'register_recruitment',
    component: Register_recruitment,
  },
  {
    path: '/searchpage',
    name: 'searchpage',
    component: Searchpage,
  },
  {
    path: '/details/companypage/:cid',
    name: 'companypage',
    component: companypage,
    props: true,  // 允许通过 props 传递参数
  },
  {
    path: '/details/jobpage/:jid',
    name: 'jobpage',
    component: jobpage,
    props: true,  // 允许通过 props 传递参数
  },
  {
    path: '/resumepage',
    name: 'resumepage',
    component: Resumepage,
  },
  
];


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  // 检查目标路由是否需要授权
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = Cookies.get('token');
    // 如果没有 token，则重定向到登录页面
    if (!token) {
      return next({ name: 'login_findjob' });
    }
  }
  next();
});

export default router;