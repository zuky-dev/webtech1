<template>
        <div id="images">   
        <img id="pic1" class="thumbnail" src="../assets/images/ondro/StarWars-original.jpg">
        <img id="pic2" class="thumbnail" src="../assets/images/ondro/trooper-original.jpg">
        </div>
</template>

<script>
import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';
import "../js/gameOndro.js";
var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");
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