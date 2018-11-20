import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBreadcrumbs from 'vue2-breadcrumbs';
import App from '../components/App.vue';

//routes
import Home from '../components/Home.vue';
import Test from '../components/Home.vue';
import NotFound from '../components/404.vue';

Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);

var test = {
  path: 'test',
  component: Test,
  name: 'Test',
  meta: {
    breadcrumb: 'Test'
  }
};

const routes = [
  { path: '/',
    component: Home,
    name: 'Domov',
    meta: {
      breadcrumb: 'Domov'
    },
    children: [
      test
    ]
  },
  //add paths here before 404
  { path: '/404',
    component: NotFound,
    meta: {
      breadcrumb: '404'
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