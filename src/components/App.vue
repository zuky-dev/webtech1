<template>
  <div id="app" v-if="$route.path != '/' && $route.path != '/404'"> <!-- TODO: maybe rework if statement-->
    <heading></heading>
    <div id="container">
      <!--breadcrumbs-->
      <router-link v-for="(crumb,key) in $breadcrumbs" :key="key" :to=" '.' + crumb.path">{{crumb.meta.breadcrumb}}</router-link>
      <router-view></router-view>
    </div>
    <footing></footing>
  </div>
  <div id="app" v-else>
    <router-view></router-view>
  </div>
</template>

<script>
//console.log(6);
//import '../js/app.js';

import Header from './partials/Header.vue'
import Footer from './partials/Footer.vue';

export default {
  components: {
    'heading': Header,
    'footing': Footer
  },
  data () {
    return {
      msg: 'Welcome from Your Vue App!',
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/app.scss';
</style>