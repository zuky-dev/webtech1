<template>
  <div id="main" v-if="$route.path != '/' && $route.path != '/404'"> <!-- TODO: maybe rework if statement-->
    <heading></heading>
    <img v-bind:src="'/'+$route.meta.hero" alt="hero image" id="hero">
    <div id="heroGlass"></div>
    <div id="container">
      <bcrumbs class="bcrumbs"></bcrumbs>
      
      <router-view><router-view/>
    </div>
    <footing></footing>
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
  }
}
</script>

<style lang="scss">
@import '../scss/responsive.scss';

#main{
    width: 100%;
    min-height: 100vh;
}

#hero{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  z-index: 1;
  object-fit: cover;
  filter: contrast(140%);
}
#heroGlass{
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 30vh;

  background: linear-gradient(to top left, white, transparent);
  opacity: 0.5;
  filter: blur(5px);
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0 100%);
  z-index: 1;
}

#container{
  width: 100%;
  min-height: 80vh;
  background: #eaeaea;
  position: relative;
  z-index: 100;
  margin-top: 30vh;
  @media #{$phone}{
      margin-bottom: 30vh;
    }
    @media #{$tablet}{
      margin-bottom: 30vh;
    }
  box-shadow: 0px -10px 5px rgba(0,0,0,0.5);
  filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.5));
  &::after{
    content: '';
    position: absolute;
    bottom: -20vh;
    left: 0;
    width: 60%;
    height: 20vh;
    background: #eaeaea;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0 100%);
    z-index: 101;
    @media #{$phone}{
      content: none;
    }
    @media #{$tablet}{
      content: none;
    }
  }

  .bcrumbs{
    padding: 1rem;
    padding-left: 5vw;
  }
}
</style>