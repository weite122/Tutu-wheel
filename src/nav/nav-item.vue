<template>
  <div class="g-nav-item" :class="{selected, vertical}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WheelNavItem",
    inject: ['root', 'vertical'],
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
        this.root.namePath = []
        this.$parent.updateNamePath && this.$parent.updateNamePath()
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
    &:not(.vertical) {
      &.selected {
        background: $grey;
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
    &.vertical {
      &.selected {
        color: $blue;
      }
    }
  }
  .g-sub-nav .g-nav-item:not(.vertical) {
    &.selected {
      color: $color;
      &::after {
        display: none;
      }
    }
  }
</style>

