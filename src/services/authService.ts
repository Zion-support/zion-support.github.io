interface Service {
  
id: string;
export async function loginUser(email: string; password: string) {const res = await apiClient("/api/auth/login", {;
method: "POST", headers: {;
"Content-Type": "application/json"},;
credentials: "include", body: JSON.stringify({ email; password })
});
const res = await fetch(`${API_URL}/auth/register`, {method: "POST", headers: {;
"Content-Type": "application/json"},;
credentials: "include", body: JSON.stringify({ name; email; password })
});