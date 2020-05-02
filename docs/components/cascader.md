---
title: Cascader - 级联
---

# Cascader 级联组件 

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。



<ClientOnly>
<cascader-demo-1 />
</ClientOnly>



## Attributes

|      参数      |      说明      |   类型   | 可选值 | 默认值 |
| :------------: | :------------: | :------: | :----: | :----: |
|     source     |     数据源     |  Array   |   —    |   —    |
|    selected    |  选中项绑定值  |  Array   |   —    |   —    |
| popover-height | 设置弹出层高度 |  String  |   —    | 200px  |
|   load-data    |    异步函数    | Function |   —    |   —    |