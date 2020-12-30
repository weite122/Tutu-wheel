<template>
  <div class="wheel-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div ref="child" class="wheel-scroll" :style="{transform: `translateY(${this.contentY}px)`}">
      <slot></slot>
    </div>
    <div class="wheel-scroll-track" v-show="scrollBarVisible">
      <div class="wheel-scroll-bar" ref="bar" @mousedown="onMouseDownScrollBar" @selectstart="onSelectScrollBar">
        <div class="wheel-scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'WheelScroll',
  data() {
    return {
      scrollBarVisible: false,
      isScrolling: false,
      startPosition: undefined,
      endPosition: undefined,
      scrollBarY: 0,
      contentY: 0,
      barHeight: undefined,
      parentHeight: undefined,
      childHeight: undefined
    }
  },
  mounted() {
    document.addEventListener('mousemove', (e) => {
      this.onMouseMoveScrollBar(e)
    })
    document.addEventListener('mouseup', (e) => {
      this.onMouseUpScrollBar(e)
    })
    const parent = this.$refs.parent
    const child = this.$refs.child
    let {height: childHeight} = child.getBoundingClientRect()
    let {height: parentHeight} = parent.getBoundingClientRect()
    this.parentHeight = parentHeight
    this.childHeight = childHeight
    let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
    borderTopWidth = parseInt(borderTopWidth)
    borderBottomWidth = parseInt(borderBottomWidth)
    paddingTop = parseInt(paddingTop)
    paddingBottom = parseInt(paddingBottom)
    let maxHeight = childHeight - parentHeight + (borderTopWidth + borderBottomWidth + paddingBottom + paddingTop)

    parent.addEventListener('wheel', (e) => {
      if (e.deltaY > 20) {
        this.contentY -= 20 * 3
      } else if (e.deltaY < 20) {
        this.contentY -= -20 * 3
      } else {
        this.contentY -= e.deltaY * 3
      }

      if (this.contentY > 0) {
        this.contentY = 0
      } else if (this.contentY < -maxHeight) {
        this.contentY = -maxHeight
      } else {
        e.preventDefault()//防止抖动
      }
      // child.style.transform = `translateY(${this.contentY}px)`
      this.updateScrollBar(parentHeight, childHeight, this.contentY)
    })
    this.updateScrollBar(parentHeight, childHeight, this.contentY)
  },
  methods: {
    updateScrollBar(parentHeight, childHeight, translateY) {
      let barHeight = parentHeight * parentHeight / childHeight
      this.barHeight = barHeight
      let bar = this.$refs.bar
      bar.style.height = barHeight + 'px'
      let y = parentHeight * translateY / childHeight
      bar.style.transform = `translateY(${-y}px)`
      this.scrollBarY = -y
    },
    onMouseEnter() {
      this.scrollBarVisible = true
    },
    onMouseLeave() {
      this.scrollBarVisible = false
      this.isScrolling = false
    },
    onMouseDownScrollBar(e) {
      this.isScrolling = true
      let {screenX, screenY} = e
      this.startPosition = {x: screenX, y: screenY}
    },
    onMouseMoveScrollBar(e) {
      if (!this.isScrolling) {
        return
      }
      let {screenX, screenY} = e
      let maxScrollHeight = this.parentHeight - this.barHeight
      this.endPosition = {x: screenX, y: screenY}
      let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
      this.scrollBarY = parseInt(this.scrollBarY) + delta.y
      if (this.scrollBarY < 0) {
        this.scrollBarY = 0
      } else if (this.scrollBarY > maxScrollHeight) {
        this.scrollBarY = maxScrollHeight
      }
      this.contentY = -(this.childHeight * this.scrollBarY / this.parentHeight)
      this.startPosition = this.endPosition
      this.$refs.bar.style.transform = `translate(0px,${this.scrollBarY}px)`
    },
    onMouseUpScrollBar(e) {
      this.isScrolling = false
    },
    onSelectScrollBar(e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped lang="scss">
.wheel-scroll {
  transition: transform 0.05s ease;
  &-wrapper {
    overflow: hidden;
    border: 1px solid #2a8a5e;
    position: relative;
  }
  &-track {
    position: absolute;
    top: 0;
    right: 0;
    width: 14px;
    height: 100%;
    background: #FAFAFA;
    border-left: 1px solid #E8E7E8;
    opacity: 0.9;
  }
  &-bar {
    position: absolute;
    top: -1px;
    left: 50%;
    height: 40px;
    width: 8px;
    margin-left: -4px;
    padding: 4px 0;
    &-inner {
      height: 100%; border-radius: 4px; background: #c2c2c2;
      &:hover {
        background: #7d7d7d;
      }
    }
  }

}
</style>