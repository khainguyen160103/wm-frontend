<template>
  <div class="layout-project">
    <LayoutHeader />

    <div class="flex w-full">
      <ProjectSidebar />

      <nuxt-page class="page"></nuxt-page>
    </div>
  </div>
</template>

<style lang="scss">
.layout-project {
  .page {
    height: calc(100vh - 54px);
    width: calc(100vw - 260px);
    padding: 16px;
    overflow: auto;
  }
}
</style>
