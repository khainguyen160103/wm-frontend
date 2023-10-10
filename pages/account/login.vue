<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "empty",
  name: "WM Login",
});

useHead({
  title: "WM Login",
});

// data
const account = ref({
  mail: null,
  password: null,
});
</script>

<template>
  <div class="login-page w-full h-full flex items-center justify-center">
    <img
      src="https://i.pinimg.com/736x/27/1f/5b/271f5bc215da9fcf28b519c513b4a91e.jpg"
      alt=""
    />

    <q-form
      :validate="validate"
      :state="account"
      @submit="submit"
      class="form-login border rounded-lg"
    >
      <div class="flex flex-col">
        <h4>Sign in to your account</h4>
        <p>Enter your email & password to login</p>
      </div>
      <q-input placeholder="Username" outlined class="mt-4"></q-input>
      <q-input placeholder="Email Address" outlined class="mt-4"></q-input>
      <q-btn color="primary" label="LOGIN" class="mt-4 w-full" />
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
