<script setup lang="ts">
// Nuxt auto-imports vue composables at runtime; ts-ignore silences Vetur in SFC.
// @ts-ignore
const isMobile = ref(false)

const updateIsMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768
  }
}

// @ts-ignore
onMounted(() => {
  updateIsMobile()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateIsMobile)
  }
})

// @ts-ignore
onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateIsMobile)
  }
})
</script>

<template>
  <header>
    <UILogoSite />
    <FormsHeaderNav v-if="!isMobile" />
    <div v-if="!isMobile"></div>
    <UIBurgerIcon v-else />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: clamp(60px, 8vw, 82px);
  position: sticky;

  div {
    width: $icon;
    height: $icon;
  }
}
</style>