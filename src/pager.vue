<template>
  <div class="wheel-pager" :class="{hide:hideIfOnePage === true && totalPage <= 1}">
    <span class="wheel-pager-nav prev" :class="{disabled:currentPage===1}"
          @click="onClickPage(currentPage-1)">
      <g-icon name="left"></g-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="wheel-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <g-icon class="wheel-pager-separator" name="dots"></g-icon>
      </template>
      <template v-else>
        <span @click="onClickPage(page)" class="wheel-pager-item other">{{page}}</span>
      </template>
    </template>
    <span class="wheel-pager-nav next" :class="{disabled: currentPage===totalPage}"
          @click="onClickPage(currentPage+1)">
      <g-icon name="right"></g-icon>
    </span>
  </div>
</template>

<script>
  import GIcon from './icon'

  export default {
    name: "WheelPager",
    components: {GIcon},
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      pages () {
        return unique([1, this.totalPage,
          this.currentPage,
          this.currentPage - 1, this.currentPage - 2,
          this.currentPage + 1, this.currentPage + 2]
          .filter((n) => n >= 1 && n <= this.totalPage)
          .sort((a, b) => a - b))
          .reduce((prev, current, index, array) => {
            prev.push(current)
            array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
            return prev
          }, [])
      }
    },
    methods: {
      onClickPage (n) {
        if (n >= 1 && n <= this.totalPage) {
          this.$emit('update:currentPage', n)
        }
      }
    }
  };

  function unique(array) {
    // return [...new Set(array)]
    const object = {};
    array.map(number => {
      object[number] = true;
    });
    return Object.keys(object).map(s => parseInt(s, 10));
  }
</script>

<style scoped lang="scss">
  @import "_var.scss";
  .wheel-pager { display: flex; justify-content: flex-start; align-items: center; user-select: none;
    $width: 20px; $height: 20px; $font-size: 12px;
    &.hide { display: none; }
    &-separator {
      width: $width;
      font-size: $font-size;
    }
    &-item {
      min-width: $width; height: $height;font-size: $font-size;
      border: 1px solid #e1e1e1; border-radius: $border-radius; padding: 0 4px; display: inline-flex; justify-content: center;
      align-items: center; margin: 0 4px; cursor: pointer;
      &.current, &:hover { border-color: $green; }
      &.current { cursor: default; }
    }
    &-nav {
      margin: 0 4px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer;
      background: $grey; height: $height; width: $width; border-radius: $border-radius; font-size: $font-size;
      &.disabled {
        cursor: default;
        svg { fill: darken($grey, 30%); }
      }
    }
  }
</style>
