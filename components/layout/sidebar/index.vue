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
    icon: "i-heroicons-user-group",
    path: "account",
  },
  {
    name: "Dự án",
    icon: "i-heroicons-briefcase",
    path: "project",
  },
  {
    name: "Danh mục",
    icon: "i-heroicons-queue-list",
    path: "category",
  },
]);
</script>

<template>
  <div class="layout-sidebar flex flex-col border-r border-grey p-2">
    <LayoutSidebarItem
      v-for="sidebarItem in sidebarItems"
      :key="sidebarItem.name"
      :item="sidebarItem"
    ></LayoutSidebarItem>
  </div>
</template>
