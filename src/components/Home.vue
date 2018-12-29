<template>
    <div id="app">
        <h1>Landing page</h1>
        <nameday></nameday>
    </div>
</template>
<script>
import Nameday from './partials/Nameday.vue'

export default {
  components: {
    'nameday': Nameday,
  }
  
}
</script>
