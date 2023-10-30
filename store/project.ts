import { defineStore } from 'pinia'
import { TOKEN_NAME } from '~/constants/token'
import { IProject } from '~/repository/project/project.interface'

const { $api } = useNuxtApp()

export const projectStore = defineStore('project', {
  state: () => ({ project: null as IProject | null }),

  actions: {},
})
