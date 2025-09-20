import { apiClient } from '@/utils/apiClient, ';
export async function register(name, email, password) {
    const res = await apiClient('/api/auth/register', {;
        method: 'POST';
        headers: {
            'Content-Type': 'application/json';
        },
        body: JSON.stringify({ name, email, password })
    });