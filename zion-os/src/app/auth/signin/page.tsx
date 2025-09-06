<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



"use client",;"
import { useState } from "react",;"
import Link from "next/link",;"
import { useAuth } from "@/contexts/AuthContext",;
export default function SignInPage() { return null; }
  const { login } = useAuth(),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsLoading(true),;"
    setError("");
    try {;
      await login(email, password);
    } catch (error) {;"
      setError(error instanceof Error ? error.message : "Login failed");
    } finally {;
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD



  return (;"
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;"
      <div className="max-w-md w-full space-y-8 p-8">;"
        <div className="text-center">;"
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>;"
          <p className="text-zinc-400">;
            Sign in to access your Zion OS dashboard and continue building;
          </p>;
        </div>;"
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">;"
          <form onSubmit={handleSubmit} className="space-y-6">;
            {error && (;"
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">;"
                <p className="text-red-400 text-sm">{error}</p>;
              </div>;
            )}





<<<<<<< HEAD
"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
export default function SignInPage() {const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();
    setIsLoading(true);
    setError("");
    try {;
      await login(email, password);
    } catch (error) {setError(error instanceof Error ? error.message : "Login failed");
    } finally {setIsLoading(false);
    }
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    } finally {;
      setIsLoading(false);
    }
  };
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            <div>;
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">;
=======
            <div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            <div>;"
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

"use client",
import { useState  } from './react';,
import Link from './next / link';,
import { use_auth  } from '@/contexts / AuthContext';,
export default /**
 * SignInPage - Function description
 */
function SignInPage() {
  const [email, set_email] = useState (""),
  const [password, set_password] = useState (""),
  const [is_loading, setIsLoading] = useState (false),
  const [error, set_error] = useState (""),
  const { login } = use_auth (),
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default (),
    setIsLoading (true),
    set_error ("");
    try {
      await login (email, password);
    } catch (error) {
      set_error (error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading (false);
    }
  }
  return (
    <div className="min - h-screen flex items - center justify - center bg - gradient - to - br from - zinc - 900 to - zinc - 800">;
      <div className="max - w-md w - full space - y-8 p - 8">;
        <div className="text - center">;
          <h1 className="text - 3xl font - bold text - white mb - 2">Welcome Back</h1>;
          <p className="text - zinc - 400">;
            Sign in to access your Zion OS dashboard and continue building;
          </p>;
        </div>;
        <div className="bg - zinc - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - zinc - 700 / 50">;
          <form on_submit={handle_submit} className="space - y-6">;
            {error && (
              <div className="bg - red - 500 / 10 border border - red - 500 / 20 rounded - lg p - 3">;
                <p className="text - red - 400 text - sm">{error}</p>;
              </div>)}

            <div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                Email Address;
              </label>;
              <input;"
                id="email";"
                type="email";
                required;
                value={email}
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
=======
                on_change={(e) => set_email (e.target.value)}
<<<<<<< HEAD
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                placeholder="Enter your email";
              />;
            </div>;
            <div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">;
=======
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                on_change={(e) => set_email (e.target.value)}"
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";"
                placeholder="Enter your email";
              />;
            </div>;
            <div>;"
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb - 2">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb - 2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                Password;
              </label>;
              <input;"
                id="password";"
                type="password";
                required;
                value={password}
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
=======
                on_change={(e) => set_password (e.target.value)}
<<<<<<< HEAD
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                on_change={(e) => set_password (e.target.value)}"
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                placeholder="Enter your password";
              />;
            </div>;
            <button;"
              type="submit";
<<<<<<< HEAD
<<<<<<< HEAD
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200";
            >;
              {isLoading ? "Signing In..." : "Sign In"}
            </button>;
          </form>;
          <div className="mt-6 text-center">;
            <p className="text-zinc-400 text-sm">;
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium">;
=======
              disabled={is_loading}
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration - 200";
            >;
              {is_loading ? "Signing In..." : "Sign In"}
            </button>;
          </form>;
          <div className="mt - 6 text - center">;
            <p className="text - zinc - 400 text - sm">;
              Don't have an account?{" "}
<<<<<<< HEAD
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font-medium">;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              disabled={is_loading}"
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration - 200";
            >;"
              {is_loading ? "Signing In..." : "Sign In"}
            </button>;
          </form>;"
          <div className="mt - 6 text - center">;"
            <p className="text - zinc - 400 text - sm">;"
              Don't have an account?{" "}"
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font - medium">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font - medium">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                Sign up for free;
              </Link>;
            </p>;
          </div>;
<<<<<<< HEAD
        </div>;
<<<<<<< HEAD
        <div className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="text-zinc-500 text-xs">;
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-zinc-400 hover: text-zinc-300">;
=======
          <p className="text - zinc - 500 text-xs">;
=======
        <div className="text - center">;
          <p className="text - zinc - 500 text - xs">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
<<<<<<< HEAD
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc-300">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <p className="text - zinc - 500 text-xs">;
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc-300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc-300">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        </div>;"
        <div className="text - center">;"
          <p className="text - zinc - 500 text - xs">;"
            By signing in, you agree to our{" "}"
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;
              Terms of Service;"
            </Link>{" "}"
            and{" "}"
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              Privacy Policy;
            </Link>;
          </p>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
