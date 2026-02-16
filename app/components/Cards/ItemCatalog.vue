<script setup lang="ts">
interface CatalogItem {
  id: number
  name: string
  price: number
  image: string
}

const props = defineProps<CatalogItem>()

const isFavorite = ref<boolean>(false)

const toggleFavorite = (e: Event): void => {
  e.preventDefault()
  e.stopPropagation()
  isFavorite.value = !isFavorite.value
}

const onePrice = computed<number>(() => {
  return Math.ceil(props.price / 2)
})
</script>

<template>
  <a href="#" class="card" @click.prevent>
    <button
      class="card__favorite"
      :class="{ 'card__favorite--active': isFavorite }"
      type="button"
      aria-label="Добавить в избранное"
      @click="toggleFavorite"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 17.5L8.55 16.15C4.4 12.5 1.66667 10.0833 1.66667 7.08333C1.66667 4.58333 3.58333 2.66667 6.08333 2.66667C7.36667 2.66667 8.58333 3.25 9.16667 4.16667H10.8333C11.4167 3.25 12.6333 2.66667 13.9167 2.66667C16.4167 2.66667 18.3333 4.58333 18.3333 7.08333C18.3333 10.0833 15.6 12.5 11.45 16.15L10 17.5Z"
          class="card__favorite-icon"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <NuxtImg
      :src="image"
      :alt="name"
      lazy
      class="card__image"
    />

    <div class="card__info">
      <div class="card__price-row">
        <UIText
          :title="Number(price).toLocaleString() + ' ₽'"
          tag="p"
          variant="default"
        />
        <div class="card__installment">
          <UIText
            :title="onePrice + ' ₽ x 2'"
            variant="light"
          />
        </div>
      </div>

      <p class="card__name">{{ name }}</p>
    </div>
  </a>
</template>

<style scoped lang="scss">
.card {
  flex: 0 1 calc(50% - 10px);
  display: flex;
  flex-direction: column;
  min-width: 100px;
  max-width: 290px;
  min-height: clamp(172px, 25vw, 300px);
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: transform $transition, box-shadow $transition;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba($black, 0.1);
  }

  @media (min-width: 768px) {
    min-width: 150px;
  }

  &__favorite {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 10;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform $transition;

    &:hover {
      transform: scale(1.1);
    }

    &-icon {
      fill: none;
      stroke: $black;
      transition: fill $transition, stroke $transition;
    }

    &--active &-icon {
      fill: $red;
      stroke: $red;
    }
  }

  &__image {
    width: 100%;
    height: clamp(60px, 25vw, 180px);
    object-fit: cover;
    display: block;
    max-width: 290px;
    transition: opacity $transition;

    .card:hover & {
      opacity: 0.9;
    }
  }

  &__info {
    margin-top: 8px;
    width: 100%;
  }

  &__price-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  &__price-row .text--p {
    font-size: $font-size-title;
  }

  &__installment {
    background-color: $black;
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;

    .text {
      font-size: $font-size-installment;
    }
  }

  &__name {
    margin: 4px 0 0 0;
    font-size: clamp(12px, 1vw + 8px, 16px);
    font-family: $font-family;
    color: $black;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
}
</style>
