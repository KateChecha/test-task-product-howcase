<script setup lang="ts">
// @ts-ignore - Nuxt auto-imports composables
const { items, pending, error, init, loadMore, finished } = useDataCatalog()

// @ts-ignore - Nuxt auto-imports lifecycle hooks
onMounted(() => {
  init({ page: 1, limit: 12 })
})
</script>

<template>
  <section>
    <UIText
      tag="h2"
      variant="default"
      title="Каталог"
    />

    <div>
      <CardsItemCatalog
        v-for="item in items"
        :key="item.id"
        v-bind="item"
      />
    </div>

    <UIButton
      v-if="!finished"
      :disabled="pending"
      :text="pending ? 'Загружаем...' : 'Показать ещё'"
      type="primary"
      size="large"
      @click="loadMore"
    />

    <p v-if="error" class="error">
      Ошибка загрузки каталога
    </p>
  </section>
</template>