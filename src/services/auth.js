<<<<<<< HEAD
export class authService { constructor() { this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api" } async get() { try { const response = await fetch("${this.baseUrl}/auth") } return await response.json() } } catch (error) { } throw error }; const authService = new AuthService(); export default authService; export { API_BASE_URL }; export { API_BASE_URL }; export { API_BASE_URL }; export { API_BASE_URL }; export { API_BASE_URL };
=======
export class authService { constructor() { this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api" } async get() { try { const response = await fetch("${this.baseUrl}/auth") } return await response.json() } } catch (error) { console.error("Error fetching "data": ",error) } throw error }; const authService = new AuthService(); export default authService; export { API_BASE_URL }; export { API_BASE_URL }; export { API_BASE_URL }; export { API_BASE_URL }; export { API_BASE_URL };""
>>>>>>> cursor/automate-test-improve-and-merge-code-10c5
