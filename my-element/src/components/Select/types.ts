// 选项属性
export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps {
  modelValue: string | number
  // 选项
  options: SelectOption[]
  // 一些基本表单属性
  placeholder: string
  disabled: boolean
  clearable?: boolean
}

export interface SelectStates {
  inputValue: string
  selectOption: null | SelectOption
  mouseHover: boolean
}

export interface SelectEmits {
  (e: 'change', value: string | number): void
  (e: 'update:modelValue', value: string | number): void
  (e: 'visible-change', value: boolean): void
  (e: 'clear'): void
}
