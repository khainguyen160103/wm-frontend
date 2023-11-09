<script lang="ts" setup>
import moment from 'moment'
import project from '~/middleware/project'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

// computed
const linkDetail = computed(() => {
  if (!props.project?.id) return {}

  return {
    name: 'ProjectTask',
    params: {
      id: props.project.id,
    },
  }
})

//methods
const formatDate = (date: string) => {
  if (!date) return null
  return moment(date).format('DD/MM/YYYY')
}
</script>

<template>
  <nuxt-link :to="linkDetail">
    <div class="project-card flex flex-col justify-between border border-gray-200 hover:shadow-md">
      <div class="project-card__content flex flex-col gap-1">
        <div class="flex flex-row items-center justify-between">
          <AccountAvatar
            :src="$_.get(project, 'avatar')"
            :name="$_.get(project, 'name')"
            :color="$_.get(project, 'color')"
            :size="36"
          />
          <span>{{ formatDate(project.updated_at) }}</span>
        </div>
        <span class="font-bold text-xl truncate mt-2">{{ $_.get(project, 'name') }}</span>
        <span class="truncate">{{ $_.get(project, 'description') }}</span>
      </div>

      <div class="project-card__leader py-2 bg-gray-100 relative border-t border-gray-200">
        <AccountAvatar
          :src="$_.get(project, 'leader.avatar')"
          :name="$_.get(project, 'leader.name')"
          :color="$_.get(project, 'leader.color')"
          :size="24"
        />

        {{ $_.get(project, 'leader.name') }}
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.project-card {
  height: 180px;
  min-width: 320px;
  border-radius: 12px;
  position: relative;
  user-select: none;
  cursor: pointer;

  // &:hover {
  //   box-shadow: 0px 0px 0px 2px var(--q-primary);
  // }

  &__content {
    padding: 20px 20px 0px 20px;
  }

  &__leader {
    padding: 8px 20px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
</style>
