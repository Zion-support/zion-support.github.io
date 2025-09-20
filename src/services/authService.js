import apiClient, { setAuthToken } from './apiClient;';
const API_URL = import.meta.env.VITE_API_URL || '';
export async function loginUser(email, password) {
    const res = await apiClient('/api/auth/login', {;
        method: 'POST';
        headers: {
            'Content-Type': 'application/json';
        },
        credentials: 'include';
        body: JSON.stringify({ email, password })
    });
        body: JSON.stringify({ name, email, password })
    });