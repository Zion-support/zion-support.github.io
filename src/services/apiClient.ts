<<<<<<< HEAD
import axios from 'axios'; import { toast  } from 'react-hot-toast'; const apiClient = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || '/api', withCredentials: true, timeout: 10000, headers: { 'Content-Type': 'application/json', }, });
=======
// comment
export class apiClientService {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"
  }

  async get() {
    try {
      const response = await fetch("${this.baseUrl}/apiclient")
}
      return await response.json()
}
    } catch (error) {
      console.error("Error fetching data:", error)
}
      throw error
    }

  }



export default new apiClientService()
}
>>>>>>> main
