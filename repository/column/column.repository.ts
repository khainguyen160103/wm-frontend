import { IColumn } from '~/interfaces/column.interface'
import HttpFactory from '../factory'

class ColumnRepository extends HttpFactory {
  private RESOURCE = '/column'

  async get(): Promise<IColumn[]> {
    return await this.call('GET', `${this.RESOURCE}`)
  }

  async create(payload: { name: string; color?: string }): Promise<IColumn[]> {
    return await this.call('POST', `${this.RESOURCE}`, payload)
  }

  async update(payload: { column_id: number; name: string; color?: string }): Promise<IColumn[]> {
    return await this.call('PUT', `${this.RESOURCE}`, payload)
  }
}

export default ColumnRepository
