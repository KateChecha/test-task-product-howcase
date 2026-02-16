<script setup lang="ts">
interface Props {
  text: string
  type?: 'primary' | 'outline'
  size?: 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
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
  background-color: transparent;
  border: none;

  &.primary {
    padding-inline: 24px;
    padding-block: 10px;
    background-color: $red;
    color: $white;
  }

  //&.outline {
  //
  //}
}
</style>

