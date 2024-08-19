<template>
  <div class="vk-tooltip" v-on="outerEvents">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <div v-if="isOpen" class="vk-tooltip__content" ref="popperNode">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import type { TooltipProps, TooltipEmits } from './types'
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover'
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
let popperInstance: Instance | null = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}
const open = () => {
  isOpen.value = true
  emits('visible-change', true)
}
const close = () => {
  isOpen.value = false
  emits('visible-change', false)
}
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
attachEvents()
watch(() => props.trigger, (newTrigger, oldTrigger) => {
    if(newTrigger !== oldTrigger) {
        events = {}
        outerEvents = {}
        attachEvents()
    }
})
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (popperNode.value && triggerNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement
        })
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' }
)
</script>
