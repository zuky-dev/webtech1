import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/App.vue';

//routes
import Home from '../components/Home.vue';
import NotFound from '../components/404.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  //add paths here before 404
  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

//$(document).ready(function(){
//  alert('im alive');
//});

//import '../js/app.js';
//require('../js/app.js');
/*
const corsEscape = 'https://cors-anywhere.herokuapp.com/';
const namedaySiteUrl = 'https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa';

$(document).ready(function () {
  $.ajax({
    url: corsEscape + namedaySiteUrl,
    type: "GET",
    headers: {
      "x-requested-with": "xhr"
    },
    success: function (result) {
      console.log($(result));

    },
    error: function (error) {
      console.log('ERR: ' + error);
    }
  });
});
*/