---
title: Input
---
# 输入框

<ClientOnly>
  <input-demo-1></input-demo-1>
  <input-demo-2></input-demo-2>
</ClientOnly>


## Input Attributes

|    参数     |        说明        |      类型       |    可选值    | 默认值 |
| :---------: | :----------------: | :-------------: | :----------: | :----: |
|    value    |       绑定值       | string / number |      —       |   —    |
| placeholder |   输入框占位文本   |     String      |      —       |   —    |
|  readonly   | 原生属性，是否只读 |     Boolean     | true / false | false  |
|  disabled   |    是否禁用状态    |     Boolean     | true / false | false  |
|    type     |   原生 type 属性   |     String      |      —       |  text  |

## Input Events

| 事件名称 |          说明           | 回调参数 |
| :------: | :---------------------: | :------: |
|   blur   | 在 Input 失去焦点时触发 |  event   |
|  focus   | 在 Input 获得焦点时触发 |  event   |
|  change  |  在 Input 值改变时触发  |  value   |