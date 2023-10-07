<style lang="scss" scoped>
.layout-sidebar {
  height: calc(100vh - 54px);
  width: 260px;
}
</style>

<script lang="ts" setup>
const sidebarItems = ref([
  {
    name: "Tài khoản",
    icon: "eva-people-outline",
    path: "account",
  },
  {
    name: "Dự án",
    icon: "eva-grid-outline",
    path: "project",
  },
  {
    name: "Danh mục",
    icon: "eva-list-outline",
    path: "category",
  },
]);
</script>

<template>
  <div class="layout-sidebar flex flex-col border-r p-2">
    <q-list dense padding class="rounded-borders">
      <LayoutSidebarItem
        v-for="sidebarItem in sidebarItems"
        :key="sidebarItem.name"
        :item="sidebarItem"
      />
    </q-list>
  </div>
</template>
