<style lang="scss" scoped></style>

<script lang="ts" setup>
const account = ref({
  name: "QuangTV",
  avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
});
</script>

<template>
  <UPopover>
    <UAvatar :src="account.avatar" :alt="account.name" />
    <template #panel>
      <div>
        <div
          class="sidebar-item w-full flex items-center gap-2 cursor-pointer py-2 px-4 hover:bg-gray-100 hover:text-primary-blue rounded-lg duration-150"
        >
          <UIcon name="i-heroicons-user" />
          <span>Thông tin</span>
        </div>
        <div
          class="sidebar-item w-full flex items-center gap-2 cursor-pointer py-2 px-4 hover:bg-gray-100 hover:text-primary-blue rounded-lg duration-150"
        >
          <UIcon name="i-heroicons-arrow-left-on-rectangle" />
          <span> Đăng xuất </span>
        </div>
      </div>
    </template>
  </UPopover>
</template>
