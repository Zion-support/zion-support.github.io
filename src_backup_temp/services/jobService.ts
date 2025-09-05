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
<<<<<<< HEAD
export class jobServiceService { constructor() { this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api" } async get() { try { const response = await fetch("${this.baseUrl}/jobservice") } return await response.json() } } catch (error) { console.error("Error fetching "data":",error) } throw error } } export default new jobServiceService() }
=======
export class jobServiceService { constructor() { this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api" } async get() { try { const response = await fetch("${this.baseUrl}/jobservice") } return await response.json() } } catch (error) { console.error("Error fetching "data":",error) } throw error } } export default new jobServiceService() }
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
