<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <Icon class="icon-spacing" icon="fa-solid fa-user" size="1x" />
  <Icon class="icon-spacing" icon="fa-solid fa-user" size="2x" />
  <Icon class="icon-spacing" icon="fa-solid fa-user" size="3x" /><br /><br />
  <Icon class="icon-spacing" icon="fa-solid fa-star" size="2xs" />
  <Icon class="icon-spacing" icon="fa-solid fa-star" size="xs" />
  <Icon class="icon-spacing" icon="fa-solid fa-star" size="sm" /><br /><br />
  <Icon class="icon-spacing" icon="fa-solid fa-poo" size="lg" />
  <Icon class="icon-spacing" icon="fa-solid fa-poo" size="xl" />
  <Icon class="icon-spacing" icon="fa-solid fa-poo" size="2xl" /><br /><br />
  <Icon class="icon-spacing" icon="fa-solid fa-cart-shopping" color="blue" />
</template>

<style scoped>
.icon-spacing {
  margin-right: 10px;
}
</style>
