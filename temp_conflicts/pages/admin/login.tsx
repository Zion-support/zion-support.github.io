
export default function AdminLoginPage() {_const _router = useRouter();
  const [username, _setUsername] = useState('');
  const [password, _setPassword] = useState('');
  const [error, _setError] = useState<string | null>(null);
  const [loading, _setLoading] = useState(false);

  async function onSubmit(_e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const _res = await fetch('/api/admin/login', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_username, _password})});
      if (!res.ok) throw new Error('Invalid credentials');
      router.push('/admin');
    } catch (err: unknown) {_setError(err.message || 'Login failed');} finally {_setLoading(false);}
  }

  return (_<div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
      <form onSubmit={_onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Username</label>
          <input className="w-full border rounded px-3 py-2" value={_username} onChange={_(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={_password} onChange={_(_e) => setPassword(e.target.value)} />
        </div>
        {_error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" disabled={_loading} className="w-full bg-indigo-600 text-white rounded px-3 py-2 hover:bg-indigo-700 disabled:opacity-50">
          {_loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}