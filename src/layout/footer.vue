<template>
  <div class="wheel-footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WheelFooter"
  }
</script>

<style lang="scss" scoped>
  .wheel-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>