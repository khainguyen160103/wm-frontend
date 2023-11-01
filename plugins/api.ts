import { $fetch, FetchOptions } from 'ohmyfetch'
import { defineNuxtPlugin } from '#app'
import { AccountRepository, AuthRepository, ProjectRepository, TaskRepository } from '@/repository/index'
import { TOKEN_NAME } from '~/constants/token'
import ColumnRepository from '~/repository/column/column.repository'

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthRepository
  account: AccountRepository
  project: ProjectRepository
  task: TaskRepository
  column: ColumnRepository
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL as string,
    headers: {},
    onRequest: (ctx) => {
      const token = localStorage.getItem(TOKEN_NAME)

      if (token) {
        ctx.options.headers = {
          Authorization: `Bearer ${token}`,
        }
      }
    },
  }

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions)

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    auth: new AuthRepository(apiFetcher),
    account: new AccountRepository(apiFetcher),
    project: new ProjectRepository(apiFetcher),
    task: new TaskRepository(apiFetcher),
    column: new ColumnRepository(apiFetcher),
  }

  return {
    provide: {
      api: modules,
    },
  }
})
