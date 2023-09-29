import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      prefix: "Layout",
      path: resolve("./components/layout"),
      global: true,
    },
    {
      prefix: "Global",
      path: resolve("./components/global"),
      global: true,
    },
  ],

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
