<template>
  <div class="layout-default w-full h-full">
    <LayoutHeader />

    <div class="flex w-full">
      <LayoutSidebar />

      <nuxt-page class="page"></nuxt-page>
    </div>
  </div>
</template>

<style lang="scss">
.layout-default {
  .page {
    height: calc(100vh - 54px);
    width: calc(100vw - 260px);
    padding: 0px 16px;
  }
}
</style>
