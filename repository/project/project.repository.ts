import HttpFactory from '../factory'
import { ICreateProject, IProject } from './project.interface'

class ProjectRepository extends HttpFactory {
  private RESOURCE = '/project'

  async create(project: ICreateProject): Promise<IProject> {
    return await this.call('POST', `${this.RESOURCE}`, project)
  }

  async get(): Promise<IProject[]> {
    return await this.call('GET', `${this.RESOURCE}`)
  }

  async getById(id: number): Promise<IProject> {
    return await this.call('GET', `${this.RESOURCE}/${id}`)
  }
}

export default ProjectRepository
