<template>
  <div style="margin: 20px auto">
    <g-pager :total-page="20" :current-page="3"></g-pager>
  </div>
</template>


<script>
  import GPager from './pager'

  export default {
    name: "demo",
    components: {GPager}
  }
</script>
<style scoped lang="scss">
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>