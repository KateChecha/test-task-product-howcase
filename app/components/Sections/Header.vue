<script setup lang="ts">
const isMobile = ref<boolean>(false)

const updateIsMobile = (): void => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768
  }
}

onMounted(() => {
  updateIsMobile()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateIsMobile)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateIsMobile)
  }
})
</script>

<template>
  <header class="header">
    <UILogoSite />
    <FormsHeaderNav v-if="!isMobile" />
    <div v-if="!isMobile" class="header__spacer" />
    <UIBurgerIcon v-else />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: clamp(60px, 5.7vw, 82px);
  padding-block: 0;
  padding-inline: 40px;

  &__spacer {
    width: $icon;
    height: $icon;
  }

  @media (max-width: 768px) {
    padding-block: 0;
    padding-inline: 16px;
  }
}
</style>
