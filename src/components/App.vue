<template>
  <div id="main" v-if="$route.path != '/' && $route.path != '/404'"> <!-- TODO: maybe rework if statement-->
    <heading></heading>
    <div id="container">
      <bcrumbs></bcrumbs>
      {{$refs}}
      <router-view/>
    </div>
    <!--footing></footing-->
  </div>
  <div id="main" v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './partials/Header.vue'
import Breadcrumbs from './partials/Breadcrumbs';
import Footer from './partials/Footer.vue';

export default {
  components: {
    'heading': Header,
    'bcrumbs': Breadcrumbs,
    'footing': Footer
  },
  data () {
    return {
      msg: 'Welcome from Your Vue App!',
    }
  }
}
</script>

<style lang="scss">
#main{
    width: 100%;
    min-height: 100vh;
}

#container{
  width: 100%;
  min-height: 80vh;
  background: green;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    bottom: -20vh;
    left: 0;
    width: 50%;
    height: 20vh;
    background: blue;
  }
}
</style>