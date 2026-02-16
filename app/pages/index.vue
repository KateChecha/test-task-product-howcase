<template>
  <section class="page-home">
    <div class="page-home__container">
      <UIText
        tag="h1"
        variant="default"
        title="тестовое задание"
        class="page-home__title"
      />

      <UIButton
        text="В каталог"
        type="primary"
        size="large"
        class="page-home__action"
        @click="navigateTo('/catalog')"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page-home {
  min-height: calc(100vh - 82px - 390px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 40px;
  padding-inline: 20px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    max-width: 800px;
    width: 100%;
  }

  &__title {
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }

  &__action {
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    min-height: calc(100vh - 60px - 390px);
    padding-block: 24px;
    padding-inline: 16px;

    &__container {
      gap: 24px;
    }
  }

  @media (max-width: 480px) {
    &__title {
      font-size: clamp(24px, 12vw, $font-size-h1);
    }
  }
}
</style>
