<script lang="ts" setup>
useHead({
  title: "Quản lý dự án",
});

const projects = [
  {
    id: 1,
    name: "project 1",
  },
  {
    id: 2,
    name: "project 1",
  },
  {
    id: 3,
    name: "project 1",
  },
  {
    id: 4,
    name: "project 1",
  },
  {
    id: 54,
    name: "project 1",
  },
  {
    id: 6,
    name: "project 1",
  },
  {
    id: 7,
    name: "project 1",
  },
];
</script>

<template>
  <div class="q-pa-md example-row-equal-width project-page">
    <div class="filter"></div>
    <div class="flex items-center justify-start gap-8">
      <ProjectCard
        class="col-5"
        :project="project"
        v-for="project in projects"
        :key="project.id"
      />
    </div>
  </div>
</template>
