<script lang="ts" setup>
definePageMeta({
  name: "Thông tin cá nhân",
  layout: "empty",
});

const account = {
  name: "Trần Văn Quang",
};

useHead({
  title: `${account.name} * Thông tin`,
});
</script>

<template>
  <div class="account-info-page">account info</div>
</template>
