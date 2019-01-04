import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBreadcrumbs from 'vue2-breadcrumbs';
import App from '../components/App.vue';

//routes
import Home from '../components/Home.vue';
import Crossroads from '../components/Crossroads.vue';
import NotFound from '../components/404.vue';
import Article from '../components/Article.vue';
import About from '../components/About.vue';

import OndrejGame from '../components/gameOndro.vue';
import LukasGame from '../components/LukasGame.vue';
import JakubGame from '../components/JakubGame.vue';


Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);

var oGame = {
  path: 'game',
  component: OndrejGame,
  name: 'Hra',
  meta: {
    breadcrumb: 'Hra',
    icon: 'fa-list',
    hero: 'falcon.jpg',
    path: 'millenium_falcon'
  },
};

var falcon = {
  path: 'millenium_falcon',
  component: Article,
  name: 'Millenium Falcon',
  meta: {
    breadcrumb: 'M.Falcon',
    icon: 'fa-list',
    hero: 'falcon.jpg',
    path: 'millenium_falcon'
  },
  children: [
    oGame
  ]
};

var jGame = {
  path: 'game',
  component: JakubGame,
  name: 'Hra',
  meta: {
    breadcrumb: 'Hra',
    icon: 'fa-list',
    hero: 'solo.png',
    path: 'han_solo'
  }
};

var solo = {
  path: 'han_solo',
  component: Article,
  name: 'Han Solo',
  meta: {
    breadcrumb: 'H.Solo',
    icon: 'fa-list',
    hero: 'solo.png',
    path: 'han_solo'
  },
  children: [
    jGame
  ]
};

var lGame = {
  path: 'game',
  component: LukasGame,
  name: 'Hra',
  meta: {
    breadcrumb: 'Hra',
    icon: 'fa-list',
    hero: 'luke.png',
    path: 'luke_skywalker'
  }
};

var skywalker = {
  path: 'luke_skywalker',
  component: Article,
  name: 'Luke Skywalker',
  meta: {
    breadcrumb: 'Luke S.',
    icon: 'fa-list',
    hero: 'luke.png',
    path: 'luke_skywalker'
  },
  children: [
    lGame
  ]
};

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Domov',
    meta: {
      breadcrumb: 'Domov',
      icon: 'fa-empire'
    }
  },
  { path: '/trivia',
    component: Crossroads,
    name: 'Trivia',
    meta: {
      breadcrumb: 'Trivia',
      icon: 'fa-empire',
      hero: 'movies.jpeg'
    },
    children: [
      falcon,
      solo,
      skywalker
    ]
  },
  {
    path: '/about',
    component: About,
    name: 'O nás',
    meta: {
      breadcrumb: 'O nás',
      icon: 'fa-empire',
      hero: 'about.png'
    }
  },
  //add paths here before 404
  { path: '/404',
    component: NotFound,
    meta: {
      breadcrumb: '404',
    }
  },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
