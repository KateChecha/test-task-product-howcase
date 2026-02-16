<script setup lang="ts">
interface Props {
  text: string
  type?: 'primary' | 'outline'
  size?: 'medium' | 'large'
}

withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium'
})
</script>

<template>
  <button :class="['button', type, size]">
    <span>{{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
.button {
  appearance: none;
}
</style>

