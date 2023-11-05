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
  <div class="flex flex-col gap-2 layout-sidebar-sub p-2 text-gray-100">
    <div class="flex justify-between w-full">
      <nuxt-link :to="{ name: 'ProjectList' }">
        <q-btn>Logo</q-btn>
      </nuxt-link>

      <div class="flex items-center gap-2">
        <q-btn flat round>
          <q-icon name="eva-bell-outline" size="20px"></q-icon>
        </q-btn>
        <GlobalAvatar class="h-full flex items-center" />
      </div>
    </div>

    <!-- Project quick info -->
    <div v-if="isProject && project" class="p-2 hover:opacity-80 flex items-center gap-1">
      <AccountAvatar :color="project.color" :src="project.avatar" :name="project.name" size="28" />

      <span>
        {{ project.name }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-sidebar-sub {
  background-color: var(--q-primary);
  opacity: 0.8;
}
</style>
