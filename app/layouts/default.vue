<template>
  <div class="layout">
    <SectionsHeader />
    <main class="layout__content">
      <slot />
    </main>
    <SectionsFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
    min-height: 100vh;
    background-color: $white;
  }
}
</style>
