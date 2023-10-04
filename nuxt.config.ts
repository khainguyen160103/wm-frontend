// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      prefix: "Layout",
      path: "~/components/layout",
      global: true,
    },
    {
      prefix: "Global",
      path: "~/components/global",
      global: true,
    },
  ],

  devtools: { enabled: false },

  colorMode: {
    preference: "light",
  },

  modules: ["@nuxt/ui"],

  css: ["~/assets/style/main.scss", "~/assets/style/maz.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
