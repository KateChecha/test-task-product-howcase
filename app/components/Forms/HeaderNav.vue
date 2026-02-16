<script setup lang="ts">
const { headerNavItems } = useDataHeaderNav()
</script>

<template>
  <nav class="header-nav">
    <ul class="header-nav-list">
      <li
        v-for="item in headerNavItems"
        :key="item.to"
        class="header-nav-item"
      >
        <UIText
          :title="item.label"
          variant="default"
          tag="link"
          :link-to="item.to"
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
}

.header-nav-list {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  margin: 0;
  padding: 0;
}

.header-nav-link {
  font-size: $font-size-default;
}
</style>