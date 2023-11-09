import HttpFactory from '../factory'
import { ICreateTask, ITask } from './task.interface'

class TaskRepository extends HttpFactory {
  private RESOURCE = '/task'

  create(task: ICreateTask) {
    return this.call('POST', `${this.RESOURCE}`, task)
  }
}

export default TaskRepository
