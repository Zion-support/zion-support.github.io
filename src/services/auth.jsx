import { apiClient } from '@/utils/apiClient';
export async function register(name, email, password) {
    const res = await apiClient('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json().catch(() => ({}));
    return { res, data };
}
export async function resetPassword(token, newPassword) {
    const res = await apiClient('/api/auth/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
    });
    const data = await res.json().catch(() => ({}));
    return { res, data };
}
