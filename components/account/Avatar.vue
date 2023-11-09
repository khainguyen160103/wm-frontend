<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
  },
  src: {
    type: String,
  },
  name: {
    type: String,
  },
  size: {
    type: Number,
    default: 36,
  },
})

// a computed ref
const twoFirstLetter = computed(() => {
  return props.name?.substring(0, 2).toUpperCase()
})
</script>

<template>
  <q-avatar
    class="account-avatar select-none"
    :size="size + 'px'"
    text-color="white"
    font-size="18"
    :style="`background-color: ${color}`"
  >
    <template v-slot:default>
      <img v-if="src" :src="src" :alt="name" />
      <template v-else>{{ twoFirstLetter }}</template>
    </template>
  </q-avatar>
</template>
