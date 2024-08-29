<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <Tooltip class="box-item" content="Top Left prompts info" placement="top-start">
        <Button>topstart</Button>
      </Tooltip>
      <Tooltip class="box-item" content="Top Center prompts info" placement="top">
        <Button>top</Button>
      </Tooltip>
      <Tooltip class="box-item" content="Top Right prompts info" placement="top-end">
        <Button>topend</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip class="box-item" content="Left Top prompts info" placement="left-start">
        <Button>leftstart</Button>
      </Tooltip>
      <Tooltip class="box-item" content="Right Top prompts info" placement="right-start">
        <Button>rightstart</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip class="box-item" content="Left Center prompts info" placement="left">
        <Button>left</Button>
      </Tooltip>
      <Tooltip class="box-item" content="Right Center prompts info" placement="right">
        <Button>right</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip class="box-item" content="Left Bottom prompts info" placement="left-end">
        <Button>leftend</Button>
      </Tooltip>
      <Tooltip class="box-item" content="Right Bottom prompts info" placement="right-end">
        <Button>rightend</Button>
      </Tooltip>
    </div>
    <div class="row center">
      <Tooltip class="box-item" content="Bottom Left prompts info" placement="bottom-start">
        <Button>bottomstart</Button>
      </Tooltip>
      <Tooltip class="box-item" content="Bottom Center prompts info" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip class="box-item" content="Bottom Right prompts info" placement="bottom-end">
        <Button>bottomend</Button>
      </Tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
