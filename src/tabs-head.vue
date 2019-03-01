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
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) =>{
        let {width, left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      })
    }
  }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $border-color: #e4e7ed;
    .tabs-head {
        display: flex;
        height:$tab-height;
        justify-content: flex-start;
        background: #f5f7fa;
        position: relative;
        border: 1px solid $border-color;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid #409EFF;
            transition: all .3s;
        }
        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>