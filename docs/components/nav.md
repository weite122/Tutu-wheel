---
title: Nav - 导航菜单
---

# Menu 导航菜单 

为网站提供导航功能的菜单。

## 顶栏

适用广泛的基础用法。

<ClientOnly>
<nav-demo-1 />
</ClientOnly>

```vue
<g-nav :selected.sync="selected">
  <g-nav-item name="home">首页</g-nav-item>
  <g-sub-nav name="about">
    <template slot="title">关于</template>
    <g-nav-item name="culture">企业文化</g-nav-item>
    <g-nav-item name="developers">开发团队</g-nav-item>
    <g-sub-nav name="contacts">
      <template slot="title">联系方式</template>
      <g-nav-item name="wechat">微信</g-nav-item>
      <g-nav-item name="qq">QQ</g-nav-item>
      <g-sub-nav name="phone">
        <template slot="title">手机</template>
        <g-nav-item name="cm">移动</g-nav-item>
        <g-nav-item name="cu">联通</g-nav-item>
        <g-nav-item name="cn">电信</g-nav-item>
      </g-sub-nav>
    </g-sub-nav>
  </g-sub-nav>
  <g-nav-item name="hire">招聘</g-nav-item>
</g-nav>
```

## 侧栏

垂直菜单，可内嵌子菜单。


<ClientOnly>
<nav-demo-2 />
</ClientOnly>

```vue
<g-nav :selected.sync="selected" vertical>
  <g-nav-item name="home">首页</g-nav-item>
  <g-sub-nav name="about">
    <template slot="title">关于</template>
    <g-nav-item name="culture">企业文化</g-nav-item>
    <g-nav-item name="developers">开发团队</g-nav-item>
    <g-sub-nav name="contacts">
      <template slot="title">联系方式</template>
      <g-nav-item name="wechat">微信</g-nav-item>
      <g-nav-item name="qq">QQ</g-nav-item>
      <g-sub-nav name="phone">
        <template slot="title">手机</template>
        <g-nav-item name="cm">移动</g-nav-item>
        <g-nav-item name="cu">联通</g-nav-item>
        <g-nav-item name="cn">电信</g-nav-item>
      </g-sub-nav>
    </g-sub-nav>
  </g-sub-nav>
  <g-nav-item name="hire">招聘</g-nav-item>
</g-nav>
```


## Menu Attributes

|   参数   |        说明        |  类型   |         可选值          |  默认值  |
| :------: | :----------------: | :-----: | :---------------------: | :------: |
|   mode   |        模式        | Boolean |   horizontal/vertical   | vertical |
| selected | 被选中的 menu-item | String  |            —            |    —     |
| loading  |   是否加载中状态   | Boolean |      true / false       |  false   |
| disabled |    是否禁用状态    | Boolean |      true / false       |  false   |
|   type   |   原生 type 属性   | String  | button / submit / reset |  button  |

## MenuItem/SubItem Attributes

| 参数 |   说明   |  类型  | 可选值 | 默认值 |
| :--: | :------: | :----: | :----: | :----: |
| name | 唯一标识 | String |  必填  |   —    |

## Menu Methods

|       事件       |        说明         |     参数      |
| :--------------: | :-----------------: | :-----------: |
| @update:selected | selected 改变时触发 | 被选中的 item |

