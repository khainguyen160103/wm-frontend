export interface ICreateAccountInput {}
export interface ICreateAccountResponse {}
export interface ILoginInput {}
export interface ILoginResponse {
  access_token?: string | null
}

export interface IChangePassword {
  email: string

  password: string
}
