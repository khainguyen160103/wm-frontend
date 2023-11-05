<script lang="ts" setup>
definePageMeta({
  layout: 'project',
  middleware: ['project'],
  name: 'ProjectSprint',
})

useHead({
  title: 'Giai đoạn dự án',
})

const sprints = []
</script>

<template>
  <div class="page-project-sprint">
    <q-timeline color="secondary" class="px-4">
      <q-timeline-entry heading class="text-lg font-semibold flex justify-between mb-4">
        <span>Giai đoạn dự án</span>
        <q-btn color="primary">Tạo giai đoạn</q-btn>
      </q-timeline-entry>

      <GlobalEmpty v-if="!sprints.length" />

      <div v-else>
        <q-timeline-entry>
          <template v-slot:title>Event Title</template>
          <template v-slot:subtitle>February 22, 1986</template>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry icon="eva-checkmark-outline">
          <template v-slot:title>Event Title</template>
          <template v-slot:subtitle>February 21, 1986</template>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>
      </div>
    </q-timeline>
  </div>
</template>

<style lang="scss">
.page-project-sprint {
  .q-timeline {
    &__heading {
      > h3 {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 36px;

        .q-btn {
          height: 32px;
        }
      }
    }
  }
}
</style>
