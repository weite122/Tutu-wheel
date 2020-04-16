<template>
  <div class="wheel-header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WheelHeader"
  }
</script>

<style lang="scss" scoped>
  .wheel-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>