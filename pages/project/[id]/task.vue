<script lang="ts" setup>
const columns = [
  {
    id: 1,
    name: 'Mới',
    color: '#2980b9',
  },
  {
    id: 2,
    name: 'Đang làm',
    color: '#2ecc71',
  },
  {
    id: 3,
    name: 'Hoàn thành',
    color: '#1abc9c',
  },
]
</script>

<template>
  <div class="page-project-task flex flex-col">
    <div class="page-project-task__header overflow-auto flex flex-row justify-between w-full mb-4">
      <q-input outlined v-model="search" placeholder="Tìm kiếm công việc" dense>
        <template v-slot:append>
          <q-icon name="eva-search-outline" />
        </template>
      </q-input>

      <div class="flex items-center gap-2">
        <q-btn color="primary">Tạo công việc</q-btn>
      </div>
    </div>
    <div class="page-project-task__container overflow-auto flex flex-row w-full gap-4">
      <Column v-for="column in columns" :key="column.id" :column="column" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-project-task {
  &__container {
    height: calc(100vh - 144px);
  }
}
</style>
