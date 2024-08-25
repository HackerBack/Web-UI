---
title: Select | V-Element
description: Select 组件的文档
---
## 选择器

当选项过多时，使用下拉菜单展示并选择内容。

#### 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。

<preview path="../demo/Select/Basic.vue" title="基础选择器" description="Select 基础选择器"></preview>

#### 自定义模板

你可以自定义如何来渲染每一个选项，使用`renderLabel`属性，它接受一个回调函数，返回vNode类型。

<preview path="../demo/Select/CustomRender.vue" title="基础选择器" description="Select 基础选择器"></preview>

#### 筛选选项

可以利用筛选功能快速查找选项。

添加`filterable`属性即可启用搜索功能，默认情况下，Select会找出所有label属性包含输入值的选项，如果希望使用其他的搜索逻辑，可以通过传入一个`filter-method`来实现，`filter-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值

<preview path="../demo/Select/Filterable.vue" title="基础选择器" description="Select 基础选择器"></preview>


