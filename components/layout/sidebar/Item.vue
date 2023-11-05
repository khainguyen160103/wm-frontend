<style lang="scss" scoped>
.sidebar-item {
  height: 36px;
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
  return currentRoute.value.name === props.item.route
})
</script>

<template>
  <nuxt-link
    class="rounded-lg sidebar-item flex items-center gap-2 text-base hover:bg-gray-100 px-4 py-2"
    :class="{ 'is-active bg-gray-100': isActive }"
    :to="{ name: item.route }"
  >
    <q-icon :name="item.icon"></q-icon>
    <span>{{ item.name }}</span>
  </nuxt-link>
</template>
