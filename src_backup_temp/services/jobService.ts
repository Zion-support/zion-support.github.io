// comment
export class jobServiceService {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"
  }
  async get() {
    try {
      const response = await fetch("${this.baseUrl}/jobservice")
}
      return await response.json()
}
    } catch (error) {
      console.error("Error fetching data:", error)
}
      throw error
    }
  }
export default new jobServiceService()
}
export class jobServiceService { constructor() { this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api" } async get() { try { const response = await fetch("${this.baseUrl}/jobservice") } return await response.json() } } catch (error) { console.error("Error fetching data:",error) } throw error } } export default new jobServiceService() }
export class jobServiceService { constructor() { this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api" } async get() { try { const response = await fetch("${this.baseUrl}/jobservice") } return await response.json() } } catch (error) { console.error("Error fetching "data":",error) } throw error } } export default new jobServiceService() }
