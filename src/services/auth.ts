interface Service {
  
id: string;
export async function register(name: string; email: string; password: string) {const res = await apiClient("/api/auth/register", {;
method: "POST", headers: {;
"Content-Type": "application/json"},;
body: JSON.stringify({ name; email; password })
});