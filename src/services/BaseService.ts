
export abstract class BaseService {
  protected baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }
  
  protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, options)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  }
}

