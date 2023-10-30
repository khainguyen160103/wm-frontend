import { defineStore } from 'pinia'
import { TOKEN_NAME } from '~/constants/token'

const { $api } = useNuxtApp()

interface IAccount {}

interface ILogin {
  email: string | null
  password: string | null
}

export const authStore = defineStore('auth', {
  state: () => ({ account: null as IAccount | null }),

  actions: {
    async login(account: ILogin) {
      try {
        const response = await $api.auth.login(account)

        if (response.access_token) {
          localStorage.setItem(TOKEN_NAME, response.access_token)
        }

        // handle redirect to index
      } catch (error) {
        console.error(`login: `, error)
      }
    },

    logout() {
      localStorage.removeItem(TOKEN_NAME)
    },

    profile() {},
  },
})
