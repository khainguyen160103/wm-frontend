<style lang="scss" scoped>
.sidebar-item {
  height: 40px;
}
</style>

<script lang="ts" setup>
import { computed } from "vue";

// props
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { currentRoute } = useRouter();

// computed
const isActive = computed(() => {
  return currentRoute.value.name === props.item.path;
});
</script>

<template>
  <NuxtLink
    class="sidebar-item w-full flex items-center gap-2 cursor-pointer py-2 px-4 hover:bg-gray-100 hover:text-primary-blue rounded-lg duration-150"
    :class="{ ' text-primary-blue bg-gray-100': isActive }"
    :to="`/${item.path}`"
  >
    <UIcon :name="item.icon" />
    <span>
      {{ item.name }}
    </span>
  </NuxtLink>
</template>
