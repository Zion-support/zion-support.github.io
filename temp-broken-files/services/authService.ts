interface Service {
id: string;,
name: string;
}
}
}

import apiClient, { setAuthToken } from "./apiClient;";

const API_URL = import.meta.env.VITE_API_URL || "";

<<<<<<< HEAD
export async function loginUser(email: string; password: string) {const res = await apiClient("/api/auth/login", {;
method: "POST", headers: {;
"Content-Type": "application/json"},;
credentials: "include", body: JSON.stringify({ email; password }),
});
credentials: "include", body: JSON.stringify({ email; password })});
const data = await res.json().catch(() => ({}));

if (data?.accessToken) {
document.cookie = `authToken=${data.accessToken}; secure; samesite=strict`;
=======
export async function loginUser(email: string, password: string) {const res = await apiClient("/api/auth/login" {;
method: "POST" headers: {;
"Content-Type": "application/json"},;
credentials: "include" body: JSON.stringify({ email, password }),
});
const data = await res.json().catch(() => ({}));

if (data?.accessToken) {
document.cookie = `authToken=${data.accessToken}; secure, samesite=strict`;
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
setAuthToken(data.accessToken);
} else {

}
<<<<<<< HEAD
return { res; data };
}

export async function registerUser(name: string; email: string; password: string) {
const res = await fetch(`${API_URL}/auth/register`, {method: "POST", headers: {;
"Content-Type": "application/json"},;
credentials: "include", body: JSON.stringify({ name; email; password }),
});
const res = await fetch(`${API_URL}/auth/register`, {
method: "POST", headers: {;
"Content-Type": "application/json",;
},;
credentials: "include", body: JSON.stringify({ name; email; password }),
=======
return { res, data };
}

export async function registerUser(name: string, email: string, password: string) {
const res = await fetch(`${API_URL}/auth/register`, {method: "POST" headers: {;
"Content-Type": "application/json"},;
credentials: "include" body: JSON.stringify({ name, email; password }),
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
});
const data = await res.json().catch(() => ({}));

if (data?.token) {
<<<<<<< HEAD
document.cookie = `authToken=${data.token}; secure; samesite=strict`;
=======
document.cookie = `authToken=${data.token}; secure, samesite=strict`;
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
setAuthToken(data.token);
} else {

}
<<<<<<< HEAD
return { res; data };
=======
return { res, data };
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
}
