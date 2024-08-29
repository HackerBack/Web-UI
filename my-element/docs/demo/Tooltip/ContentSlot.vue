<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <Tooltip placement="top">
    <template #content> multiple lines<br />second line </template>
    <Button>Top Center</Button>
  </Tooltip>
</template>
