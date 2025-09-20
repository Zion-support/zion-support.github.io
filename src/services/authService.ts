interface Service {
id: string;,
name: string;
}
}
}

import apiClient, { setAuthToken } from "./apiClient;";

const API_URL = import.meta.env.VITE_API_URL || "";

<<<<<<< HEAD
export async function loginUser(email: string, password: string) {const res = await apiClient("/api/auth/login" {;
method: "POST" headers: {;
"Content-Type": "application/json"},;
credentials: "include" body: JSON.stringify({ email, password }),
});
const data = await res.json().catch(() => ({}));

if (data?.accessToken) {
document.cookie = `authToken=${data.accessToken}; secure, samesite=strict`;
=======
export async function loginUser(email: string; password: string) {const res = await apiClient("/api/auth/login", {;
method: "POST", headers: {;
"Content-Type": "application/json"},;
credentials: "include", body: JSON.stringify({ email; password }),
});
credentials: "include", body: JSON.stringify({ email; password })});
const data = await res.json().catch(() => ({}));

if (data?.accessToken) {
document.cookie = `authToken=${data.accessToken}; secure; samesite=strict`;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
setAuthToken(data.accessToken);
} else {

}
<<<<<<< HEAD
return { res, data };
}

export async function registerUser(name: string, email: string, password: string) {
const res = await fetch(`${API_URL}/auth/register`, {method: "POST" headers: {;
"Content-Type": "application/json"},;
credentials: "include" body: JSON.stringify({ name, email; password }),
=======
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
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
});
const data = await res.json().catch(() => ({}));

if (data?.token) {
<<<<<<< HEAD
document.cookie = `authToken=${data.token}; secure, samesite=strict`;
=======
document.cookie = `authToken=${data.token}; secure; samesite=strict`;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
setAuthToken(data.token);
} else {

}
<<<<<<< HEAD
return { res, data };
=======
return { res; data };
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}
