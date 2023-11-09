<script lang="ts" setup>
const appConfig = useAppConfig()
import { useQuasar } from 'quasar'

useHead({
  title: 'Quản trị công việc',
})

const $quasar = useQuasar()

$quasar.loading.show({})
</script>

<template>
  <div class="index-page"></div>
</template>
