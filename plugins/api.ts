import { $fetch, FetchOptions } from 'ohmyfetch'
import { defineNuxtPlugin } from '#app'
import {
  AccountRepository,
  AuthRepository,
  BoardRepository,
  ProjectRepository,
  SprintRepository,
  TaskRepository,
} from '@/repository/index'
import { TOKEN_NAME } from '~/constants/token'
import ColumnRepository from '~/repository/column/column.repository'

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthRepository
  account: AccountRepository
  project: ProjectRepository
  task: TaskRepository
  column: ColumnRepository
  sprint: SprintRepository
  board: BoardRepository
}

export default defineNuxtPlugin((nuxtApp) => {
  const { $config, $pinia } = nuxtApp

  const fetchOptions: FetchOptions = {
    baseURL: $config.public.API_BASE_URL as string,
    headers: {},
    onRequest: (ctx) => {
      const token = process.client ? localStorage.getItem(TOKEN_NAME) : null

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
    sprint: new SprintRepository(apiFetcher),
    board: new BoardRepository(apiFetcher),
  }

  return {
    provide: {
      api: modules,
    },
  }
})
