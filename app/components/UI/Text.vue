<script setup lang="ts">
interface TextProps {
  title: string | number
  variant: 'dark' | 'light' | 'default'
  tag?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'link'
  linkTo?: string
}

const props = defineProps<TextProps>()

const tagName = computed<'h1' | 'h2' | 'h3' | 'span' | 'p' | 'link'>(() => props.tag || 'span')
</script>

<template>
  <component
    :is="tagName"
    :class="['text', `text--${variant}`, `text--${tag || 'span'}`]"
    v-if="tagName !== 'link'"
  >
    {{ title }}
  </component>
  <NuxtLink
    v-else
    :to="linkTo"
    :class="['text', `text--${variant}`, 'text--link']"
  >
    {{ title }}
  </NuxtLink>
</template>

<style scoped lang="scss">
.text {
  text-decoration: none;
  font-family: $font-family;

  &--dark { color: $dark; }
  &--light { color: $white; }
  &--default { color: $black; }

  &--h1 { font-size: $font-size-h1; font-weight: 700; }
  &--h2 { font-size: $font-size-h2; font-weight: 700; }
  &--h3 { font-size: $font-size-title; font-weight: 600; }
  &--p { font-size: $font-size-description; font-weight: 400; }
  &--span { font-size: $font-size-default; font-weight: 400; }

  &--link {
    font-size: $font-size-default;
    font-weight: 400;
    transition: color $transition;

    &:hover {
      color: $red;
    }
  }
}
</style>
