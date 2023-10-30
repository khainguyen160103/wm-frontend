import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(async (from, to) => {
  // const authStore = useAuthStore()
  // let account = authStore?.$state?.account
  // // console.log('account: ', account)

  // if (!account) {
  //   // get profile
  //   console.log('get profile')
  //   account = await authStore.profile()
  // }

  // if (account) {
  //   console.log('from: ', from)
  //   console.log('to: ', to)
  //   // return navigateTo({ path: from.path })
  // }

  // if (from.path === '/account/login') return true
  // console.log('account: ', account)

  // if (!account) {
  //   console.log('redirect to login')
  //   return navigateTo({ path: '/account/login' })
  // }

  return true
})
