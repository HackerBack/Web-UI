<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import type { Options } from '@popperjs/core'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown'
import type { MenuOption } from './components/Dropdown/types'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import type { ButtonInstance } from './components/Button/types'
import type { TooltipInstance } from './components/Tooltip/types'
const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
const overlayNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const trigger = ref<any>('click')
const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const open = () => {
  tooltipRef?.value?.show()
}
const close = () => {
  tooltipRef?.value?.hide()
}
let popperInstance: Instance | null = null
const openedValue = ref(['a'])
onMounted(() => {
  if (buttonRef.value) {
    console.log('buttonRef', buttonRef.value.ref)
  }
  if (overlayNode.value && triggerNode.value) {
    popperInstance = createPopper(triggerNode.value, overlayNode.value, { placement: 'right' })
  }

  setTimeout(() => {
    popperInstance?.setOptions({ placement: 'bottom' })
  }, 2000)
})
</script>

<template>
  <header>
    <Dropdown
      placement="bottom"
      :trigger="trigger"
      :menu-options="options"
      @visible-change="($event) => console.log($event)"
      @select="($event) => console.log($event)"
      manual
      ref="tooltipRef"
    >
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <template #content>
        <h1>Hello Tooltip</h1>
      </template>
    </Dropdown>
  </header>
  <!-- <Icon icon="fa-solid fa-user-secret" /> -->
  <Icon icon="arrow-up" size="2xl" type="danger" color="yellow" />
  <main>
    <Button ref="buttonRef" @click="open">Test Button</Button>
    <Button plain @click="close">Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button>

    <Collapse v-model="openedValue" accordion>
      <CollapseItem name="a">
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>headlint title</h1>
        <div>this is content a aaa</div>
      </CollapseItem>
      <CollapseItem name="b" title="nice title b item b">
        <div>this is bbbbb test</div>
      </CollapseItem>
      <CollapseItem name="c" title="nice cccc" disabled>
        <div>this is cccc test</div>
      </CollapseItem>
    </Collapse>
    {{ openedValue }}
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
