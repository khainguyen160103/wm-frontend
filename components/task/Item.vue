<script lang="ts" setup>
import moment from 'moment'

// props
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
})

//methods
const formatDate = (date: string) => {
  return moment(date).format('DD/MM/YYYY')
}
</script>

<template>
  <div class="task-item w-full bg-white rounded-lg hover:shadow-sm flex flex-col gap-1 cursor-pointer">
    <nuxt-link class="font-semibold hover:underline cursor-pointer" :to="`task/${task.id}`">{{ task.name }}</nuxt-link>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-0.5">
        <q-icon name="eva-book-outline"></q-icon>
        #{{ task.id }}
      </div>

      <span>{{ formatDate(task.due_date) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-item {
  padding: 8px 12px;
}
</style>
