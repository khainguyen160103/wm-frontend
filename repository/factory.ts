import { $Fetch } from 'ohmyfetch'

type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

class HttpFactory {
  private $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  /**
   * method - GET, POST, PUT
   * URL
   **/
  async call<T>(method: HttpMethod, url: string, data?: object, extras = {}): Promise<T> {
    if (method === 'POST') {
      if (!data) data = {}
      data = JSON.stringify(data) as any
    }

    const $res: T = await this.$fetch(url, { method, body: data, ...extras })
    return $res
  }
}

export default HttpFactory
