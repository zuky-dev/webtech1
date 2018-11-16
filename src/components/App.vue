<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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