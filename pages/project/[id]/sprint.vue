<script lang="ts" setup>
import moment from 'moment'
import { useProjectStore } from '~/store/project'

definePageMeta({
  layout: 'project',
  middleware: ['project'],
  name: 'ProjectSprint',
})

useHead({
  title: 'Giai đoạn dự án',
})

const projectStore = useProjectStore()

const sprints = projectStore?.sprints || []

const formatDate = (date: string) => {
  return moment(date).format('DD/MM/YYYY')
}
</script>

<template>
  <div class="page-project-sprint">
    <div class="text-lg font-semibold flex justify-between mb-4">
      <div class="flex items-center gap-2">
        <q-icon name="eva-calendar-outline"></q-icon>
        <span>Giai đoạn</span>
      </div>
      <q-btn color="primary">Tạo giai đoạn</q-btn>
    </div>

    <q-timeline color="secondary" class="px-4" v-if="sprints.length">
      <div class="w-full">
        <q-timeline-entry v-for="sprint in sprints" :key="sprint.id">
          <template v-slot:title>{{ sprint.name }}</template>
          <template v-slot:subtitle>
            <span>Bắt đầu: {{ formatDate(sprint.start_at) }}</span>
            <template v-if="sprint.end_at">
              <span class="mx-2">-</span>
              <span>Kết thúc: {{ formatDate(sprint.end_at) }}</span>
            </template>
          </template>

          <div>
            {{ sprint.goal }}
          </div>
        </q-timeline-entry>

        <!-- <q-timeline-entry icon="eva-checkmark-outline">
          <template v-slot:title>Event Title</template>
          <template v-slot:subtitle>February 21, 1986</template>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry> -->
      </div>
    </q-timeline>

    <GlobalEmpty v-else />
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
