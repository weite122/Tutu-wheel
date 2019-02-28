<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "WheelTabsHead",
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (item, vm) =>{
        console.log(vm.$el)
      })
    }
  }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height:$tab-height;
        justify-content: flex-start;
        background: #f5f7fa;
        >.line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid #e4e7ed;
        }
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>