export interface InputProps {
    type?: string;
    modelValue: string;
	size?: 'large' | 'small';
	clearable?: boolean;
	showPassword?: boolean;
	disabled?: boolean;
}

export interface InputEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string): void;
    (e: 'clear'): void;
    (e: 'focus'): void;
    (e: 'blur'): void;
}