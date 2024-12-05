import { createRouter, createWebHistory } from 'vue-router';

// 按需加载组件
const Home = () => import('@/views/home.vue');
const Login = () => import('@/views/login/login.vue');
const Register = () => import('@/views/login/register.vue');
const ProductDetails = () => import('@/views/product/productDetails.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, 
  },
  {
    path: '/register',
    name: 'Register',
    component: Register, 
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;