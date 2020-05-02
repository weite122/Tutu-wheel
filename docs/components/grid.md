---
title: Grid - 网格
---
# 网格

<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

```vue
<g-row class="demoRow">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
</g-row>
```

<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

```vue
<g-row class="demoRow" gutter="10">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
```

<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>


```vue
<g-row class="demoRow" gutter="10">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8" offset="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6" offset="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6" offset="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4" offset="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4" offset="8">
        <div class="demoCol">4</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
        <div class="demoCol">2</div>
    </g-col>
</g-row>
```
## Row Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| gutter | 间隔 | Number |   —    |   —    |

## Col Attributes

|   参数   |        说明        |  类型  |            可选值             | 默认值 |
| :------: | :----------------: | :----: | :---------------------------: | :----: |
|   span   |   栅格占据的列数   | Number |               —               |   —    |
|  offset  | 栅格左侧的间隔格数 | Number |               —               |   —    |
|   ipad   |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
| narrowPc |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
|    pc    |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
|  widePc  |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |