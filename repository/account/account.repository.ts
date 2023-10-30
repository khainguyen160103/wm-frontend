import HttpFactory from '../factory'
import { IAccount } from './account.interface'

class AccountRepository extends HttpFactory {
  private RESOURCE = '/account'

  async list(params: { query: any; options?: any }): Promise<any> {
    return await this.call('POST', `${this.RESOURCE}/list`, params)
  }

  async profile(): Promise<IAccount> {
    return await this.call('GET', `${this.RESOURCE}/profile`)
  }
}

export default AccountRepository
