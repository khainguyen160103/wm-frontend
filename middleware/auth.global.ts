import { useAuthStore } from '~/store/auth'
import { useColumnStore } from '~/store/column'

export default defineNuxtRouteMiddleware(async (from, to) => {
  const authStore = useAuthStore()
  const columnStore = useColumnStore()

  if (['Login', 'ForgotPassword'].includes(from?.name as string)) return true

  let account = authStore?.$state?.account

  if (!process.client) return true

  if (!account) {
    // get profile
    account = await authStore.profile()
  }

  if (!account) {
    return navigateTo({ name: 'Login' })
  }

  const columns = columnStore.columns
  if (!columns.length) columnStore.getColumn()

  if (from.name === 'index') {
    return navigateTo({ name: 'ProjectList' })
  }

  return true
})
