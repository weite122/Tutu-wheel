<template>
    <div class="cascader">
        <div class="trigger"></div>
        <slot></slot>
    </div>
    <div class="popover">
        <div class="level-1"></div>
        <div class="level-2"></div>
        <div class="level-3"></div>  
    </div>
</template>

<script>
  export default {
    name: "WheelCascader"
  }
</script>

<style lang="scss" scoped>
    @import "_var";
</style>