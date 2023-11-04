<script lang="ts" setup>
definePageMeta({
  layout: 'project',
  middleware: ['project'],
})

useHead({
  title: 'Quản lý công việc',
})

// data
const columns = ref([
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
])

// data
const value = ref(true)
const search = ref(null)
const refColumn = ref(null)

// methods
const showCreate = () => {}
</script>

<template>
  <div class="page-project-task flex flex-col flex-nowrap">
    <!-- Header -->
    <div class="page-project-task__header flex flex-row justify-between w-full mb-4">
      <q-input outlined v-model="search" placeholder="Tìm kiếm công việc" dense>
        <template v-slot:append>
          <q-icon name="eva-search-outline" />
        </template>
      </q-input>

      <div class="flex items-center gap-2">
        <q-toggle v-model="value" color="primary" left-label label="Hiển thị thẻ" />
        <q-btn color="primary" @click="showCreate">Tạo công việc</q-btn>
      </div>
    </div>

    <!-- Container -->
    <div class="page-project-task__container flex flex-row flex-nowrap w-full gap-4 overflow-x-auto">
      <Column v-for="column in columns" :key="column.id" :column="column" ref="refColumn" />
    </div>
  </div>
</template>

<style lang="scss">
.page-project-task {
  &.page {
    padding-bottom: 0px !important;
  }

  &__container {
    height: calc(100vh - 132px);
    width: calc(100vw - 292px);
    padding-bottom: 16px;
  }
}
</style>
