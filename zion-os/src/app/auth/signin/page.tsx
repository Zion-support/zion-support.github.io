"use client";

import Link from "next/link";

export default function SignInPage() {_const [email, _setEmail] = useState("");
  const [password, _setPassword] = useState("");
  const [isLoading, _setIsLoading] = useState(false);
  const [error, _setError] = useState("");
  const { login} = useAuth();

  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login(email, _password);} catch (error) {_setError(error instanceof Error ? error.message : "Login failed");} finally {_setIsLoading(false);}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-zinc-400">
            Sign in to access your Zion OS dashboard and continue building
          </p>
        </div>

        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
          <form onSubmit={_handleSubmit} className="space-y-6">
            {_error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={_email}
                onChange={_(_e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={_password}
                onChange={_(_e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={_isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {_isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-400 text-sm">
              Don't have an account?{_" "}
              <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-zinc-500 text-xs">
            By signing in, you agree to our{_" "}
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-300">
              Terms of Service
            </Link>{_" "}
            and{_" "}
            <Link href="/privacy" className="text-zinc-400 hover:text-zinc-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}