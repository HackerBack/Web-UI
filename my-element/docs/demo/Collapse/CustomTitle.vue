<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'

const openedValue = ref(['a'])
</script>
<template>
  <Collapse v-model="openedValue">
    <CollapseItem name="a">
      <template #title>
        <div>nice title</div>
      </template>
      <div>this is content a aaa</div>
    </CollapseItem>
    <CollapseItem name="b" title="nice title b item b">
      <div>this is bbbbb test</div>
    </CollapseItem>
  </Collapse>
</template>
