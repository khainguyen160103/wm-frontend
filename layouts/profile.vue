<template>
  <div class="layout-default w-full h-full flex">
    <div class="flex layout-default__wrapper">
      <LayoutHeaderProfile />

      <nuxt-page class="page"></nuxt-page>
    </div>
  </div>
</template>

<style lang="scss">
.layout-default {
  .page {
    height: calc(100vh - 44px);
    width: 100%;
    padding: 16px;
    overflow: auto;
  }

  &__wrapper {
    width: calc(100vw - 260px);
  }
}
</style>
