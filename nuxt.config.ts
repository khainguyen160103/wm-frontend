// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["nuxt-quasar-ui"],

  quasar: {
    /* */
  },

  css: ["~/assets/style/main.scss", "~/assets/style/quasar.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
