---
title: Toast - 提示框
---

# Toast

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

```vue
<div>
    <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
</div>
```


<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>



```vue
<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>
```


<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

```vue
<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>
```
## Attributes

|   参数    |            说明             |  类型  |        可选值         | 默认值 |
| :-------: | :-------------------------: | :----: | :-------------------: | :----: |
|  message  |            文本             | String |           —           |   —    |
| autoClose | 是否自动关闭,可设置关闭时间 |   —    |     Number/false      |  2000  |
| position  |        设置弹出位置         | String | top / bottom / middle |  top   |
| closeButton  |        设置按钮的文本和事件         | Object | — |  —   |