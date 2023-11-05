export interface IAccount {
  id?: number
  name?: string
  email?: string
  phone?: string
  date_of_birth?: string
  gender?: number
  color?: string
  created_at?: Date | string
  updated_at?: Date | string
  permissions?: any[]
  permission?: any
}
