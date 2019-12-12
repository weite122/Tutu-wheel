<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WheelNavItem",
    inject: ['root'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    created() {
      this.root.addItem(this)
    },
    data() {
      return {
        selected: false
      }
    },
    methods: {
      onClick() {
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "_var.scss";
    .g-nav-item {
    padding: 10px 20px;
    position: relative;
    &.selected {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
  }
  .g-sub-nav .g-nav-item {
    &.selected {
      color: $color;
      &::after {
        display: none;
      }
    }
  }
</style>


