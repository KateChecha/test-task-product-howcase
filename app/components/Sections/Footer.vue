<script setup lang="ts">
 const { footerColumns } = useDataFooter()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div
        v-for="(item, index) in footerColumns"
        :key="index"
      >
        <UIText
          :title="item.title"
          variant="dark"
          tag="p"
        />
        <div class="column">
          <UIText
            v-for="(link, i) in item.items"
            :key="i"
            variant="light"
            tag="link"
            :title="link.label"
            :linkTo="link.href"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $black;
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .container {
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 14px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 315px;
  }
}
</style>