<script lang="ts" setup>
import api from '~/plugins/api'

const { $api } = useNuxtApp()

const emit = defineEmits(['create'])

const permissions = [
  {
    id: 1,
    name: 'Quản trị viên',
  },
  {
    id: 2,
    name: 'Người quản lý',
  },
  {
    id: 3,
    name: 'Trưởng nhóm',
  },
  {
    id: 4,
    name: 'Thành viên',
  },
]

const form = ref({
  name: null,
  email: null,
  permissionId: null,
})

// methods
const handleCreateAccount = async () => {
  try {
    const response = await $api.auth.create({
      name: form.value.name,
      email: form.value.email,
      permissions: [{ id: form.value.permissionId }],
    })

    if (response) emit('create', response)
  } catch (error) {
    console.error('handleCreateAccount: ', error)
  }
}
</script>

<template>
  <div style="min-width: 800px" class="bg-white">
    <div class="px-4 py-2 text-h6">Tạo tài khoản</div>

    <q-form class="">
      <div>
        <label>Tên người dùng</label>
        <q-input v-model="form.name" placeholder="Tên người dùng" outlined></q-input>
      </div>
      <div>
        <label>Email</label>
        <q-input v-model="form.email" placeholder="Email" outlined></q-input>
      </div>
      <div>
        <label>Vai trò</label>
        <q-select
          v-model="form.permissionId"
          outlined
          dense
          label="Chọn vai trò"
          clearable
          :options="permissions"
          option-label="name"
          option-value="id"
        ></q-select>
      </div>
    </q-form>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Hủy" v-close-popup />
      <q-btn flat label="Tạo" @click="handleCreateAccount" color="primary" />
    </q-card-actions>
  </div>
</template>

<style lang="scss">
.account-form {
}
</style>
