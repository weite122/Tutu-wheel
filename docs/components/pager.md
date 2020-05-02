---
title: Pager - 分页
---

# Pager 分页 


<ClientOnly>
<pager-demo-1/>
</ClientOnly>

```vue
<g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
```

## Attributes

|     参数      |        说明         |  类型   |    可选值    | 默认值 |
| :-----------: | :-----------------: | :-----: | :----------: | :----: |
|   totalPage   |       总页数        | Number  |      —       |  必填  |
|  currentPage  |      当前页码       | Number  |      —       |  必填  |
| hideIfOnePage | 当前页码为 1 时隐藏 | Boolean | true / false |  true  |

