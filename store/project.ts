import { defineStore } from 'pinia'
import { IProject } from '~/repository/project/project.interface'

export const useProjectStore = defineStore('project', {
  state: () => ({ project: null as IProject | null }),

  actions: {
    async getProject() {
      const { $api } = useNuxtApp()
      const { currentRoute } = useRouter()

      const projectId = +currentRoute.value.params.id
      if (!projectId) return

      try {
        const project = await $api.project.getById(projectId)

        if (project) this.project = project
      } catch (error) {
        console.log(error)
      }
    },
  },
})
