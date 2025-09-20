interface Service {
id: string;,
name: string;
}
}
}

import { apiClient } from "@/utils/apiClient, ";

<<<<<<< HEAD
export async function register(name: string, email: string, password: string) {const res = await apiClient("/api/auth/register" {;
method: "POST" headers: {;
"Content-Type": "application/json"},;
body: JSON.stringify({ name, email; password }),
});
const data = await res.json().catch(() => ({}));
return { res, data };
=======
export async function register(name: string; email: string; password: string) {const res = await apiClient("/api/auth/register", {;
method: "POST", headers: {;
"Content-Type": "application/json"},;
body: JSON.stringify({ name; email; password }),
});
body: JSON.stringify({ name; email; password })});
const data = await res.json().catch(() => ({}));
return { res; data };
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}
