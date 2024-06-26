import { useProjectStore } from '~/store/project'

export default defineNuxtRouteMiddleware(async (from, to) => {
  if (!process.client) return true

  const projectStore = useProjectStore()
  // const project = projectStore.project
  // if (!project)
  await projectStore.getProject()
  return true
})
