export default defineNuxtRouteMiddleware(() => {
  console.log('auth middleware')
  return true
})
