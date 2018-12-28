<template>
        <div id="play">
        Play!   
        </div>
</template>

<script>
import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';
import "../js/gameOndro.js";

export default {
  components: { 
    'heading': Header,
    'footing': Footer
  }
}
</script>

<style lang="scss">
   @import url("~src/scss/ondroGame.scss");
</style>