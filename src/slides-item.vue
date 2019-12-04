<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: undefined,
      }
    },
    computed: {
      visible(){
        return this.selected === this.name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;

  }
  .slide-enter-active, .slide-leave-active {
    transition: all 3s;
  }
  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-leave {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>