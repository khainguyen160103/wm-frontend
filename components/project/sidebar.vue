<style lang="scss" scoped>
.project-sidebar {
  height: calc(100vh - 54px);
  width: 260px;
}
</style>

<script lang="ts" setup>
const sidebarItems = ref([
  {
    name: 'Thông tin',
    icon: 'eva-info-outline',
    path: 'information',
  },
  {
    name: 'Công việc',
    icon: 'eva-briefcase-outline',
    path: 'task',
  },
  {
    name: 'Thống kê',
    icon: 'eva-bar-chart-2-outline',
    path: 'analytics',
  },
  {
    name: 'Giai đoạn',
    icon: 'eva-calendar-outline',
    path: 'sprint',
  },
])
</script>

<template>
  <div class="project-sidebar flex flex-col border-r p-2">
    <q-list dense padding class="rounded-borders">
      <LayoutSidebarItem v-for="sidebarItem in sidebarItems" :key="sidebarItem.name" :item="sidebarItem" />
    </q-list>
  </div>
</template>
