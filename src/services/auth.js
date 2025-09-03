// comment
export class authService {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"
  }

  async get() {
    try {
      const response = await fetch("${this.baseUrl}/auth")
}
      return await response.json()
}
    } catch (error) {
      console.error("Error fetching data:", error)
}
      throw error
    }

  }



export default new authService()
}