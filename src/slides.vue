<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$children);
      console.log(this.$refs.window.children);
    }
  }
</script>

<style lang="scss" scoped>
  .g-slides {
    &-window {
    }
  }
</style>