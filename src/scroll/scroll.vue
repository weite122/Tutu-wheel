<template>
  <div class="wheel-scroll-wrapper" ref="parent">
    <div ref="child" class="wheel-scroll">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'WheelScroll',
  mounted() {
    const parent = this.$refs.parent
    const child = this.$refs.child
    let translateY = 0
    let {height: childHeight} = child.getBoundingClientRect()
    let {height: parentHeight} = parent.getBoundingClientRect()
    let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
    borderTopWidth = parseInt(borderTopWidth)
    borderBottomWidth = parseInt(borderBottomWidth)
    paddingTop = parseInt(paddingTop)
    paddingBottom = parseInt(paddingBottom)
    let maxHeight = childHeight - parentHeight + (borderTopWidth + borderBottomWidth + paddingBottom + paddingTop)

    parent.addEventListener('wheel', (e) => {
      if (e.deltaY > 20) {
        translateY -= 20 * 3
      } else if (e.deltaY < 20) {
        translateY -= -20 * 3
      } else {
        translateY -= e.deltaY * 3
      }

      if (translateY > 0) {
        translateY = 0
      } else if (translateY < -maxHeight) {
        translateY = -maxHeight
      } else {
        e.preventDefault()//防止抖动
      }
      child.style.transform = `translateY(${translateY}px)`
    })
  }
}
</script>

<style scoped lang="scss">
.wheel-scroll {
  transition: transform 0.05s ease;
  &-wrapper {
    overflow: hidden;
    border: 1px solid #2a8a5e;
  }


}
</style>