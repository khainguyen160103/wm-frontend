<style lang="scss" scoped>
.layout-header {
  height: 54px;
}
</style>

<script lang="ts" setup></script>

<template>
  <div
    class="layout-header flex items-center justify-between border-b border-gray-200 py-2 px-4"
  >
    <GlobalLogo />

    <div class="layout-header__action flex items-center gap-2">
      <UButton icon="i-heroicons-bell" color="primary" square variant="ghost" />

      <GlobalAvatar />
    </div>
  </div>
</template>
