import { defineStore } from 'pinia'
import { TOKEN_NAME } from '~/constants/token'

interface IAccount {}

interface ILogin {
  email: string | null
  password: string | null
}

export const useAuthStore = defineStore('auth', {
  state: () => ({ account: null as IAccount | null }),

  actions: {
    async login(account: ILogin) {
      const { $api } = useNuxtApp()

      try {
        const response = await $api.auth.login(account)
        if (response.access_token) {
          localStorage.setItem(TOKEN_NAME, response.access_token)
        }
        this.profile()
        await navigateTo({ path: '/project' })
        // handle redirect to index
      } catch (error) {
        console.error(`login: `, error)
      }
    },

    async logout() {
      localStorage.removeItem(TOKEN_NAME)
      this.account = null
      await navigateTo({ path: '/account/login' })
    },

    async profile() {
      const { $api } = useNuxtApp()

      try {
        const account = await $api.account.profile()
        this.account = account
      } catch (error) {
        console.error(`login: `, error)
      }
    },
  },
})
