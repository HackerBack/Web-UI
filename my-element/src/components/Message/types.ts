import type { VNode } from 'vue'
export interface MessageProps {
    message?: string | VNode
    duration?: number
    showClose?: boolean
    type?: 'info' | 'success' | 'warning' | 'error'
}