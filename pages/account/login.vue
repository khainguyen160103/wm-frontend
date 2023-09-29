<script setup>
definePageMeta({
  layout: "empty",
});

// data
let isPwd = ref(true);
const account = ref({
  mail: null,
  password: null,
});

// method
const showPassword = () => {
  console.log("showPassword");
  isPwd = !isPwd;
  console.log(isPwd);
};
</script>

<template>
  <div
    class="login-page w-full h-full flex flex-col items-center justify-center"
  >
    <q-form class="form-login">
      <div class="flex flex-col">
        <h4>Sign in to your account</h4>
        <p class="text-light-grey font-medium">
          Enter your email & password to login
        </p>
      </div>
      <q-input
        v-model="account.mail"
        placeholder="Email"
        outlined
        class="mt-4"
      ></q-input>

      <q-input
        v-model="account.password"
        placeholder="Password"
        outlined
        class="mt-4"
        type="password"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="showPassword"
          />
        </template>
      </q-input>

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
