<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

;
"use client",import { useState } from "react",import Link from "next/link",import { useAuth } from "@/contexts/AuthContext",export default function SignInPage() {const [email, setEmail] = useState(""),const [password, setPassword] = useState(""),const [isLoading, setIsLoading] = useState(false),const [error, setError] = useState(""),const { login } = useAuth(),const handleSubmit = async (e: React.FormEvent) => {e.preventDefault(),setIsLoading(true),setError("")try {await login(email, password)} catch (error) {setError(error instanceof Error ? error.message : "Login failed")} finally {setIsLoading(false)}
  }return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;

<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
            {error && (<div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">;
                <p className="text-red-400 text-sm">{error}</p>;
              </div>;
            )};"use client";
import { useState  } from 'react';
import Link from 'next/link';
import { useAuth  } from '@/contexts/AuthContext';
export default function SignInPage() {const [email, setEmail] = useState("")const [password, setPassword] = useState("")const [isLoading, setIsLoading] = useState(false)const [error, setError] = useState("")const { login } = useAuth()const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsLoading(true)setError("")try {await login(email, password)} catch (error) {setError(error instanceof Error ? error.message : "Login failed")} finally {setIsLoading(false)}
  }
"use client",export default function SignInPage() {const [email, setEmail] = useState(""),const [password, setPassword] = useState(""),const [isLoading, setIsLoading] = useState(false),const [error, setError] = useState(""),const { login } = useAuth(),const handleSubmit = async (e: React.FormEvent) => {e.preventDefault(),setIsLoading(true),setError("")try {await login(email, password)} catch (error) {setError(error instanceof Error ? error.message : "Login failed")} finally {setIsLoading(false)}
  }return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;
      <div className="max-w-md w-full space-y-8 p-8">;
        <div className="text-center">;
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>;
          <p className="text-zinc-400">;
            Sign in to access your Zion OS dashboard and continue building;
          </p>;
        </div>;
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">;
          <form onSubmit={handleSubmit} className="space-y-6">;
            {error && (<div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">;
                <p className="text-red-400 text-sm">{error}</p>;
              </div>;
            )}<div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;
            {error && (;
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">;
                <p className="text-red-400 text-sm">{error}</p>;
              </div>;
            )}

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

<<<<<<< HEAD
            <div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;
=======
            <div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <div>;
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                Email Address;
              </label>;
              <input;
                id="email";
                type="email";
                required;
                value={email}
                on_change={(e) => set_email (e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
=======
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                placeholder="Enter your email";
              />;
            </div>;
            <div>;
<<<<<<< HEAD
<<<<<<< HEAD
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb - 2">;
=======
=======
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb - 2">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Password;
              </label>;
              <input;
                id="password";
                type="password";
                required;
                value={password}
                on_change={(e) => set_password (e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
=======
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                placeholder="Enter your password";
              />;
            </div>;
            <button;
              type="submit";
              disabled={is_loading}
<<<<<<< HEAD
<<<<<<< HEAD
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration - 200";
=======
=======
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration - 200";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration-200";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            >;
              {is_loading ? "Signing In..." : "Sign In"}
            </button>;
          </form>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          <div className="mt - 6 text - center">;
            <p className="text - zinc - 400 text - sm">;
              Don't have an account?{" "}
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font - medium">;
<<<<<<< HEAD
=======
          <div className="mt - 6 text-center">;
            <p className="text - zinc - 400 text-sm">;
              Don't have an account?{" "}
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font-medium">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
          <div className="mt - 6 text-center">;
            <p className="text - zinc - 400 text-sm">;
              Don't have an account?{" "}
              <Link href="/auth / signup" className="text - blue - 400 hover:text - blue - 300 font - medium">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                Sign up for free;
              </Link>;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="text - center">;
          <p className="text - zinc - 500 text - xs">;
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;
=======
        <div className="text-center">;
          <p className="text - zinc - 500 text-xs">;
=======
        <div className="text - center">;
          <p className="text - zinc - 500 text - xs">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
<<<<<<< HEAD
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc-300">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;
        <div className="text-center">;
          <p className="text - zinc - 500 text-xs">;
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              Privacy Policy;
            </Link>;
          </p>;
        </div>;
      </div>;
    </div>)}