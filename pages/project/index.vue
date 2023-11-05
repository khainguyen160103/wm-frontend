<script lang="ts" setup>
const { $api } = useNuxtApp()

definePageMeta({
  name: 'ProjectList',
})

useHead({
  title: 'Quản lý dự án',
})

// constants

// async data

// data
const projects = ref([])
const leader = ref(null)
const leaders = ref([])

// mounted
onMounted(() => {
  fetchData()
})

// methods
const fetchData = async () => {
  try {
    const result = (await $api.project.get()) || []
    projects.value = [...result] as any
  } catch (error) {
    console.error(error)
  }
}

const handleCreateProject = () => {
  console.log('handleCreateProject')
}
</script>

<template>
  <div class="q-pa-md example-row-equal-width project-page">
    <div class="filter flex justify-between mb-4">
      <div class="flex items-center gap-2">
        <q-input :dense="true" placeholder="Tìm kiếm dự án" outlined>
          <template v-slot:append>
            <q-icon name="eva-search-outline" />
          </template>
        </q-input>

        <q-select v-model="leader" outlined dense label="Chọn quản lý" clearable :options="leaders"></q-select>
      </div>
      <q-btn color="primary" @click="handleCreateProject">Tạo dự án</q-btn>
    </div>
    <div class="flex items-center justify-start gap-6">
      <ProjectCard class="col-5" :project="project" v-for="project in projects" :key="project.id" />
    </div>
  </div>
</template>
