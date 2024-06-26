// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      prefix: 'Layout',
      path: '~/components/layout',
      global: true,
    },
    {
      prefix: 'Global',
      path: '~/components/global',
      global: true,
    },
    {
      prefix: 'Project',
      path: '~/components/project',
      global: true,
    },
    {
      prefix: 'Account',
      path: '~/components/account',
      global: true,
    },
    {
      prefix: 'Column',
      path: '~/components/column',
      global: true,
    },
    {
      prefix: 'Task',
      path: '~/components/task',
      global: true,
    },
  ],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  devtools: { enabled: false },

  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],

  quasar: {
    extras: {
      fontIcons: ['eva-icons'],
    },
    plugins: ['Loading'],
    config: {
      loading: {
        delay: 500,
      },
    },
  },

  css: ['~/assets/style/main.scss', '~/assets/style/quasar.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // piniaPersistedstate
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
})
