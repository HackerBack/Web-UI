import type { VNode } from 'vue'
export interface MessageProps {
    message?: string | VNode
    duration?: number
    showClose?: boolean
    type?: 'info' | 'success' | 'warning' | 'error'
    onDestory: () => void
}

export interface MessageContext {
    id: string
    vnode: VNode
    props: MessageProps
}
export type CreateMessageProps = Omit<MessageProps, 'onDestory'>