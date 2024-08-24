export interface InputProps {
  type?: string
  modelValue: string
  size?: 'large' | 'small'
  clearable?: boolean
  showPassword?: boolean
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  autocomplete?: string
  autofocus?: boolean
  form?: string
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void
  // input 的 input事件指的是值有变化就算
  (e: 'input', value: string): void
  // input 的 change事件指的是修改了值，并且失去了focus
  (e: 'change', value: string): void
  (e: 'clear'): void
  (e: 'focus', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
}
