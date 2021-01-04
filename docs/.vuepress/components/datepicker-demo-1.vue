<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-date-picker :value="d" @input="d=$event" :scope="scope"></g-date-picker>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>

import DatePicker from "../../../src/datepicker/datepicker";

export default {
  components: {
    "g-date-picker": DatePicker,
  },
  data() {
    return {
      d: new Date(),
      scope: [new Date(1900, 1), new Date(2120, 8)],
      content: `<g-date-picker :value="d" @input="d=$event" :scope="scope"></g-date-picker>`
    };
  }

}
</script>


<style lang="scss" scoped>

</style>