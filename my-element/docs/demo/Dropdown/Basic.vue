<template>
  <Dropdown :menu-options="options">
    <span class="el-dropdown-link"> Dropdown List </span>
  </Dropdown>
</template>

<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'

const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  display: flex;
  align-items: center;
}
</style>
