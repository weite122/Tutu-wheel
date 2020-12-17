<template>
  <div class="wheel-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="wheel-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WheelSticky',
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sticky: false,
      left: undefined,
      width: undefined,
      height: undefined,
      top: undefined,
    }
  },
  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
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
    _windowScrollHandler() {
      let top = this.getTop()
      if (window.scrollY > top - this.distance) {
        let {height, width, left} = this.$refs.wrapper.getBoundingClientRect()
        this.height = height + 'px'
        this.left = left + 'px'
        this.width = width + 'px'
        this.top = this.distance + 'px'
        this.sticky = true
      } else {
        this.height = undefined
        this.left = undefined
        this.width = undefined
        this.top = undefined
        this.sticky = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wheel-sticky {
  &.sticky {
    position: fixed;
  }
}
</style>