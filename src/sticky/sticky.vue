<template>
  <div class="wheel-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="wheel-sticky" :class="classes" :style="{left, width}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WheelSticky',
  data() {
    return {
      sticky: false,
      left: undefined,
      width: undefined,
      height: undefined,
    }
  },
  mounted() {
    let top = this.getTop()
    this.windowScrollHandler = this._windowScrollHandler.bind(this, top)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      }
    }
  },
  methods: {
    getTop() {
      let {top} = this.$refs.wrapper.getBoundingClientRect()
      return top + window.scrollY
    },
    _windowScrollHandler(top) {
      if (window.scrollY > top) {
        let {height, width, left} = this.$refs.wrapper.getBoundingClientRect()
        this.height = height + 'px'
        this.left = left + 'px'
        this.width = width + 'px'
        this.sticky = true
      } else {
        this.sticky = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wheel-sticky {
  &.sticky {
    background: #2a8a5e;
    position: fixed;
    top: 0;
  }
}
</style>