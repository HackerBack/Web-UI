<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <Tooltip placement="top" trigger="click">
    <template #content> multiple lines<br />second line </template>
    <Button>Click</Button>
  </Tooltip>
  <br /><br />
  <Tooltip placement="top" trigger="hover">
    <template #content> multiple lines<br />second line </template>
    <Button>Hover</Button>
  </Tooltip>
</template>
