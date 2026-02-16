<template>
  <section>
    <UIText
      tag="h1"
      variant="default"
      title="тестовое задание"
    />

    <UIButton
      text="В каталог"
      type="primary"
      size="large"
      @click="navigateTo('/catalog')"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100%;
}
</style>