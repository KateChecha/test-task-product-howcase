
<script setup lang="ts">
const props = defineProps<{
  title: string | number
  variant: 'dark' | 'light' | 'default'
  tag?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'link',
  linkTo?: string
}>()

const tag = computed(() => props.tag || 'span')
</script>

<template>
  <component
      :is="tag"
      :class="['title', variant]"
      v-if="tag !== 'link'"
  >
    {{ title }}
  </component>
  <NuxtLink
      v-else
      :to="linkTo"
      :class="['title', variant]"
  >
    {{ title }}
  </NuxtLink>
</template>

<style scoped lang="scss">
.title {
  text-decoration: none;
  &.dark {
    color: $dark;
  }
  &.light {
    color: $white;
  }
  &.default {
    color: $black
  }
}

</style>
