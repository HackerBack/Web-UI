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


