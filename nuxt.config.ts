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

  modules: ["maz-ui/nuxt"],

  css: ["~/assets/style/main.scss", "~/assets/style/maz.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
