<script setup lang="ts">
const { items, pending, error, init, loadMore, finished } = useDataCatalog()

const retry = (): void => {
  init({ page: 1, limit: 12 })
}

await init({ page: 1, limit: 12 })
</script>

<template>
  <section class="page-catalog">
    <UIText
      tag="h2"
      variant="default"
      title="Каталог"
      class="page-catalog__title"
    />

    <div class="page-catalog__grid">
      <CardsItemCatalog
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :image="item.image"
      />
    </div>

    <UIButton
      v-if="!finished && !error"
      :disabled="pending"
      :text="pending ? 'Загрузка...' : 'Показать ещё'"
      type="outline"
      size="large"
      class="page-catalog__more"
      @click="loadMore"
    />

    <div v-if="error" class="page-catalog__error-block">
      <p class="page-catalog__error">
        Произошла ошибка, попробуйте позже
      </p>
      <UIButton
        text="Повторить"
        type="primary"
        size="large"
        class="page-catalog__retry"
        @click="retry"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page-catalog {
  padding-block: 40px;
  padding-inline: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    margin-bottom: 32px;
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(20px, 2vw, 24px);
    width: 100%;
    justify-content: center;
  }

  &__more {
    margin-top: 32px;
  }

  &__error-block {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  &__error {
    color: $red;
    font-size: $font-size-default;
    text-align: center;
    margin: 0;
  }

  &__retry {
    margin-top: 8px;
  }

  @media (max-width: 767px) {
    padding-inline: 16px;
  }
}
</style>
