import HttpFactory from '../factory'

class AccountRepository extends HttpFactory {
  private RESOURCE = '/account'

  async list(params: { query: any; options?: any }): Promise<any> {
    return await this.call('POST', `${this.RESOURCE}/list`, params)
  }
}

export default AccountRepository
