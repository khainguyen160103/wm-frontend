import { useProjectStore } from '~/store/project'

export default defineNuxtRouteMiddleware(async (from, to) => {
  const projectStore = useProjectStore()
  const project = projectStore.project

  if (process.client) {
    if (!project) await projectStore.getProject()
  }
  return true
})
