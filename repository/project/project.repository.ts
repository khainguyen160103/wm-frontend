import HttpFactory from '../factory'
import { ICreateProject } from './project.interface'

class ProjectRepository extends HttpFactory {
  private RESOURCE = '/project'

  async create(project: ICreateProject): Promise<any> {
    return await this.call('POST', `${this.RESOURCE}`, project)
  }

  async get(): Promise<any> {
    return await this.call('GET', `${this.RESOURCE}`)
  }
}

export default ProjectRepository
