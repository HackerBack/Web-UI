<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue'
import type { NameType } from './types'
import { collapseContextKey } from './types';
defineOptions({
  name: 'VKCollapse'
})
const activeNames = ref<NameType[]>([])
const handleItemClick = (item: NameType) => {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
        // 存在，删除数组中对应的一项
        activeNames.value.splice(index, 1)
    } else {
        // 不存在，插入对应的name
        activeNames.value.push(item)
    }
}
provide(collapseContextKey, {
    activeNames,
    handleItemClick
})
</script>
