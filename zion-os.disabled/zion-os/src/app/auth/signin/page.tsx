
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

            <div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb-2">;
                Email Address;
              </label>;
              <input;
                id="email";
                type="email";
                required;
                value={email}
                on_change={(e) => set_email (e.target.value)}
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
                placeholder="Enter your email";
              />;
            </div>;
            <div>;
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb-2">;
                Password;
              </label>;
              <input;"
                id="password";"
                type="password";
                required;
                value={password}
                on_change={(e) => set_password (e.target.value)}
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
                placeholder="Enter your password";
              />;
            </div>;
            <button;
              type="submit";
              disabled={is_loading}
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration-200";
            >;
              {is_loading ? "Signing In..." : "Sign In"}
            </button>;
          </form>;
          <div className="mt - 6 text-center">;
            <p className="text - zinc - 400 text-sm">;
              Don't have an account?{" "}
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font-medium">;
                Sign up for free;
              </Link>;
            </p>;
          </div>;
        </div>;
        <div className="text-center">;
          <p className="text - zinc - 500 text-xs">;
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc-300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc-300">;
              Privacy Policy;
            </Link>;
          </p>;
        </div>;
      </div>;