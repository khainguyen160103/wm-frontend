<script lang="ts" setup>
useHead({
  title: "Quản lý tài khoản",
});

const columns = [
  {
    name: "index",
    label: "STT",
    field: "index",
  },
  {
    name: "name",
    required: true,
    label: "Tên tài khoản",
    align: "left",
    field: (row: any) => row.name,
  },
  {
    name: "email",
    align: "left",
    label: "Email",
    field: "email",
  },
  { name: "role", label: "Vai trò (g)", field: "role", sortable: true },
  {
    name: "updated_at",
    label: "Ngày cập nhật",
    field: "updated_at",
  },
  {
    name: "action",
    label: "",
    field: "iron",
  },
];

const rows: any = [
  {
    name: "Dai Cox",
    email: "lorem.donec@google.ca",
    role: "Người quản lý",
    updated_at: "Sep 4, 2023",
  },
  {
    name: "Ainsley Dejesus",
    email: "sagittis.nullam@hotmail.net",
    role: "Trưởng nhóm",
    updated_at: "May 16, 2024",
  },
  {
    name: "Thane Holman",
    email: "aliquet.proin.velit@outlook.com",
    role: "Trưởng nhóm",
    updated_at: "Apr 9, 2023",
  },
  {
    name: "Tyler Doyle",
    email: "diam.sed@hotmail.ca",
    role: "Người quản lý",
    updated_at: "Oct 30, 2023",
  },
  {
    name: "Lamar Delacruz",
    email: "a.ultricies@protonmail.couk",
    role: "Trưởng nhóm",
    updated_at: "Aug 11, 2023",
  },
  {
    name: "Dai Cox",
    email: "lorem.donec@google.ca",
    role: "Người quản lý",
    updated_at: "Sep 4, 2023",
  },
  {
    name: "Ainsley Dejesus",
    email: "sagittis.nullam@hotmail.net",
    role: "Trưởng nhóm",
    updated_at: "May 16, 2024",
  },
  {
    name: "Thane Holman",
    email: "aliquet.proin.velit@outlook.com",
    role: "Trưởng nhóm",
    updated_at: "Apr 9, 2023",
  },
  {
    name: "Tyler Doyle",
    email: "diam.sed@hotmail.ca",
    role: "Người quản lý",
    updated_at: "Oct 30, 2023",
  },
  {
    name: "Lamar Delacruz",
    email: "a.ultricies@protonmail.couk",
    role: "Trưởng nhóm",
    updated_at: "Aug 11, 2023",
  },
  {
    name: "Dai Cox",
    email: "lorem.donec@google.ca",
    role: "Người quản lý",
    updated_at: "Sep 4, 2023",
  },
  {
    name: "Ainsley Dejesus",
    email: "sagittis.nullam@hotmail.net",
    role: "Trưởng nhóm",
    updated_at: "May 16, 2024",
  },
  {
    name: "Thane Holman",
    email: "aliquet.proin.velit@outlook.com",
    role: "Trưởng nhóm",
    updated_at: "Apr 9, 2023",
  },
  {
    name: "Tyler Doyle",
    email: "diam.sed@hotmail.ca",
    role: "Người quản lý",
    updated_at: "Oct 30, 2023",
  },
  {
    name: "Lamar Delacruz",
    email: "a.ultricies@protonmail.couk",
    role: "Trưởng nhóm",
    updated_at: "Aug 11, 2023",
  },
  {
    name: "Dai Cox",
    email: "lorem.donec@google.ca",
    role: "Người quản lý",
    updated_at: "Sep 4, 2023",
  },
  {
    name: "Ainsley Dejesus",
    email: "sagittis.nullam@hotmail.net",
    role: "Trưởng nhóm",
    updated_at: "May 16, 2024",
  },
  {
    name: "Thane Holman",
    email: "aliquet.proin.velit@outlook.com",
    role: "Trưởng nhóm",
    updated_at: "Apr 9, 2023",
  },
  {
    name: "Tyler Doyle",
    email: "diam.sed@hotmail.ca",
    role: "Người quản lý",
    updated_at: "Oct 30, 2023",
  },
  {
    name: "Lamar Delacruz",
    email: "a.ultricies@protonmail.couk",
    role: "Trưởng nhóm",
    updated_at: "Aug 11, 2023",
  },
];

const stringOptions = [
  "Quản trị viên",
  "Người quản lý",
  "Trưởng nhóm",
  "Thành viên",
];
const role = ref(null);
const search = ref(null);
const isShow = ref(false);

rows.forEach((row: any, index: number) => {
  row.index = index + 1;
});
</script>

<template>
  <div class="account-page flex items-center gap-2">
    <div class="flex flex-row items-center justify-between w-full">
      <div class="q-table__title">Danh sách tài khoản</div>

      <div class="flex items-center gap-1">
        <q-input
          outlined
          v-model="search"
          placeholder="Tìm kiếm tài khoản"
          dense
        >
          <template v-slot:append>
            <q-icon name="eva-search-outline" />
          </template>
        </q-input>

        <q-select
          outlined
          dense
          placeholder="Chọn vai trò"
          :options="stringOptions"
          v-model="role"
        >
        </q-select>
        <q-btn color="primary" @click="isShow = true">Tạo tài khoản</q-btn>
      </div>
    </div>

    <q-table
      :rows="rows"
      :columns="columns"
      virtual-scroll
      style="height: calc(100vh - 134px)"
      class="w-full"
      row-key="name"
      flat
    />

    <q-dialog v-model="isShow">
      <q-card style="min-width: 800px">
        <q-card-section>
          <div class="text-h6">Tạo tài khoản</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form class="form-login">
            <q-input placeholder="Username" outlined class="mt-4"></q-input>
            <q-input
              placeholder="Email Address"
              outlined
              class="mt-4"
            ></q-input>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Hủy" v-close-popup />
          <q-btn flat label="Tạo" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
