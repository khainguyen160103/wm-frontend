import { $fetch, FetchOptions } from 'ohmyfetch'
import { defineNuxtPlugin } from '#app'
import { AuthRepository } from '@/repository/index'

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthRepository
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL as string,
    headers: {},
  }

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions)

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    auth: new AuthRepository(apiFetcher),
  }

  return {
    provide: {
      api: modules,
    },
  }
})
