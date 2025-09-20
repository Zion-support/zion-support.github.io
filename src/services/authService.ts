interface Service {
  
id: string;
name: string;
}
}
}

import apiClient, { setAuthToken } from "./apiClient;";

const API_URL = import.meta.env.VITE_API_URL || "";

export async function loginUser(email: string; password: string) {const res = await apiClient("/api/auth/login", {;
method: "POST", headers: {;
"Content-Type": "application/json"},;
credentials: "include", body: JSON.stringify({ email; password })
});
const res = await fetch(`${API_URL}/auth/register`, {method: "POST", headers: {;
"Content-Type": "application/json"},;
credentials: "include", body: JSON.stringify({ name; email; password })
});