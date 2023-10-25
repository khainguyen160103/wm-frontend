import HttpFactory from '../factory'
import { ICreateAccountInput, ICreateAccountResponse, ILoginInput, ILoginResponse } from './auth.interface'

class AuthRepository extends HttpFactory {
  private RESOURCE = '/auth'

  async login(credentials: ILoginInput): Promise<ILoginResponse> {
    return await this.call<ILoginResponse>('POST', `${this.RESOURCE}/login`, credentials)
  }

  async create(account: ICreateAccountInput): Promise<ICreateAccountResponse> {
    return await this.call<ICreateAccountResponse>('POST', `${this.RESOURCE}/register`, account)
  }

  async list(params: any): Promise<any> {
    return await this.call('POST', `${this.RESOURCE}/login`, params)
  }
}

export default AuthRepository
