<script lang="ts" setup>
const { currentRoute } = useRouter()

const mapName = {
  AccountList: 'Tài khoản',
  ProjectList: 'Dự án',
  Category: 'Danh mục',
  ProjectInformation: 'Thông tin dự án',
  ProjectTask: 'Công việc',
  TaskDetail: 'Nội dung công việc',
  ProjectAnalytics: 'Thống kê dự án',
  ProjectSprint: 'Giai đoạn dự án',
}
</script>

<template>
  <div class="layout-header w-full flex items-center justify-between border-b border-gray-200 py-2 px-4">
    <span class="font-semibold hover:underline cursor-pointer">{{ mapName[currentRoute.name] }}</span>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  height: 44px;
}
</style>
