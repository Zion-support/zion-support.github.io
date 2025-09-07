


"use client",;""
import { useState } from "react",;""
import Link from "next/link",;""
import { useAuth } from "@/contexts/AuthContext",;"
export default function SignInPage() {;"
  const [email, setEmail] = useState(""),;""
  const [password, setPassword] = useState(""),;"
  const [isLoading, setIsLoading] = useState(false),;"
  const [error, setError] = useState(""),;"
  const { login } = useAuth(),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsLoading(true),;"
    setError("");"
    try {;
      await login(email, password);
    } catch (error) {;"
      setError(error instanceof Error ? error.message : "Login failed");"
    } finally {;
      setIsLoading(false);
    }
  };


  return (;"
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;"
</div>"
      <div className="max-w-md w-full space-y-8 p-8">;"
</div>"
        <div className="text-center">;"
</div>"
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>;""
          <p className="text-zinc-400">;"
</p>
          </p>;
        </div>;"
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">;"
</div>"
          <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">;"
</div>"
                <p className="text-red-400 text-sm">{error}</p>;"
              </div>;"
    <div className="min - h-screen flex items - center justify - center bg - gradient - to - br from - zinc - 900 to - zinc - 800">;"
</div>"
      <div className="max - w-md w - full space - y-8 p - 8">;"
</div>"
        <div className="text - center">;"
</div>"
          <h1 className="text - 3xl font - bold text - white mb - 2">Welcome Back</h1>;""
          <p className="text - zinc - 400">;"
</p>
          </p>;
        </div>;"
        <div className="bg - zinc - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - zinc - 700 / 50">;"
</div>"
          <form on_submit={handle_submit} className="space - y-6">;"
</form>"
              <div className="bg - red - 500 / 10 border border - red - 500 / 20 rounded - lg p - 3">;"
</div>"
                <p className="text - red - 400 text - sm">{error}</p>;")
              </div>)}
            <div>;
</div>"
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;"
</label>
              </label>;
              <input;"
                id="email";""
                type="email";"
                required;
                value={email}
                on_change={(e) => set_email (e.target.value)}
</input>
            </div>;
            <div>;
</div>"
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb - 2">;"
</label>
              </label>;
              <input;"
                id="password";""
                type="password";"
                required;
                value={password}
                on_change={(e) => set_password (e.target.value)}
</input>
            </div>;
            <button;"
              type="submit";"
              disabled={is_loading}"
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration - 200";"
            >;
</button>
            </button>;
          </form>;"
          <div className="mt - 6 text - center">;"
</div>"
            <p className="text - zinc - 400 text - sm">;"
</p>"
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font - medium">;"
</Link>
              </Link>;
            </p>;
          </div>;
        </div>;"
        <div className="text - center">;"
</div>"
          <p className="text - zinc - 500 text - xs">;"
</p>"
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;"
</Link>"
            </Link>{" "}""
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;"
</Link>
            </Link>;
          </p>;
        </div>;
      </div>;
    </div>);"