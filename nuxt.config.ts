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
    {
      prefix: "Project",
      path: "~/components/project",
      global: true,
    },
  ],

  devtools: { enabled: false },

  modules: ["nuxt-quasar-ui"],

  quasar: {
    extras: {
      fontIcons: ["eva-icons"],
    },
  },

  css: ["~/assets/style/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
