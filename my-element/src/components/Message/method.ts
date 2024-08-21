import { render, h, shallowReactive } from 'vue'
import type { MessageProps } from './types'
import type { CreateMessageProps, MessageContext } from './types'
import MessageConstructor from './Message.vue'
let seed = 1
const instances: MessageContext[] = shallowReactive([])
export const createMessage = (props: CreateMessageProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')
  const destory = () => {
    // 删除数组中的实例
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }
  const newProps = {
    ...props,
    id,
    onDestory: destory
  }
  const vnode = h(MessageConstructor, newProps)
  render(vnode, container)
  // 非空断言操作符
  document.body.appendChild(container.firstElementChild!)
  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: newProps
  }
  instances.push(instance)
  return instance
}

export const getLastInstance = () => {
  return instances.at(-1)
}
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  if (idx <= 0) {
    return 0
  } else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}
