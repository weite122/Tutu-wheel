---
title: Grid
---
# 网格

<ClientOnly>
  <grid-demo-1></grid-demo-1>
  <grid-demo-2></grid-demo-2>
  <grid-demo-3></grid-demo-3>
</ClientOnly>


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