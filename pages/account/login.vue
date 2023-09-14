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
      <q-input placeholder="Username" outlined></q-input>
      <q-input placeholder="Email Address" outlined></q-input>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  .form-login {
    min-width: 50%;
    max-width: calc(100vw - 200px);
  }
}
</style>
