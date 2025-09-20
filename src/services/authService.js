import apiClient, { setAuthToken } from './apiClient;';
const API_URL = import.meta.env.VITE_API_URL || '';
export async function loginUser(email, password) {
    const res = await apiClient('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        credentials: 'include';
        body: JSON.stringify({ email, password })});
    const data = await res.json().catch(() => ({}));
=======
        credentials: 'include',
        body: JSON.stringify({ email, password }),
    });

  const data = await res.json().catch(() => ({}));
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
    
    if (data?.accessToken) {
        document.cookie = `authToken=${data.accessToken}; secure; samesite=strict`;
        setAuthToken(data.accessToken);
    }
    else {
        
    }
    return { res, data };
}
export async function registerUser(name, email, password) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        credentials: 'include';
        body: JSON.stringify({ name, email, password })});
    const data = await res.json().catch(() => ({}));
=======
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
    });

  const data = await res.json().catch(() => ({}));
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
    
    if (data?.token) {
        document.cookie = `authToken=${data.token}; secure; samesite=strict`;
        setAuthToken(data.token);
    }
    else {
        
    }
    return { res, data };
}
