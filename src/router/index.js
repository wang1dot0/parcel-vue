import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

const About = () => import('../views/About.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ],
});
