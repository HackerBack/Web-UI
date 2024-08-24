export interface SwitchProps {
  modelValue: boolean
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  name?: string
  id?: string
  size?: 'small' | 'large'
}

export interface SwitchEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}
