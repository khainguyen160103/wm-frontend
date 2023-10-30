import { defineStore } from 'pinia'
import { IProject } from '~/repository/project/project.interface'

export const useProjectStore = defineStore('project', {
  state: () => ({ project: null as IProject | null }),

  actions: {
    async getProject() {
      const { $api } = useNuxtApp()

      try {
        const project = await $api.project.getById(1)

        if (project) this.project = project
      } catch (error) {
        console.log(error)
      }
    },
  },
})
