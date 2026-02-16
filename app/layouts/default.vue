<template>
  <div class="global-container">
    <SectionsHeader/>
    <slot/>
    <SectionsFooter/>
  </div>
</template>

<style scoped lang="scss">
.global-container {
  height: 100vh;
}
</style>