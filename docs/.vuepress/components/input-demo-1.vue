<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-input value="中文"></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" readonly></g-input>

    </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: {GInput}
  }
</script>
