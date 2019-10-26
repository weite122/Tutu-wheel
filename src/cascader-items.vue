<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <icon class="icon" v-if="rightArrowVisible(item)" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <wheel-cascader-items
        :items="rightItems"
        :heigth="height"
        :level="level+1"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></wheel-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: "WheelCascaderItems",
    components: {Icon},
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      loadData: {
        type: Function
      },
      level: {
        type: Number,
        default: 0
      }
    },
    update() {
      // console.log(JSON.stringify(this.items))
    },
    computed: {
      rightItems() {
        if (this.selected[this.level]) {
          let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
          if (selected && selected[0].children && selected[0].children.length > 0) {
            return selected[0].children
          }
        }
      }
    },
    methods: {
      rightArrowVisible(item) {
        return this.loadData ? !this.isLeaf: item.children
      },
      onClickLabel(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "_var";
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
      height: 100%;
      padding: .3em 0;
      overflow: auto;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
      overflow: auto;
    }
    .label {
      padding: .5em 1em;
      display: flex;
      cursor: pointer;
      align-items: center;
      &:hover {
        background: $grey;
      }
      > .name {
        margin-right: 1em;
        user-select: none;
      }
      .icon {
        margin-left: auto;
        transform: scale(0.5);
      }
    }
  }

</style>