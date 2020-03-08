<template>
  <div class="wheel-pager">
    <span v-for="page in pages">
      {{page}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "WheelPager",
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
    data() {
      let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
      let u = unique(pages.sort((a, b) => a - b))
      let u2 = u.reduce((prev, current, index, array) => {
        prev.push(current)
        array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
        return prev
      }, [])
      return {
        pages: u2
      }
    }
  }

  function unique(array) {
    // return [...new Set(array)]
    const object = {}
    array.map((number) => {
      object[number] = true
    })
    return Object.keys(object).map((s) => parseInt(s, 10))
  }
</script>

<style scoped lang="scss">

</style>