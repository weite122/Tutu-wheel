<template>
  <div class="wheel-sticky" ref="wrapper" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WheelSticky',
  data() {
    return {
      sticky: false
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.top()) {
        console.log('滚过了元素的顶部')
        this.sticky = true
      } else {
        console.log('没滚过元素顶部')
        this.sticky = false
      }
    })
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      }
    }
  },
  methods: {
    top() {
      let {top} = this.$refs.wrapper.getBoundingClientRect()
      return top + window.scrollY
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
    left: 0;
    width: 100%;
  }
}
</style>