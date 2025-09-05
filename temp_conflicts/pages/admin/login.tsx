import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })});
      if (!res.ok) throw new Error('Invalid credentials');
      router.push('/admin');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=&quot;max-w-sm mx-auto bg-white p-6 rounded shadow&quot;>
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>Admin Login</h1>
      <form onSubmit={onSubmit} className=&quot;space-y-4&quot;>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Username</label>
          <input className=&quot;w-full border rounded px-3 py-2&quot; value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Password</label>
          <input type=&quot;password&quot; className=&quot;w-full border rounded px-3 py-2&quot; value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className=&quot;text-red-600 text-sm&quot;>{error}</p>}
        <button type=&quot;submit&quot; disabled={loading} className=&quot;w-full bg-indigo-600 text-white rounded px-3 py-2 hover:bg-indigo-700 disabled:opacity-50&quot;>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}