<template>
  <div
    class="vk-message"
    v-show="visible"
    :class="{
      [`vk-message--${type}`]: type,
      'is-close': showClose
    }"
    role="alert"
    ref="messageRef"
    :style="cssStyle"
  >
    <div class="vk-message__content">
      <slot>
        <RenderVnode :vNode="message" v-if="message" />
      </slot>
    </div>
    <div class="vk-message__close" v-if="showClose">
      <Icon @click.stop="($event) => (visible = false)" icon="xmark" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch, computed, nextTick, getCurrentInstance } from 'vue'
import type { MessageProps } from './types'
import RenderVnode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { getLastBottomOffset } from './method'
const props = withDefaults(defineProps<MessageProps>(), {
  duration: 3000,
  type: 'info',
  offset: 20
})
const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
const instance = getCurrentInstance()

// 计算偏移高度
// 这个div的高度
const height = ref(0)
// 上一个实例的最下面的坐标数字，第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 这个元素应该使用的top
const topOffset = computed(() => props.offset + lastOffset.value)
// 这个元素为下一个元素预留的offset，也就是它最低端bottom的值
const bottomOffset = computed(() => height.value + topOffset.value)
const cssStyle = computed(() => ({
  top: topOffset.value + 'px'
}))
function startTimer() {
  if (props.duration == 0) {
    return
  }
  setTimeout(() => {
    visible.value = false
  }, props.duration)
}
onMounted(async () => {
  visible.value = true
  startTimer()
  await nextTick()
  height.value = messageRef.value!.getBoundingClientRect().height
})
watch(visible, (newValue) => {
  if (!newValue) {
    props.onDestory()
  }
})
defineExpose({
  bottomOffset,
  visible
})
</script>
<style>
.vk-message {
  width: max-content;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translate(-50%);
  border: 1px solid blue;
}
</style>
10