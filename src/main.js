import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TheHome from './components/TheHome.vue';
import pagePersonal from './pages/pagePersonal.vue';
import pageExperience from './pages/pageExperience.vue';
import pageEducation from './pages/pageEducation.vue';
import pageResume from './pages/pageResume.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: TheHome },
    { path: '/pagePersonal', component: pagePersonal },
    { path: '/pageExperience', component: pageExperience },
    { path: '/pageEducation', component: pageEducation },
    { path: '/pageResume', component: pageResume },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
