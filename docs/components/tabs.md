---
title: Tabs - 标签
---
# 标签

<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>


```vue
<g-tabs :selected="selected">
    <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```

## Tabs Attributes

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 选中的值 | String |   —    |   —    |

## TabsPane Attributes

| 参数 |  说明  |  类型  | 可选值 | 默认值 |
| :--: | :----: | :----: | :----: | :----: |
| name | 标识符 | String |   —    |   —    |

## TabsItem Attributes

|   参数   |   说明   |  类型   |   可选值   | 默认值 |
| :------: | :------: | :-----: | :--------: | :----: |
|   name   |  标识符  | String  |     —      |   —    |
| disabled | 是否禁用 | Boolean | true/false | false  |