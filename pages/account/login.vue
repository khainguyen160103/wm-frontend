<script setup lang="ts">
import { ref } from "vue";
import type { FormError, FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

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

// method
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

async function submit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <div
    class="login-page w-full h-full flex flex-col items-center justify-center"
  >
    <q-form
      :validate="validate"
      :state="account"
      @submit="submit"
      class="form-login"
    >
      <div class="flex flex-col">
        <h4>Sign in to your account</h4>
        <p>Enter your email & password to login</p>
      </div>
      <q-input placeholder="Username" outlined class="mt-4"></q-input>
      <q-input placeholder="Email Address" outlined class="mt-4"></q-input>
      <q-btn color="primary" label="LOGIN" class="mt-4" />
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  .form-login {
    padding: 20px;
    width: 450px;
    box-shadow: 0 0 37px #0815420d;
  }
}
</style>
