<script lang="ts" setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.project-card {
  height: 180px;
  min-width: 320px;
  border-radius: 12px;
  padding: 24px;
}
</style>

<template>
  <div class="project-card flex flex-col border border-gray-200">
    <AccountAvatar :src="project.avatar" :name="project.name" :color="project.color" :size="36" />
    <span class="font-bold text-xl truncate">{{ project.name }}</span>
  </div>
</template>
