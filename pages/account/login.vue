<script setup>
definePageMeta({
  layout: "empty",
});
</script>

<template>
  <div
    class="login-page w-full h-full flex flex-col items-center justify-center"
  >
    <q-form class="form-login">
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
    width: 450px;
    box-shadow: 0 0 37px #0815420d;
  }
}
</style>
