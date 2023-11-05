<script lang="ts" setup></script>

<template>
  <div class="form-create-task bg-white rounded-lg hover:shadow-sm flex flex-col cursor-pointer">
    <div class="mb-2 font-semibold">Tạo công việc</div>

    <q-form class="mb-3">
      <q-input placeholder="Nhập tên công việc" outlined></q-input>
    </q-form>

    <div class="flex justify-between">
      <q-btn color="primary">Tạo</q-btn>
      <q-btn>Hủy</q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-create-task {
  padding: 8px 12px;

  .q-form {
    padding: 0;
  }
}
</style>
