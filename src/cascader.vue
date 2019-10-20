<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items :items="source"
                      class="popover"
                      :selected="selected"
                      :height="popoverHeight"
                      @update:selected="onUpdateSelected"
      ></cascader-items>
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
      },
      popoverHeight: {
        type: String
      },
      selected: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        popoverVisible: false
      }
    },
    methods: {
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "_var";
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid #2d2d2d;
      height: 32px;
      width: 100px;
    }
    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      display: flex;
    }
  }
</style>

