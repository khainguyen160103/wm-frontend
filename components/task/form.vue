<script lang="ts" setup>
import { useProjectStore } from '~/store/project'

const { $api } = useNuxtApp()
const projectStore = useProjectStore()
const emit = defineEmits(['close', 'create'])

const project = projectStore.project
const sprint = projectStore.sprint
const form = ref({
  name: null,
})

const handleCreateTask = async () => {
  try {
    const task = await $api.task.create({ name: form.value.name as any, sprint_id: sprint.id })
    emit('create', task)

    setTimeout(() => {
      form.value.name = null
    }, 500)
  } catch (error) {
    console.error('handleCreateTask: ', error)
  }
}
</script>

<template>
  <div class="form-create-task bg-white rounded-lg hover:shadow-sm flex flex-col cursor-pointer">
    <div class="mb-2 font-semibold">Tạo công việc</div>

    <q-form class="mb-3">
      <q-input placeholder="Nhập tên công việc" outlined v-model="form.name"></q-input>
    </q-form>

    <div class="flex justify-between">
      <q-btn color="primary" @click="handleCreateTask">Tạo</q-btn>
      <q-btn @click="emit('close')">Hủy</q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-create-task {
  padding: 8px 12px;

  .q-form {
    padding: 0;
  }
}
</style>
