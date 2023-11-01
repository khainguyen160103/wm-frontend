<script lang="ts" setup>
// props
const props = defineProps({
  tag: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="task-tag"></div>
</template>

<style lang="scss" scoped>
.task-tag {
}
</style>
