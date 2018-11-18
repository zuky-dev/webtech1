<template>
  <div id="app">
    <heading v-if="$route.path != '/' && $route.path != '/404'"></heading> <!-- TODO: maybe rework if statement-->
    <router-view></router-view>
    <footing v-if="$route.path != '/' && $route.path != '/404'"></footing>
  </div>
</template>

<script>
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