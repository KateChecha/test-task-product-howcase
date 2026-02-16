<script setup lang="ts">
const { footerColumns } = useDataFooter()
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div
        v-for="(item, index) in footerColumns"
        :key="index"
        class="footer__group"
      >
        <UIText
          :title="item.title"
          variant="dark"
          tag="p"
          class="footer__title"
        />
        <ul class="footer__list">
          <li
            v-for="(link, i) in item.items"
            :key="i"
            class="footer__item"
          >
            <UIText
              variant="light"
              tag="link"
              :title="link.label"
              :link-to="link.href"
              class="footer__link"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $black;
  min-height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 60px;
  padding-inline: 40px;

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    max-width: 1440px;
    width: 100%;
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 14px;
    min-width: 200px;
  }

  &__title {
    margin: 0;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__link {
    font-size: $font-size-default;
    text-decoration: none;
    transition: opacity $transition;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1024px) {
    &__container {
      justify-content: flex-start;
      gap: 30px;
    }

    &__group {
      min-width: 180px;
    }
  }

  @media (max-width: 768px) {
    padding-block: 40px;
    padding-inline: 24px;
    min-height: auto;

    &__container {
      flex-direction: column;
      gap: 32px;
    }

    &__group {
      min-width: 100%;
    }
  }
}
</style>
