<script lang="ts" setup>
const account = ref({
  name: 'QuangTV',
  avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
})
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

const handleLogout = async () => {
  console.log('handleLogout')
  await authStore.logout()
}
</script>

<template>
  <div class="">
    <q-avatar size="36px" class="cursor-pointer">
      <img :src="account.avatar" />
    </q-avatar>

    <q-menu touch-position anchor="bottom end" transition-show="jump-down" transition-hide="jump-up">
      <q-list style="min-width: 120px">
        <q-item clickable v-close-popup style="width: 180px">
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
