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
  position: relative;
  user-select: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 2px var(--q-primary);
  }

  &__content {
    padding: 20px 20px 0px 20px;
  }

  &__leader {
    padding: 8px 20px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
</style>

<template>
  <div class="project-card flex flex-col justify-between border border-gray-200">
    <div class="project-card__content flex flex-col gap-1">
      <AccountAvatar :src="project.avatar" :name="project.name" :color="project.color" :size="36" />
      <span class="font-bold text-xl truncate mt-2">{{ project.name }}</span>
      <span class="truncate">{{ project.description }}</span>
    </div>

    <div class="project-card__leader py-2 bg-gray-100 relative border-t border-gray-200">
      <AccountAvatar :src="project.leader.src" :name="project.leader.name" :color="project.leader.color" :size="24" />

      {{ project.leader.name }}
    </div>
  </div>
</template>
