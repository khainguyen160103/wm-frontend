<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

definePageMeta({
  layout: 'empty',
  name: 'Login',
})

useHead({
  title: 'Đăng nhập',
})

// data
const account = reactive({
  email: null,
  password: null,
})
const isLoading = ref(false)

// methods
const handleLogin = async () => {
  isLoading.value = true
  await authStore.login(account)

  setTimeout(() => {
    isLoading.value = false
  }, 1000)
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

      <q-input v-model="account.password" placeholder="Mật khẩu" outlined class="mt-4" type="password"></q-input>

      <q-btn color="primary" label="ĐĂNG NHẬP" class="mt-4 w-full" @click="handleLogin" :loading="isLoading" />
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
