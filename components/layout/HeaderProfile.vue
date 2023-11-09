<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

const account = authStore.account
</script>

<template>
  <div class="layout-header w-full flex items-center justify-between border-b border-gray-200 py-2 px-4">
    <span class="font-semibold hover:underline cursor-pointer" v-if="account">{{ account.name }}</span>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  height: 44px;
}
</style>
