import { IColumn } from '~/interfaces/column.interface'
import HttpFactory from '../factory'

class ColumnRepository extends HttpFactory {
  private RESOURCE = '/column'

  async get(): Promise<IColumn[]> {
    return await this.call('GET', `${this.RESOURCE}`)
  }
}

export default ColumnRepository
