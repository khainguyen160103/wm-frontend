<script lang="ts" setup>
const { $api } = useNuxtApp()

useHead({
  title: 'Quản lý dự án',
})

// constants

// async data

// data
const projects = ref([])

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
</script>

<template>
  <div class="q-pa-md example-row-equal-width project-page">
    <div class="filter"></div>
    <div class="flex items-center justify-start gap-8">
      <ProjectCard class="col-5" :project="project" v-for="project in projects" :key="project.id" />
    </div>
  </div>
</template>
