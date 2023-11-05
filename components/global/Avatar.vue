<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
const account = authStore.account

const handleLogout = async () => {
  await authStore.logout()
}

const toProfile = async () => {
  return navigateTo({ name: 'AccountProfile' })
}
</script>

<template>
  <div v-if="account">
    <div class="flex items-center gap-2">
      <AccountAvatar :color="account.color" :src="account.avatar" :name="account.name" :size="24" />
      <span class="truncate text-" style="max-width: 160px">{{ account.name }}</span>
    </div>

    <q-menu touch-position anchor="bottom end" transition-show="jump-down" transition-hide="jump-up">
      <q-list style="min-width: 120px">
        <q-item clickable v-close-popup style="width: 180px" @click="toProfile">
          <q-item-section>
            <div class="flex items-center gap-2">
              <q-icon name="eva-person-outline"></q-icon>
              <span>Thông tin cá nhân</span>
            </div>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup style="width: 180px" @click="handleLogout">
          <q-item-section class="hover:text-red-400 duration-100">
            <div class="flex items-center gap-2">
              <q-icon name="eva-log-out-outline"></q-icon>
              <span>Đăng xuất</span>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<style lang="scss" scoped></style>
