---
title: Slides - 轮播图
sidebarDepth: 2
---
# Slides 轮播图 <Badge text="beta" type="warn"/>

在有限空间内，循环播放同一类型的图片、文字等内容

<ClientOnly>
  <slides-demo-1></slides-demo-1>
</ClientOnly>

::: tip
- 轮播图大小根据用户的box自动适配
- 同时支持移动端的左右滑动
- 自动轮播模式下，鼠标移入时停止轮播，移出恢复轮播
:::

## Slides Attributes

|     参数      |      说明       |      类型       |    可选值    | 默认值 |
| :-----------: | :-------------: | :-------------: | :----------: | :----: |
|   selected    | 当前选中项 name | String / Number |      —       | 第一项 |
|   autoPlay    |  是否自动播放   |     Boolean     | true / false | false  |
| autoPlayDelay |    轮播间隔     |     Number      |      —       |  3000  |

## SlidesItem Attributes

| 参数 |   说明   |  类型  | 可选值 | 默认值 |
| :--: | :------: | :----: | :----: | :----: |
| name | 当前项的标识 | String |   —    |   —    |
