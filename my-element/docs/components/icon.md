---
title: Icon | V-Element
description: Icon 组件的文档
---

# Icon 图标

Web UI 提供了一套常用的图标集合。

## 基础用法

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="Icon 组件的基础用法"></preview>

## 调整尺寸与颜色

除了默认的大小，组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。同时支持自定义颜色样式。
使用 `size` ,`color`属性额外配置尺寸与颜色。

<preview path="../demo/Icon/SizeAndColor.vue" title="调整尺寸与颜色" description="Icon 组件的尺寸与颜色调整"></preview>

## 调整图标样式

除了使用`color`属性额外配置图标颜色，还可以使用`type`属性调整图标样式。

<preview path="../demo/Icon/Type.vue" title="调整样式" description="Icon 组件的样式调整"></preview>

## Icon 属性

| 参数  | 说明     | 类型                                                                           | Default |
| ----- | -------- | ------------------------------------------------------------------------------ | ------- |
| size  | 尺寸     | `enum` - `'2xs''xs''sm''lg''xl''2xl''1x''2x''3x''4x''5x''6x''7x''8x''9x''10x'` | —       |
| type  | 类型     | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'`               | —       |
| color | 图标颜色 | `Pick<CSSProperties, 'color'>`                                                 | inherit |
