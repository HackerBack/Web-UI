---
title: Collapse | V-Element
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域。

## 基础用法

可同时展开多个面板，面板之间不影响。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="Collapse 组件的手风琴效果"></preview>

## 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

<preview path="../demo/Collapse/CustomTitle.vue" title="自定义面板标题" description="Collapse 组件自定义面板标题"></preview>

## Collapse 属性

| 参数                | 说明                                    | 类型                         | 默认值  |
| ------------------- | --------------------------------------- | ---------------------------- | ------- |
| model-value/v-model | 当前激活的面板(绑定值类型需要为为array) | `array (non-accordion mode)` | `-`     |
| accordion           | 是否手风琴模式                          | `boolean`                    | `false` |

## Collapse 事件

| 事件名 | 说明                                                 | 回调参数                                   |
| ------ | ---------------------------------------------------- | ------------------------------------------ |
| change | 当前激活面板改变时触发(参数 activeNames 类型为array) | `(activeNames: array (non-accordion mode)` |

## Collapse 插槽

| 插槽名 | 描述           | 子标签          |
| ------ | -------------- | --------------- |
| `-`    | 自定义默认内容 | `Collapse Item` |

## Collapse Item 属性

| 参数     | 说明       | 类型            | 默认值 |
| -------- | ---------- | --------------- | ------ |
| name     | 唯一标志符 | `string/number` | `-`    |
| title    | 面板标题   | `string`        | `-`    |
| disabled | 是否禁用   | `boolean`       | `-`    |

## Collapse Item 插槽

| 插槽名  | 描述                   |
| ------- | ---------------------- |
| `-`     | Collapse Item 内容     |
| `title` | Collapse Item 标题内容 |
