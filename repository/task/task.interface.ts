export interface ITask {}

export interface ICreateTask {
  sprint_id: number
  board_id?: number
  name: string | null
  task_in_column: any
}
