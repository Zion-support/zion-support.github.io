<<<<<<< HEAD
export default function Page() {
=======

;
"use client",import { useState } from "react",import Link from "next/link",import { useAuth } from "@/contexts/AuthContext",export default function SignInPage() {const [email, setEmail] = useState(""),const [password, setPassword] = useState(""),const [isLoading, setIsLoading] = useState(false),const [error, setError] = useState(""),const { login } = useAuth(),const handleSubmit = async (e: React.FormEvent) => {e.preventDefault(),setIsLoading(true),setError("")try {await login(email, password)} catch (error) {setError(error instanceof Error ? error.message : "Login failed")} finally {setIsLoading(false)}
  }return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;


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
>>>>>>> origin/merge-pr-12271
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Auth Signin Page</h1>
        <p className="text-white/70">Content coming soon.</p>
      </div>
    </div>
  );
}
