---
title: Button - 按钮
---
# 按钮

<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

```vue
<g-button>默认按钮</g-button>
<g-button icon="settings" icon-position="left">左侧按钮</g-button>
<g-button icon="settings" icon-position="right">右侧按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
```
## Attributes

|     参数     |      说明      |  类型   |         可选值          | 默认值 |
| :----------: | :------------: | :-----: | :---------------------: | :----: |
|     icon     |    图标类名    | String  |            —            |   —    |
| iconPosition |    图标位置    | String  |      left / right       |  left  |
|   loading    | 是否加载中状态 | Boolean |      true / false       | false  |
|   disabled   |  是否禁用状态  | Boolean |      true / false       | false  |
|     type     | 原生 type 属性 | String  | button / submit / reset | button |
