<style lang="scss" scoped>
.sidebar-item {
  height: 48px;
}
</style>

<script lang="ts" setup>
import { computed } from 'vue'

// props
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { currentRoute } = useRouter()

// computed
const isActive = computed(() => {
  return currentRoute.value.name === props.item.path
})
</script>

<template>
  <q-item clickable v-ripple class="rounded-lg sidebar-item" :active="isActive" :to="item.path">
    <q-item-section>
      <div class="flex items-center gap-2 text-base">
        <q-icon :name="item.icon"></q-icon>
        <span>{{ item.name }}</span>
      </div>
    </q-item-section>
  </q-item>
</template>
