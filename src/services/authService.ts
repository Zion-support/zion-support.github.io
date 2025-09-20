interface Service {
  
id: string;
export async function loginUser(email: string; password: string) {const res = await apiClient("/api/auth/login", {;
method: "POST", headers: {;
"Content-Type": "application/json"},;
