<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ITask } from '~/repository/task'
import { IColumn } from '../../interfaces/column.inteface'

//
const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
  isShowCreate: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['close', 'create'])

const tasks = ref<ITask[]>([
  { id: 1, name: 'Task 1 for item', due_date: '2023-10-21 09:45:35.792049' },
  { id: 2, name: 'Task 1 for item', due_date: '2023-10-21 09:45:35.792049' },
  { id: 3, name: 'Task 1 for item', due_date: '2023-10-21 09:45:35.792049' },
])

// data

// methods
const addTask = (task: ITask) => {
  tasks.value.unshift(task)
  emit('close')
}
</script>

<template>
  <div class="column flex flex-col bg-gray-100" :style="`border-top: 4px solid ${column.color}`">
    <!-- Header -->
    <div class="column__header flex items-center justify-between">
      <span class="font-semibold">{{ column.name }}</span>
      <div class="flex items-center gap-1">
        <q-icon name="eva-credit-card-outline" size="18px"></q-icon>
        {{ column.tasks && column.tasks.length }}
      </div>
    </div>

    <!-- Wrapper -->
    <div class="column__wrapper flex flex-col gap-2">
      <TaskForm @create="addTask" v-if="column.name === 'Mới' && isShowCreate" @close="emit('close')" />

      <draggable v-model="tasks" ghost-class="ghost" item-key="id" handle=".task-item" class="flex flex-col gap-2">
        <template #item="{ element: task }">
          <TaskItem :key="task.id" :task="task" />
        </template>
      </draggable>
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
