<script setup lang="ts">
interface Props {
  text: string
  type?: 'primary' | 'outline'
  size?: 'medium' | 'large'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false
})
</script>

<template>
  <button
    :class="['button', `button--${type}`, `button--${size}`]"
    :disabled="disabled"
  >
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
.button {
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: $font-family;
  font-size: $font-size-default;
  transition: background-color $transition, color $transition, border-color $transition, transform $transition;

  &__text {
    pointer-events: none;
  }

  &--primary {
    padding-inline: 24px;
    padding-block: 10px;
    background-color: $red;
    color: $white;

    &:hover {
      background-color: darken(#ff0000, 10%);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--outline {
    padding-inline: 24px;
    padding-block: 10px;
    background-color: transparent;
    border: 1px solid $black;
    color: $black;

    &:hover {
      background-color: $black;
      color: $white;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--large { font-size: $font-size-description; }
  &--medium { font-size: $font-size-default; }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}
</style>
