<script setup lang="ts">
import { ref } from 'vue'
import { authStore } from '~/store/auth'

const store = authStore()

definePageMeta({
  layout: 'empty',
  name: 'WM Login',
})

useHead({
  title: 'WM Login',
})

// data
const account = reactive({
  email: null,
  password: null,
})

// methods
const handleLogin = async () => {
  console.log('handleLogin: ', account)
  await store.login(account)
}
</script>

<template>
  <div class="login-page w-full h-full flex items-center justify-center">
    <img
      src="https://media.istockphoto.com/id/1308949444/vector/business-meeting-illustration.jpg?s=612x612&w=0&k=20&c=3fEk-l6DdPP9ivUj59zHEb8Um-Hv85Zt-ExSz546DAo="
      alt=""
    />

    <!-- :validate="validate" -->
    <q-form :state="account" @submit="handleLogin" class="form-login border rounded-lg">
      <div class="flex flex-col">
        <h4>Đăng nhập</h4>
        <p>Hãy nhập email và mật khẩu để đăng nhập</p>
      </div>

      <q-input v-model="account.email" placeholder="Email" outlined class="mt-4"></q-input>

      <q-input v-model="account.password" placeholder="Mật khẩu" outlined class="mt-4"></q-input>

      <q-btn color="primary" label="ĐĂNG NHẬP" class="mt-4 w-full" @click="handleLogin" />
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  .form-login {
    padding: 20px;
    width: 450px;
  }
}
</style>
