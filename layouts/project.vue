<template>
  <div class="layout-project h-full w-full flex">
    <ProjectSidebar />

    <div class="flex layout-project__wrapper">
      <LayoutHeader />

      <nuxt-page class="page"></nuxt-page>
    </div>
  </div>
</template>

<style lang="scss">
.layout-project {
  .page {
    height: calc(100vh - 44px);
    width: 100%;
    // width: calc(100vw - 260px);
    padding: 16px;
    overflow: auto;
  }

  &__wrapper {
    width: calc(100vw - 260px);
  }
}
</style>
