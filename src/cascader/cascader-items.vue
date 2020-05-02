<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <wheel-cascader-items
        :items="rightItems"
        :heigth="height"
        :level="level+1"
        :loading-item="loadingItem"
        :load-data="loadData"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></wheel-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'

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
      loadingItem: {
        type: Object,
        default: () => ({})
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
        return this.loadData ? !this.isLeaf : item.children
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
  @import "_var.scss";
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
      white-space: nowrap;
      &:hover {
        background: $grey;
      }
      > .name {
        margin-right: 1em;
        user-select: none;
      }
      .icons {
        margin-left: auto;
        .next {
          transform: scale(0.5);
        }
        .loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }

</style>