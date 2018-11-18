<template>
  <div id="app" v-if="$route.path != '/' && $route.path != '/404'"> <!-- TODO: maybe rework if statement-->
    <heading></heading>
    <div id="container">
      <router-view></router-view>
    </div>
    <footing></footing>
  </div>
  <div id="app" v-else>
    <router-view></router-view>
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