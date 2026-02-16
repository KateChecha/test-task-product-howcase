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
$header: 82px;
.layout {
  min-height: calc(100vh - $header);
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
    min-height: calc(100vh - ($header - 22px));
    background-color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
