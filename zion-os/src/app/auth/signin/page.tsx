"use client",;
import { useState } from "react",;
import Link from "next/link",;
import { useAuth } from "@/contexts/AuthContext",;
export default function SignInPage() {;
  const [email, setEmail] = useState(""),;
  const [password, setPassword] = useState(""),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState(""),;
  const { login } = useAuth(),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsLoading(true),;
    setError("");
    try {;
      await login(email, password);
    } catch (error) {;
      setError(error instanceof Error ? error.message : "Login failed");

  return (;
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;
      <div className="max-w-md w-full space-y-8 p-8">;
        <div className="text-center">;
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>;
          <p className="text-zinc-400">;
            Sign in to access your Zion OS dashboard and continue building;
          </p>;
        </div>;
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">;
          <form onSubmit={handleSubmit} className="space-y-6">;
            {error && (;
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">;
                <p className="text-red-400 text-sm">{error}</p>;
              </div>;
            )}

            <div>;
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">;

                Password;
              </label>;
              <input;"
                id="password";"
                type="password";
                required;
                value={password}

                Sign up for free;
              </Link>;
            </p>;
          </div>;

            By signing in, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc-300">;
              Terms of Service;
            </Link>{" "}
            and{" "}

              Privacy Policy;
            </Link>;
          </p>;
        </div>;
      </div>;