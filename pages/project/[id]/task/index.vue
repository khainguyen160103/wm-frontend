<script lang="ts" setup>
import { useProjectStore } from '~/store/project'
import { useColumnStore } from '~/store/column'

definePageMeta({
  layout: 'project',
  middleware: ['project'],
  name: 'ProjectTask',
})

useHead({
  title: 'Quản lý công việc',
})

// store
const projectStore = useProjectStore()
const columnStore = useColumnStore()

// data
const columns = [...columnStore.columns]
const project = projectStore.project

// data
const value = ref(true)
const search = ref(null)
const boardId = ref(null)
const refColumn = ref(null)
const isShowCreate = ref(false)

// methods
const showCreate = () => {
  isShowCreate.value = true
}

const closeCreate = () => {
  isShowCreate.value = false
}
</script>

<template>
  <div class="page-project-task flex flex-col flex-nowrap">
    <!-- Header -->
    <div class="page-project-task__header flex flex-row justify-between w-full mb-4">
      <div class="flex items-center gap-2">
        <template v-if="project && project.type === 'kanban'">
          <q-select
            v-model="boardId"
            outlined
            dense
            label="Chọn bảng"
            option-label="name"
            option-value="id"
            clearable
            style="min-width: 130px"
            :options="[]"
          ></q-select>
        </template>
        <q-input outlined v-model="search" placeholder="Tìm kiếm công việc" dense>
          <template v-slot:append>
            <q-icon name="eva-search-outline" />
          </template>
        </q-input>
      </div>

      <div class="flex items-center gap-2">
        <q-toggle v-model="value" color="primary" left-label label="Hiển thị thẻ" />
        <q-btn color="primary" @click="showCreate">Tạo công việc</q-btn>
      </div>
    </div>

    <!-- Container -->
    <div class="page-project-task__container flex flex-row flex-nowrap w-full gap-4 overflow-x-auto">
      <Column
        v-for="column in columns"
        :key="column.id"
        :column="column"
        ref="refColumn"
        @close="closeCreate"
        :is-show-create="isShowCreate"
      />
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
