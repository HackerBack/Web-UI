---
title: Tooltip | V-Element
description: Tooltip 组件的文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：[方向]-[对齐位置]；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 触发方式变更

支持`click`与`hover`两种触发方式

使用 `trigger` 属性来进行设置。

<preview path="../demo/Tooltip/Trigger.vue" title="触发方式变更" description="Tooltip 组件的触发方式变更"></preview>

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 slot `content`，替代`tooltip`中的`content`属性。

<preview path="../demo/Tooltip/ContentSlot.vue" title="更多内容的文字提示" description="Tooltip 组件的更多内容的文字提示"></preview>

## 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为fade-in-linear。

如果需要关闭 `tooltip` 功能，`disabled` 属性可以满足这个需求， 你只需要将其设置为 `true`。

事实上，`Tooltip` 是一个基于 ElPopper 的扩展，您可以使用 ElPopper 中允许的任何属性。

<preview path="../demo/Tooltip/AdvancedExpansion.vue" title="高级扩展" description="Tooltip 组件的高级扩展"></preview>

## 手动触发

除了click触发与hover触发两种方式，还可以通过`manual`属性实现手动触发。

<preview path="../demo/Tooltip/Manual.vue" title="手动触发" description="Tooltip 组件的手动触发"></preview>

## Tooltip 属性

| 参数          | 说明                                   | 类型                                                                                                                                         | Default  |
| ------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| contend       | 显示的内容，也可被 `slot#content` 覆盖 | `string`                                                                                                                                     | —        |
| trigger       | 触发方式                               | `enum` - `'hover' \| 'click'`                                                                                                                | `hover`  |
| disabled      | Tooltip 组件是否禁用                   | `boolean`                                                                                                                                    | false    |
| placement     | Tooltip 组件出现的位置                 | `enum` - `'top'/'top-start'/'top-end'/'bottom'/'bottom-start'/'bottom-end'/'left'/'left-start'/'left-end'/'right'/'right-start'/'right-end'` | `bottom` |
| manual        | 手动触发                               | `boolean`                                                                                                                                    | false    |
| popperOptions | popper.js参数                          | `Object`                                                                                                                                     | -        |
| transition    | 动画名称                               | `string`                                                                                                                                     | `fade`   |
| openDelay     | 延时开启时间                           | `number`                                                                                                                                     | `0`      |
| closeDelay    | 延时关闭时间                           | `number`                                                                                                                                     | `0`      |

## Tooltip 事件

| 事件名         | 说明                        | 回调参数           |
| -------------- | --------------------------- | ------------------ |
| visible-change | 当Tooltip显示与关闭时触发   | `(value: boolean)` |
| click-outside  | 当点击Tooltip外侧区域时触发 | `(value: boolean)` |

## Tooltip 插槽

| 插槽名    | 说明                      |
| --------- | ------------------------- |
| `-`       | Tooltip 触发 & 引用的元素 |
| `content` | 自定义内容                |
