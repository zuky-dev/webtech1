  <template>
    <header>
        <h1>HEADZ</h1>
        <hr>
        <navigation :node="$router.options.routes"></navigation>
        <hr>
    </header>
</template>
<script>
import Navigation from "./Navigation";

export default {
  components: {
    'navigation': Navigation
  },
  data () {
    return {
    }
  }
}
</script>