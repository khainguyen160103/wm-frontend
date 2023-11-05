<script lang="ts" setup>
const { currentRoute } = useRouter()

const mapName = {
  AccountList: 'Tài khoản',
  ProjectList: 'Dự án',
  Category: 'Danh mục',
}
</script>

<template>
  <div class="layout-header w-full flex items-center justify-between border-b border-gray-200 py-2 px-4">
    <!-- <GlobalLogo style="margin-bottom: 4px" /> -->
    <span class="font-semibold hover:underline cursor-pointer">{{ mapName[currentRoute.name] }}</span>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  height: 44px;
}
</style>
