<template>
  <NuxtLink to="/" class="logo" aria-label="На главную"/>
</template>

<style scoped lang="scss">
.logo {
  width: $icon;
  height: $icon;
  background-color: $red;
  display: block;
  text-decoration: none;
  transition: opacity $transition;

  &:hover {
    opacity: 0.8;
  }
}
</style>
