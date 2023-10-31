<script lang="ts" setup>
import { IColumn } from '../../interfaces/column.inteface'

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="column flex flex-col bg-gray-100" :style="`border-top: 4px solid ${column.color}`">
    <div class="column__header flex items-center">{{ column.name }}</div>
    <div class="column__wrapper"></div>
  </div>
</template>

<style lang="scss" scoped>
.column {
  width: 384px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  &__header {
    height: 48px;
    padding: 4px 12px;
  }
}
</style>
