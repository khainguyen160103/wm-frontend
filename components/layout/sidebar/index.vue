<style lang="scss" scoped>
.layout-sidebar {
  // height: calc(100vh - 44px);
  width: 260px;
}
</style>

<script lang="ts" setup>
const sidebarItems = ref([
  {
    name: 'Tài khoản',
    icon: 'eva-people-outline',
    route: 'AccountList',
  },
  {
    name: 'Dự án',
    icon: 'eva-grid-outline',
    route: 'ProjectList',
  },
  {
    name: 'Danh mục',
    icon: 'eva-list-outline',
    route: 'Category',
  },
])
</script>

<template>
  <div class="layout-sidebar flex flex-col border-r">
    <LayoutSidebarSub />

    <div dense padding class="flex flex-col border-r p-2 gap-1">
      <LayoutSidebarItem v-for="sidebarItem in sidebarItems" :key="sidebarItem.name" :item="sidebarItem" />
    </div>
  </div>
</template>
