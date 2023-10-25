<script lang="ts" setup>
const appConfig = useAppConfig()

useHead({
  title: 'Work Management',
})

definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div>Index page</div>
</template>
