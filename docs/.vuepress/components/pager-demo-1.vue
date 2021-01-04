<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>

  </div>
</template>

<script>
  import GPager from '../../../src/pager/pager'

  export default {
    components: {GPager},
    data() {
      return {
        currentPage: 1
      }
    }
  }
</script>
