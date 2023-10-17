<script lang="ts" setup></script>

<template>
  <q-card style="min-width: 800px">
    <q-card-section>
      <div class="text-h6">Tạo tài khoản</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-form class="form-login">
        <q-input placeholder="Username" outlined class="mt-4"></q-input>
        <q-input placeholder="Email Address" outlined class="mt-4"></q-input>
      </q-form>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Hủy" v-close-popup />
      <q-btn flat label="Tạo" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
