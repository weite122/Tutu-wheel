<template>
  <div class="page">
    <g-date-picker></g-date-picker>
    <div>其他内容</div>
  </div>

</template>
<script>
import GDatePicker from './datepicker/datepicker'

export default {
  name: "demo",
  components: {
    GDatePicker
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
.page {
  padding: 100px;
}
</style>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}

img {max-width: 100%;}


html {
  --font-size: 14px;
}

body {
  font-size: var(--font-size);
}
</style>