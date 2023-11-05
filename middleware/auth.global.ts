import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(async (from, to) => {
  const authStore = useAuthStore()

  if (from.name === 'Login') return true

  let account = authStore?.$state?.account

  if (process.client) {
    if (!account) {
      // get profile
      account = await authStore.profile()
    }

    if (account && from.name === 'index') {
      return navigateTo({ name: 'ProjectList' })
    }

    if (!account) {
      return navigateTo({ name: 'Login' })
    }
  }

  return true
})
