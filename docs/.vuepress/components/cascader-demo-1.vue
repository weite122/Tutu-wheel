<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-cascader :source.sync="source" popover-height="200px"
                :selected.sync="selected" :load-data="loadData"/>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  function ajax(parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        result.forEach(node => {
          if (db.filter(item => item.parent_id === node.id).length > 0) {
            node.isLeaf = false
          } else {
            node.isLeaf = true
          }
        })
        success(result)
      }, 100)
    })
  }

  import Button from "../../../src/button/button";
  import Cascader from "../../../src/cascader/cascader";
  import db from "../../../tests/fixtures/db";

  export default {
    components: {
      "g-button": Button,
      "g-cascader": Cascader,
    },
    data() {
      return {
        selected: [],
        source: [],
        content: `<g-cascader :source.sync="source" popover-height="200px"
                :selected.sync="selected" :load-data="loadData"/>`
      };
    },
    created() {
      ajax(0).then(result => {
        console.log(result)
        this.source = result
      })
    },
    methods: {
      loadData({id}, updateSource) {
        ajax(id).then(result => {
          console.log(result)
          updateSource(result) // 回调:把别人传给我的函数调用一下
        })
      },
    }
  }
</script>
