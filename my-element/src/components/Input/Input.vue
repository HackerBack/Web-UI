<template>
  <div
    class="vk-input"
    :class="{
      [`vk-input--${type}`]: type,
      [`vk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="vk-input__prepend">
        <slot name="prepend" />
      </div>
      <div class="vk-input__wrapper">
        <!-- prefix-slot -->
        <span v-if="$slots.prefix" class="vk-input__prefix">
          <slot name="prefix" />
        </span>
        <input
          class="vk-input__inner"
          :type="type"
          :disabled="disabled"
          v-model="innerValue"
          @input="handleInput"
        />
        <!-- suffix slot -->
        <span v-if="$slots.suffix" class="vk-input__suffix">
          <slot name="suffix" />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="vk-input__append">
        <slot name="append" />
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        class="vk-textarea__wrapper"
        :disabled="disabled"
        v-model="innerValue"
        @input="handleInput"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import type { InputProps, InputEmits } from './types'

defineOptions({
  name: 'VKInput'
})
const props = withDefaults(defineProps<InputProps>(), { type: 'text' })
const emits = defineEmits<InputEmits>()
const innerValue = ref(props.modelValue)
const handleInput = () => {
  emits('update:modelValue', innerValue.value)
}
watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue
  }
)
</script>
