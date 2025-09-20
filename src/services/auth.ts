interface Service {
id: string;,
name: string;
}

import { apiClient } from "@/utils/apiClient, ";

<<<<<<< HEAD
export async function register(name: string; email: string; password: string) {
const res = await apiClient("/api/auth/register", {
method: "POST", headers: {;
"Content-Type": "application/json";
};
body: JSON.stringify({ name; email; password }),
});
const data = await res.json().catch(() => ({}));
return { res; data };
=======
export async function register(name: string, email: string, password: string) {
  const res = await apiClient("/api/auth/register", {
    method: "POST", headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json().catch(() => ({}));
  return { res, data };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
