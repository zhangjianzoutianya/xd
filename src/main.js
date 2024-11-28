import { createApp } from 'vue';
import './style.less';
import App from './App.vue';
import router from './router';
import Api  from './api/api.js';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.provide('Api', {
  ...Api
});
app.use(router);
app.use(pinia);
app.mount('#app');
