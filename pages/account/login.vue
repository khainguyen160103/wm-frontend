<script setup>
definePageMeta({
  layout: "empty",
  name: "WM Login",
});

useHead({
  title: "WM Login",
});

// data
let isPwd = ref(true);
const account = ref({
  mail: null,
  password: null,
});

// method
const showPassword = () => {
  isPwd = !isPwd;
};
</script>

<template>
  <div
    class="login-page w-full h-full flex flex-col items-center justify-center"
  >
    <form class="form-login">
      <div class="flex flex-col">
        <h4>Sign in to your account</h4>
        <p class="text-light-grey font-medium">
          Enter your email & password to login
        </p>
      </div>

      <MazInput v-model="account.email" label="Email" class="mt-4" />

      <MazInput
        v-model="account.password"
        label="Password"
        type="password"
        class="mt-4"
      />

      <MazBtn color="primary" class="mt-4 uppercase w-full">LOGIN</MazBtn>
    </form>
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
