export interface IProject {
  id?: number
  name?: string
  description?: string
  avatar?: string
  type?: string
  color?: string
  leader_id?: number
  created_at?: Date | string
  updated_at?: Date | string
  sprints?: any[]
  boards?: any[]
}

export interface ICreateProject {}
