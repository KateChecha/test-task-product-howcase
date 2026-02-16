<script setup lang="ts">
const props = defineProps<CatalogItem>()

const onePrice = computed(() => {
  return Math.ceil(props.price / 2)

})
</script>

<template>
  <div class="card">
    <NuxtImg
      :src="image"
      :alt="name"
      lazy
      class="product-image"
    />

    <div class="info">
      <div>
        <UIText
            :title="Number(price).toLocaleString()"
            tag="p"
        />
        <div class="one-price">
          <UIText
              :title="onePrice"
          />
        </div>
      </div>

      <UIText
        tag="h3"
        variant="default"
        :title="name"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  .one-price {
    background-color: $black;
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .product-image {
    width: clamp(150px, 90vw, 290px);
    height: clamp(93px, 55vw, 180px);
    object-fit: cover;
  }
}
</style>

