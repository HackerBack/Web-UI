import { onMounted, onBeforeMount, isRef, watch, unref } from 'vue'
import type { Ref } from 'vue'
export default function useEventListener(
  target: Ref<EventTarget | null> | EventTarget,
  evnet: string,
  handler: (event: Event) => any
) {
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
        oldValue?.removeEventListener(evnet, handler)
        value?.addEventListener(evnet, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(evnet, handler)
    })
  }
  onBeforeMount(() => {
    unref(target)?.removeEventListener(evnet, handler)
  })
}
