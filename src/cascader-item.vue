<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <wheel-cascader-item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :sourceItem="item"
    ></wheel-cascader-item>
  </div>
</template>

<script>
  export default {
    name: "WheelCascaderItem",
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascaderItem{
    border: 1px solid #4e6e8e;
    margin: 10px;
  }

</style>