<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <Button type="primary" size="large">Large</Button>
  <Button type="primary">Default</Button>
  <Button type="primary" size="small">Small</Button><br /><br />
  <Button type="primary" size="large" icon="spinner">Search</Button>
  <Button type="primary" icon="spinner" spin>Search</Button>
  <Button type="primary" size="small" icon="spinner">Search</Button>
</template>
