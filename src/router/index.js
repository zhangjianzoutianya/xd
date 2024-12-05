import { createRouter, createWebHistory } from 'vue-router';

// 按需加载组件
const Home = () => import('@/views/home.vue');
const Login = () => import('@/views/login/login.vue');
const Register = () => import('@/views/login/register.vue');
const Product = () => import('@/views/product/product.vue'); 
const Applicat = () => import('@/views/product/application.vue'); 
const AppClass = () => import('@/views/product/applicatClass.vue'); 
const ProductList = () => import('@/views/product/productList.vue');

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
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/application',
    name: 'Applicat',
    component: Applicat,
  },
  {
    path: '/applicatClass',
    name: 'AppClass',
    component: AppClass,
  },
  {
    path: '/productList',
    name: 'ProductList',
    component: ProductList,
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;