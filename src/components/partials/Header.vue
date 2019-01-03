  <template>
    <header>
        <!--div id="navBlur"></div-->
        <i @click="burgerToggle" id="burger" class="fa fa-bars" aria-hidden="true" data-action="close"></i>
        <nav id="nav">
          <i id="menuImg" class="fa fa-empire" aria-hidden="true"></i>
          <navigation id="menu" :path="''" :node="$router.options.routes"></navigation>
        </nav>
    </header>
</template>
<script>
import Navigation from "./Navigation";

export default {
  components: {
    'navigation': Navigation
  },
  methods:{
    burgerToggle: burger
  },
  data () {
    return {
    }
  },
}

function burger(){
  $('#burger').toggleClass('fa-bars').toggleClass('fa-times');
  $('#nav').toggleClass('active')
}

</script>
<style lang="scss" scoped>
#burger{
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
    font-size: 2rem;
    color: #181818;
    z-index: 5000;
    cursor: pointer;
    transition: 300ms all ease-in-out;
  }


#navBlur{
  background: rgba(0,0,0,0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display:none;
}

#nav{
  background: linear-gradient(to bottom left, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0.7));
  width: 30vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: -7px 0 15px rgba(0,0,0,0.3);
  z-index: 1100;
  transform: translateX(35vw);
  transition: 300ms all ease-in-out;
  &.active{
    transform: translateX(0);
  }

  #menuImg{
    padding: 15% 5%;
    font-size: 13rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: rgb(167, 6, 6);
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  }

  #menu{
    margin: 0 10%;
    width: 80%;
  }
}
</style>
