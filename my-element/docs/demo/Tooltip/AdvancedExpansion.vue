<script setup>
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'

const disabled = ref(false)
</script>

<template>
  <Tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom">
    <Button @click="disabled = !disabled"
      >click to {{ disabled ? 'active' : 'close' }} tooltip function</Button
    >
  </Tooltip>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.expand-fade-leave-active {
  margin-left: 20px;
  opacity: 0;
}
</style>
