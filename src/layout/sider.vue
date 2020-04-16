<template>
  <transition name="slide">
    <div class="wheel-sider" v-if="visible">
      <slot></slot>
      <g-button @click="visible=false">close</g-button>
    </div>
  </transition>
</template>

<script>
  import GButton from '../button/button'

  export default {
    name: "WheelSider",
    components: {GButton},
    data() {
      return {
        visible: true
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .wheel-sider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>