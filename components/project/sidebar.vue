<style lang="scss" scoped>
.project-sidebar {
  // height: calc(100vh - 44px);
  width: 260px;
}
</style>

<script lang="ts" setup>
const sidebarItems = ref([
  {
    name: 'Thông tin',
    icon: 'eva-info-outline',
    route: 'ProjectInformation',
  },
  {
    name: 'Công việc',
    icon: 'eva-briefcase-outline',
    route: 'ProjectTask',
  },
  {
    name: 'Thống kê',
    icon: 'eva-bar-chart-2-outline',
    route: 'ProjectAnalytics',
  },
  {
    name: 'Giai đoạn',
    icon: 'eva-calendar-outline',
    route: 'ProjectSprint',
  },
])
</script>

<template>
  <div class="project-sidebar flex flex-col border-r">
    <LayoutSidebarSub :is-project="true" />

    <div dense padding class="flex flex-col p-2 gap-1">
      <LayoutSidebarItem v-for="sidebarItem in sidebarItems" :key="sidebarItem.name" :item="sidebarItem" />
    </div>
  </div>
</template>
