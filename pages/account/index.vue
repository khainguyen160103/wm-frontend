<script lang="ts" setup>
import { IAccount } from '~/interfaces/account.interface'

const { $api } = useNuxtApp()

definePageMeta({
  name: 'AccountList',
})

useHead({
  title: 'Quản lý tài khoản',
})

// constants
const columns = [
  {
    name: 'index',
    label: 'ID',
    field: 'id',
  },
  {
    name: 'name',
    required: true,
    label: 'Tên tài khoản',
    align: 'left',
    field: (row: any) => row.name,
  },
  {
    name: 'email',
    align: 'left',
    label: 'Email',
    field: 'email',
  },
  { name: 'permissions', label: 'Vai trò', field: 'permission' },
  {
    name: 'updated_at',
    label: 'Ngày cập nhật',
    field: 'updated_at',
  },
  {
    name: 'action',
    label: '',
    field: 'iron',
  },
]
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

// data
const accounts = ref<IAccount[]>([])
const pagination = reactive({
  page: 1,
  rowsPerPage: 20,
  rowsNumber: 0,
})
const loading = ref(true)
const role = ref(null)
const search = ref(null)
const isShow = ref(false)

// mounted
onMounted(() => {
  fetchData()
})

// methods
const fetchData = async () => {
  loading.value = true
  try {
    const { data, page, pageSize, total } = await $api.account.list({
      query: {
        page: pagination.page,
        pageSize: pagination.rowsPerPage,
      },
      options: {
        order: {
          created_at: 'DESC',
        },
        relations: ['permissions'],
      },
    })

    accounts.value = data.map((account: any) => {
      return {
        ...account,
        permission: account.permissions[0]?.name,
      }
    })

    pagination.page = page
    pagination.rowsPerPage = pageSize
    pagination.rowsNumber = total
  } catch (error) {
    console.error(error)
  }

  loading.value = false
}

const addAccount = (account: IAccount) => {
  if (!account) return

  const permissionId = account.permissions?.[0]?.id
  const permission = permissions.find((p) => p.id === permissionId)

  accounts.value.unshift({
    ...account,
    permission: permission?.name,
  })
  isShow.value = false
}
</script>

<template>
  <div class="account-page flex items-center gap-2">
    <div class="flex flex-row items-center justify-between w-full">
      <div class="flex items-center gap-1">
        <q-input outlined v-model="search" placeholder="Tìm kiếm tài khoản" dense>
          <template v-slot:append>
            <q-icon name="eva-search-outline" />
          </template>
        </q-input>
        <q-select v-model="role" outlined dense label="Chọn vai trò" clearable :options="permissions"></q-select>
      </div>

      <q-btn color="primary" @click="isShow = true">Tạo tài khoản</q-btn>
    </div>

    <q-table
      :rows="accounts"
      :columns="columns"
      virtual-scroll
      style="height: calc(100vh - 134px)"
      class="w-full"
      :loading="loading"
      row-key="id"
      v-model:pagination="pagination"
      loading-label="Đang tải"
      no-data-label="Không có dữ liệu"
      flat
    />

    <!-- Dialog create account -->
    <q-dialog v-model="isShow">
      <AccountForm :is-show="isShow" @create="addAccount" />
    </q-dialog>
  </div>
</template>
