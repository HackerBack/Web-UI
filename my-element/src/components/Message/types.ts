import type { offset } from '@popperjs/core'
import type { VNode, ComponentInternalInstance } from 'vue'
export interface MessageProps {
    message?: string | VNode
    duration?: number
    showClose?: boolean
    type?: 'info' | 'success' | 'warning' | 'error'
    onDestory: () => void
    id: string
    offset?: number
}

export interface MessageContext {
    id: string
    vnode: VNode
    vm: ComponentInternalInstance
    props: MessageProps
    destory: () => void
}
export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id'>