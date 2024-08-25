// 选项属性
export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps {
  modelValue: string
  // 选项
  options: SelectOption[]
  // 一些基本表单属性
  placeholder: string
  disabled: boolean
}

export interface SelectEmits {
  (e: 'change', value: string): void
  (e: 'update:modelValue', value: string): void
  (e: 'visible-change', value: boolean): void
}
