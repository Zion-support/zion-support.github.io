import { apiClient } from '@/utils/apiClient, ';
export async function register(name, email, password) {
    const res = await apiClient('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify({ name, email, password })});
    const data = await res.json().catch(() => ({}));
=======
        body: JSON.stringify({ name, email, password }),
    });

  const data = await res.json().catch(() => ({}));
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
    return { res, data };
}
