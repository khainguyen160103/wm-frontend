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
  <div class="account-avatar" :style="`width: ${size}px; height: ${size}px`">
    <q-avatar :size="size + 'px'" :color="color" text-color="white" rounded font-size="18">
      <img v-if="src" :src="src" :alt="name" />
      {{ twoFirstLetter }}
      <!-- <template v-else>{{ twoFirstLetter }}</template> -->
    </q-avatar>
  </div>
</template>
