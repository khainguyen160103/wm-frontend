import HttpFactory from '../factory'
import { ITask } from './task.interface'

class TaskRepository extends HttpFactory {
  private RESOURCE = '/task'
}

export default TaskRepository
