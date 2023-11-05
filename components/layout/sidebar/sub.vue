<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { useProjectStore } from '~/store/project'

const props = defineProps({
  isProject: {
    type: Boolean,
    default: false,
  },
})

const projectStore = useProjectStore()
const project = projectStore.project
</script>

<template>
  <div class="flex flex-col gap-2 layout-sidebar-sub border-b p-2">
    <div class="flex justify-between w-full" style="height: 44px">
      <GlobalAvatar class="h-full flex items-center cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg" />

      <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
        <q-icon name="eva-bell-outline" size="20px"></q-icon>
      </div>
    </div>

    <!-- Project quick info -->
    <div v-if="isProject && project" class="w-full">
      <nuxt-link
        class="text-base hover:bg-gray-100 px-4 py-2 flex items-center gap-1 rounded-lg project-quick-info"
        :to="{ name: 'ProjectInformation' }"
      >
        <AccountAvatar :color="project.color" :src="project.avatar" :name="project.name" :size="24" />

        <span class="truncate">Dự án: {{ project.name }}</span>
      </nuxt-link>

      <nuxt-link
        :to="{
          name: 'ProjectList',
        }"
      >
        <div class="flex flex-row gap-1 items-center px-4 cursor-pointer">
          <q-icon name="eva-arrow-back-outline"></q-icon>
          <span class="mt-1 hover:underline">Quay lại</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.layout-sidebar-sub {
  // background-color: var(--q-primary);
  min-height: 44px;
  opacity: 0.8;
}

.project-quick-info {
  // background-color: var(--q-primary-hover);
  // opacity: 1;
  cursor: pointer;

  // &:hover {
  //   opacity: 0.8;
  // }
}
</style>
