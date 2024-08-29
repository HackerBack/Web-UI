<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
import { ref, watch } from 'vue'

const tooltipRef = ref(null)
const control = ref(false)

watch(control, () => {
  manual()
})
const manual = () => {
  if (control.value) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
  }
}
</script>
<template>
  <Tooltip ref="tooltipRef" placement="top" manual>
    <template #content> multiple lines<br />second line </template>
    <Button @click="control = !control">Top Center</Button>
  </Tooltip>
</template>
