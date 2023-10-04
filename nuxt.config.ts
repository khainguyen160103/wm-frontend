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
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
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
