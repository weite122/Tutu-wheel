<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>
  import CascaderItems from './cascader-items'

  export default {
    name: "WheelCascader",
    components: {CascaderItems},
    props: {
      source: {
        type: Array
      }
    },
    data() {
      return {
        popoverVisible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "_var";
  .cascader {
    .trigger {
      border: 1px solid #2d2d2d;
      height: 32px;
      width: 100px;
    }
    .popover {
      border: 2px solid #2d2d2d;
      height: 200px;
      display: flex;
      .label {
        white-space: nowrap;
      }
    }
  }
</style>

