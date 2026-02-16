<script setup lang="ts">
const { headerNavItems } = useDataHeaderNav()
</script>

<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li
        v-for="item in headerNavItems"
        :key="item.to"
        class="header-nav__item"
      >
        <UIText
          :title="item.label"
          variant="default"
          tag="link"
          :link-to="item.to"
          class="header-nav__link"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.header-nav {
  background-color: $grey;
  padding-block: 10px;
  padding-inline: 24px;

  &__list {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    margin: 0;
    padding: 0;
  }

  &__link {
    font-size: $font-size-default;
  }
}
</style>
