<template>
  <div class="vk-tooltip" ref="popperContainerNode" v-on="outerEvents">
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
import { ref, watch, reactive, onUnmounted } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import useClickOutside from '@/hooks/useClickOutside'
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover'
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
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
useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close()
  }
})
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
if (!props.manual) {
  attachEvents()
}
watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {}
      outerEvents = {}
    } else {
      attachEvents()
    }
  }
)
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {}
      outerEvents = {}
      attachEvents()
    }
  }
)
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
onUnmounted(() => {
  popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
  show: open,
  hide: close
})
</script>
