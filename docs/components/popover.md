---
title: Popover - 弹出框
---

# 弹出框

<ClientOnly>
  <popover-demo-1>
  </popover-demo-1>
</ClientOnly>

```vue
<g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="bottom">
    <g-button>下方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="left">
    <g-button>左边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="right">
    <g-button>右边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
```



<ClientOnly>
  <popover-demo-2>
  </popover-demo-2>
</ClientOnly>



```vue
<g-popover trigger="hover">
    <g-button>上方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="bottom" trigger="hover">
    <g-button>下方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="left" trigger="hover">
    <g-button>左边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="right" trigger="hover">
    <g-button>右边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
```

## Attributes

|   参数   |   说明   |  类型  |           可选值            | 默认值 |
| :------: | :------: | :----: | :-------------------------: | :----: |
| trigger  | 触发方式 | String |         click/hover         | click  |
| position | 出现位置 | String | left / right / top / bottom |  top   |