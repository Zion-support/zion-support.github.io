"use client&quot;;

import { useState } from &quot;react&quot;;
import Link from &quot;next/link&quot;;
import { useAuth } from &quot;@/contexts/AuthContext&quot;;

export default function SignUpPage() {
  const [name, setName] = useState("&quot;);
  const [email, setEmail] = useState("&quot;);
  const [password, setPassword] = useState("&quot;);
  const [confirmPassword, setConfirmPassword] = useState("&quot;);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("&quot;);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("&quot;);

    if (password !== confirmPassword) {
      setError(&quot;Passwords do not match&quot;);
      setIsLoading(false);
      return;
    }

    try {
      await register(name, email, password);
    } catch (error) {
      setError(error instanceof Error ? error.message : &quot;Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Join Zion OS</h1>
          <p className="text-zinc-400 mb-4">
            Start your free trial and launch sovereign AI-powered digital economies
          </p>
          
          {/* Free Trial Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-green-400 text-sm font-medium">
              🚀 Free Trial Available
            </span>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700/30">
          <h3 className="text-sm font-semibold text-zinc-300 mb-3">What you'll get:</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Launch new instances in minutes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Access to marketplace templates
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Governance and identity tools
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Full admin dashboard access
            </li>
          </ul>
        </div>

        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-400 text-sm&quot;>{error}</p>
              </div>
            )}

            <div>
              <label htmlFor=&quot;name" className="block text-sm font-medium text-zinc-300 mb-2&quot;>
                Full Name
              </label>
              <input
                id=&quot;name&quot;
                type=&quot;text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                placeholder=&quot;Enter your full name&quot;
              />
            </div>

            <div>
              <label htmlFor=&quot;email" className="block text-sm font-medium text-zinc-300 mb-2&quot;>
                Email Address
              </label>
              <input
                id=&quot;email&quot;
                type=&quot;email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                placeholder=&quot;Enter your email address&quot;
              />
            </div>

            <div>
              <label htmlFor=&quot;password" className="block text-sm font-medium text-zinc-300 mb-2&quot;>
                Password
              </label>
              <input
                id=&quot;password&quot;
                type=&quot;password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                placeholder=&quot;Create a strong password"
              />
              <p className="text-xs text-zinc-500 mt-1&quot;>Must be at least 8 characters</p>
            </div>

            <div>
              <label htmlFor=&quot;confirmPassword" className="block text-sm font-medium text-zinc-300 mb-2&quot;>
                Confirm Password
              </label>
              <input
                id=&quot;confirmPassword&quot;
                type=&quot;password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                placeholder=&quot;Confirm your password&quot;
              />
            </div>

            <button
              type=&quot;submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200&quot;
            >
              {isLoading ? &quot;Creating Account...&quot; : &quot;Start Free Trial"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-400 text-sm&quot;>
              Already have an account?{&quot; "}
              <Link href="/auth/signin" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-zinc-500 text-xs&quot;>
            By signing up, you agree to our{&quot; "}
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-300&quot;>
              Terms of Service
            </Link>{&quot; &quot;}
            and{&quot; "}
            <Link href="/privacy" className="text-zinc-400 hover:text-zinc-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}