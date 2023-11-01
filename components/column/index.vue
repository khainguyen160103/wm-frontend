<script lang="ts" setup>
import { IColumn } from '../../interfaces/column.inteface'

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
})

const tasks = [
  { id: 1, name: 'Task 1 for item', due_date: '2023-10-21 09:45:35.792049' },
  { id: 2, name: 'Task 1 for item', due_date: '2023-10-21 09:45:35.792049' },
  { id: 3, name: 'Task 1 for item', due_date: '2023-10-21 09:45:35.792049' },
]
</script>

<template>
  <div class="column flex flex-col bg-gray-100" :style="`border-top: 4px solid ${column.color}`">
    <!-- Header -->
    <div class="column__header flex items-center justify-between">
      <span>{{ column.name }}</span>
      <div class="flex items-center gap-1">
        <q-icon name="eva-credit-card-outline"></q-icon>
        10
      </div>
    </div>

    <!-- Wrapper -->
    <div class="column__wrapper flex flex-col gap-2">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.column {
  min-width: 384px;
  height: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  &__header {
    height: 40px;
    padding: 4px 12px;
  }

  &__wrapper {
    padding: 0px 12px;
  }
}
</style>
