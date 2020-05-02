---
title: Layout - 布局
---
# 布局

<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

```vue
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background: #3eaf7c;">
        header
    </g-header>
    <g-content style="height: 100px; background:#2a8a5e;">
        content
    </g-content>
    <g-footer style="height: 50px; background:#3eaf7c;">
        footer
    </g-footer>
</g-layout>
```

<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>

```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:#3eaf7c;">
        header
    </g-header>
    <g-layout>
        <g-sider style="height: 100px; background:#66CC99; width:200px; color: black;">
            sider
        </g-sider>
        <g-content style="height: 100px; background:#2a8a5e;">
            content
        </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:#3eaf7c;">
        footer
    </g-footer>
</g-layout>
```
<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-sider style=" background:#66CC99; width:200px; color: black;">
        sider
    </g-sider>
    <g-layout>
        <g-header style="height: 50px; background: #3eaf7c;">
            header
        </g-header>
        <g-content style="height: 100px; background:#2a8a5e;">
            content
        </g-content>
        <g-footer style="height: 50px; background:#3eaf7c;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
```
## Layout Attributes

|   参数    |   说明   |  类型  |        可选值         | 默认值 |
| :-------: | :------: | :----: | :-------------------: | :----: |
| direction | 排列方向 | String | horizontal / vertical |   —    |

## Header Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| height | 高度 | String |   —    |   —    |

## Sider Attributes

| 参数  | 说明 |  类型  | 可选值 | 默认值 |
| :---: | :--: | :----: | :----: | :----: |
| width | 宽度 | String |   —    |   —    |

## Footer Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| height | 高度 | String |   —    |   —    |