<script lang="ts" setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.project-card {
  height: 180px;
  min-width: 320px;
}
</style>

<template>
  <div class="project-card q-card flex flex-col p-2">
    <span class="font-bold text-xl truncate">{{ project.name }}</span>
  </div>
</template>
