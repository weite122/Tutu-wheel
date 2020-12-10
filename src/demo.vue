<template>
  <div>
    {{ selected }}
    <div style="padding: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered @changeItem="x"></g-table>
    </div>
    <div style="padding: 20px;">
      <g-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></g-table>
    </div>
  </div>
</template>
<script>
import GTable from './table'

export default {
  name: "demo",
  components: {
    GTable
  },
  data() {
    return {
      selected: [],
      columns: [
        {text: '姓名', field: 'name'},
        {text: '分数', field: 'score'},
      ],
      dataSource: [
        {id: 1, name: '小红', score: 100},
        {id: 2, name: '小明', score: 60},
        {id: 3, name: '小强', score: 80},
        {id: 4, name: '张三', score: 90},
        {id: 5, name: '李四', score: 80},
        {id: 6, name: '王五', score: 80},
        {id: 7, name: '蜘蛛侠', score: 70},
        {id: 8, name: '蝙蝠侠', score: 80},
      ]
    }
  },
  methods: {
    x(object) {
      let {selected, item, index} = object
      if (selected) {
        this.selected.push(item)
      } else {
        let index = this.selected.indexOf(item)
        this.selected.splice(index, 1)
      }
      // console.log('selected',selected);
      // console.log('item',item);
      // console.log('index',index);
    }
  }
};
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}

img {max-width: 100%;}

html {
  --font-size: 14px;
}

body {
  font-size: var(--font-size);
}
</style>