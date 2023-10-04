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
    <UForm
      :validate="validate"
      :state="account"
      @submit="submit"
      class="form-login"
    >
      <div class="flex flex-col">
        <h4>Sign in to your account</h4>
        <p class="text-light-grey font-medium">
          Enter your email & password to login
        </p>
      </div>

      <UFormGroup label="Email" name="email" class="mt-4">
        <UInput v-model="account.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password" class="mt-4">
        <UInput v-model="account.password" type="password" />
      </UFormGroup>

      <UButton type="submit" class="w-full mt-4 text-center"> Submit </UButton>
    </UForm>
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
