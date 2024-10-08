<template>
  <div
    class="vk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="states.mouseHover = true"
    @mouseleave="states.mouseHover = false"
  >
    <Tooltip
      ref="tooltipRef"
      placement="bottom-start"
      :popperOptions="popperOptions"
      @click-outside="controlDropdown(false)"
      manual
    >
      <Input
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="filteredPlaceholder"
        ref="inputRef"
        :readonly="!filterable || !isDropdownShow"
        @input="debounceOnFilter"
        @keydown="handleKeydown"
      >
        <template #suffix>
          <Icon
            icon="circle-xmark"
            v-if="showClearIcon"
            class="vk-input__clear"
            @mousedown.prevent="NOOP"
            @click.stop="onClear"
          />
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          />
        </template>
      </Input>
      <template #content>
        <div class="vk-select__loading" v-if="states.loading">
          <Icon icon="spinner" spin />
        </div>
        <div class="vk-select__nodata" v-else-if="filterable && filteredOptions.length === 0">
          no matching data
        </div>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in filteredOptions" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectOption?.value === item.value,
                'is-hightlighted': states.highlightedIndex === index
              }"
              :id="`selecet-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVnode :vNode="renderLabel ? renderLabel(item) : item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import type { Ref } from 'vue'
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import RenderVnode from '../Common/RenderVnode'
import type { InputInstance } from '../Input/types'
import { isFunction, debounce } from 'lodash-es'

const findOption = (value: string | number) => {
  const option = props.options.find((item) => item.value === value)
  return option ? option : null
}
defineOptions({
  name: 'VkSelect'
})
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
})
const timeout = computed(() => (props.remote ? 300 : 0))
const emits = defineEmits<SelectEmits>()
const initialOption = findOption(props.modelValue)
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectOption: initialOption,
  mouseHover: false,
  loading: false,
  highlightedIndex: -1
})
const isDropdownShow = ref(false)
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: 'beforeWrite',
      requires: ['computeStyles']
    }
  ]
}
const filteredOptions = ref(props.options)
watch(
  () => props.options,
  (newOptions) => {
    filteredOptions.value = newOptions
  }
)
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filteredOptions.value = props.filterMethod(searchValue)
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    try {
      filteredOptions.value = await props.remoteMethod(searchValue)
    } catch (e) {
      console.error(e)
      filteredOptions.value = []
    } finally {
      states.loading = false
    }
  } else {
    filteredOptions.value = props.options.filter((options) => options.label.includes(searchValue))
  }
  states.highlightedIndex = -1
}
const onFilter = () => {
  generateFilterOptions(states.inputValue)
}
const debounceOnFilter = debounce(() => {
  onFilter()
}, timeout.value)
const filteredPlaceholder = computed(() => {
  return props.filterable && states.selectOption && isDropdownShow.value
    ? states.selectOption.label
    : props.placeholder
})
const controlDropdown = (show: boolean) => {
  if (show) {
    // filter模式
    // 之前选择过对应的值
    if (props.filterable && states.selectOption) {
      states.inputValue = ''
    }
    // 进行一次默认选项的生成
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    // blur的时候将之前的值回灌到input中
    if (props.filterable) {
      states.inputValue = states.selectOption ? states.selectOption.label : ''
    }
    states.highlightedIndex = -1
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropdownShow.value) {
        controlDropdown(true)
      } else {
        if (states.highlightedIndex > -1 && filteredOptions.value[states.highlightedIndex]) {
          itemSelect(filteredOptions.value[states.highlightedIndex])
        } else {
          controlDropdown(false)
        }
      }
      break
    case 'Escape':
      if (isDropdownShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      // states.hightlightedIndex = -1
      if (filteredOptions.value.length > 0) {
        if (states.highlightedIndex === -1 || states.highlightedIndex === 0) {
          states.highlightedIndex = filteredOptions.value.length - 1
        } else {
          // move up
          states.highlightedIndex--
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      // states.hightlightedIndex = -1
      if (filteredOptions.value.length > 0) {
        if (
          states.highlightedIndex === -1 ||
          states.highlightedIndex === filteredOptions.value.length - 1
        ) {
          states.highlightedIndex = 0
        } else {
          // move up
          states.highlightedIndex++
        }
      }
      break
    default:
      break
  }
}
const showClearIcon = computed(() => {
  // * hover 上去
  // * props.clearable 为 true
  // 必须要有选择过选项
  // Input 的值不能为空
  return (
    props.clearable && states.mouseHover && states.selectOption && states.inputValue.trim() !== ''
  )
})
const onClear = () => {
  states.selectOption = null
  states.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
const NOOP = () => {}
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}

const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}
</script>
