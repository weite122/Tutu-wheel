<template>
  <div>
    <div style="margin: 20px;">
      <g-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
               @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
        <g-table-column text="姓名" field="name" :width="200">
          <template slot-scope="props">
            <a :href="`/users/${props.value}`">{{props.value}}</a>
          </template>
        </g-table-column>
        <g-table-column text="分数" field="score"></g-table-column>
        <template slot-scope="xxx">
          <g-button size="small" @click="edit(xxx.item)">编辑</g-button>
          <g-button size="small" @click="view(xxx.item)">查看</g-button>
        </template>
      </g-table>
    </div>
  </div>
</template>
<script>
import GTable from './table/table'
import GTableColumn from './table/table-column'
import GButton from './button/button'
export default {
  name: "demo",
  components: {
    GTable,
    GTableColumn,
    GButton
  },
  data() {
    return {
      selected: [],
      loading: false,
      // columns: [
      //   {text: '姓名', field: 'name', width: 100},
      //   {text: '分数', field: 'score'},
      // ],
      orderBy: {
        name: 'asc',
        score: 'desc'
      },
      dataSource: [
        {id: 1, name: '小红', score: 100, description: 'xxxxxxxxx xxxxxxxxxxx'},
        {id: 2, name: '小明', score: 60, description: 'xxxx xxxxxxxxxxx'},
        {id: 3, name: '小强', score: 80},
        {id: 4, name: '张三', score: 90},
        {id: 5, name: '李四', score: 80},
        {id: 6, name: '王五', score: 80},
        {id: 7, name: '蜘蛛侠', score: 70},
        {id: 8, name: '蝙蝠侠', score: 80},
        {id: 9, name: '小红', score: 100},
        {id: 10, name: '小明', score: 60},
        {id: 11, name: '小强', score: 80},
        {id: 12, name: '张三', score: 90},
        {id: 13, name: '李四', score: 80},
        {id: 14, name: '王五', score: 80},
        {id: 15, name: '蜘蛛侠', score: 70},
        {id: 16, name: '超人', score: 80},
        {id: 17, name: '李四', score: 80},
        {id: 18, name: '王五', score: 80},
        {id: 19, name: '蜘蛛侠', score: 70},
        {id: 20, name: '蝙蝠侠', score: 80},
      ]
    }
  },
  methods: {
    edit(item) {
      alert(`开始编辑${item.id}`)
    },
    view(item) {
      alert(`开始查看${item.id}`)
    },
    x() {
      this.loading = true
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
        this.loading = false
      }, 500)
    }
  }
};
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
img {max-width: 100%;}
button:nth-child(1) {
  margin-right: 5px;
}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
a{
  text-decoration: none;
  color:#3eaf7c;
}
</style>