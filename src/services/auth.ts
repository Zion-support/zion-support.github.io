import axios from 'axios';

export async function forgotPassword(email: string) {
  const API_URL = import.meta.env.VITE_API_URL || '';
  const res = await fetch(`${API_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.message || `Error ${res.status}: Failed to send reset link`);
  }
  return config;
});

export async function resetPassword(token: string, newPassword: string) {
  const API_URL = import.meta.env.VITE_API_URL || '';
  const res = await fetch(`${API_URL}/auth/reset/${token}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, newPassword }),
  });
  const data = await res.json().catch(() => ({})); // Gracefully handle non-JSON responses

  if (!res.ok) {
    // Throw an error with the message from the backend if available, or a generic one
    throw new Error(data?.message || `Error ${res.status}: Failed to reset password`);
  }
  return response;
}

export const auth = {
  login,
};

export default auth;
