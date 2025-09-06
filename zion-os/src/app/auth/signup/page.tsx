  return (;
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;
      <div className="max-w-md w-full space-y-8 p-8">;
        <div className="text-center">;
          <h1 className="text-3xl font-bold text-white mb-2">Join Zion OS</h1>;
          <p className="text-zinc-400 mb-4">;
            Start your free trial and launch sovereign AI-powered digital economies;
<<<<<<< HEAD
"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
export default function SignUpPage() {const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();
    setIsLoading(true);
    setError("");
    if (password !== confirmPassword) {;
      setError("Passwords do not match");
      setIsLoading(false);
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return;
    }
    try {
      await register (name, email, password);
    } catch (error) {
      set_error (error instanceof Error ? error.message : "Registration failed");
    } finally {
      setIsLoading (false);
    }
  }
  return (
<<<<<<< HEAD
    <div className="min - h-screen flex items - center justify - center bg - gradient - to - br from - zinc - 900 to - zinc - 800">;
      <div className="max - w-md w - full space - y-8 p - 8">;
        <div className="text - center">;
          <h1 className="text - 3xl font - bold text - white mb - 2">Join Zion OS</h1>;
          <p className="text - zinc - 400 mb - 4">;
            Start your free trial and launch sovereign AI - powered digital economies;
  return (;
=======
    <div className="min - h-screen flex items - center justify - center bg - gradient - to - br from - zinc - 900 to - zinc-800">;
      <div className="max - w-md w - full space - y-8 p-8">;
        <div className="text-center">;
          <h1 className="text - 3xl font - bold text - white mb-2">Join Zion OS</h1>;
          <p className="text - zinc - 400 mb-4">;
            Start your free trial and launch sovereign AI - powered digital economies;  return (;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;
      <div className="max-w-md w-full space-y-8 p-8">;
        <div className="text-center">;
          <h1 className="text-3xl font-bold text-white mb-2">Join Zion OS</h1>;
          <p className="text-zinc-400 mb-4">;
            Start your free trial and launch sovereign AI-powered digital economies;
          </p>;
          {/* Free Trial Badge */}
<<<<<<< HEAD
          <div className="inline - flex items - center px - 4 py - 2 bg - green - 500 / 10 border border - green - 500 / 20 rounded - full">;
            <span className="text - green - 400 text - sm font - medium">;
=======
          <div className="inline - flex items - center px - 4 py - 2 bg - green - 500 / 10 border border - green - 500 / 20 rounded-full">;
            <span className="text - green - 400 text - sm font-medium">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              🚀 Free Trial Available;
            </span>;
          </div>;
        </div>;
        {/* What You Get Section */}
<<<<<<< HEAD
        <div className="bg - zinc - 800 / 30 rounded - lg p - 4 border border - zinc - 700 / 30">;
          <h3 className="text - sm font - semibold text - zinc - 300 mb - 3">What you'll get:</h3>;
          <ul className="space - y-2 text - sm text - zinc - 400">;
            <li className="flex items - center gap - 2">;
              <span className="text - green - 400">✓</span>;
              Launch new instances in minutes;
            </li>;
            <li className="flex items - center gap - 2">;
              <span className="text - green - 400">✓</span>;
              Access to marketplace templates;
            </li>;
            <li className="flex items - center gap - 2">;
              <span className="text - green - 400">✓</span>;
              Governance and identity tools;
            </li>;
            <li className="flex items - center gap - 2">;
              <span className="text - green - 400">✓</span>;
              Full admin dashboard access;
            </li>;
          </ul>;
        </div>;
            <div>;
              <label html_for="name" className="block text - sm font - medium text - zinc - 300 mb - 2">;
=======
        <div className="bg - zinc - 800 / 30 rounded - lg p - 4 border border - zinc-700 / 30">;
          <h3 className="text - sm font - semibold text - zinc - 300 mb-3">What you'll get:</h3>;
          <ul className="space - y-2 text - sm text - zinc-400">;
            <li className="flex items - center gap-2">;
              <span className="text - green-400">✓</span>;
              Launch new instances in minutes;
            </li>;
            <li className="flex items - center gap-2">;
              <span className="text - green-400">✓</span>;
              Access to marketplace templates;
            </li>;
            <li className="flex items - center gap-2">;
              <span className="text - green-400">✓</span>;
              Governance and identity tools;
            </li>;
            <li className="flex items - center gap-2">;
              <span className="text - green-400">✓</span>;
              Full admin dashboard access;
            </li>;
          </ul>;
        </div>;            <div>;
              <label html_for="name" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Full Name;
              </label>;
              <input;
                id="name";
                type="text";
                required;
                value={name}
                on_change={(e) => set_name (e.target.value)}
<<<<<<< HEAD
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                placeholder="Enter your full name";
              />;
            </div>;
            <div>;
<<<<<<< HEAD
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;
=======
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Email Address;
              </label>;
              <input;
                id="email";
                type="email";
                required;
                value={email}
                on_change={(e) => set_email (e.target.value)}
<<<<<<< HEAD
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                placeholder="Enter your email address";
              />;
            </div>;
            <div>;
<<<<<<< HEAD
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb - 2">;
=======
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
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
                placeholder="Create a strong password";
              />;
              <p className="text - xs text - zinc - 500 mt - 1">Must be at least 8 characters</p>;
            </div>;
            <div>;
              <label html_for="confirm_password" className="block text - sm font - medium text - zinc - 300 mb - 2">;
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
                placeholder="Create a strong password";
              />;
              <p className="text - xs text - zinc - 500 mt-1">Must be at least 8 characters</p>;
            </div>;
            <div>;
              <label html_for="confirm_password" className="block text - sm font - medium text - zinc - 300 mb-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Confirm Password;
              </label>;
              <input;
                id="confirm_password";
                type="password";
                required;
                value={confirm_password}
                on_change={(e) => setConfirmPassword (e.target.value)}
<<<<<<< HEAD
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
=======
                className="w - full px - 4 py - 3 bg - zinc - 700 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                placeholder="Confirm your password";
              />;
            </div>;
            <button;
              type="submit";
              disabled={is_loading}
<<<<<<< HEAD
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration - 200";
=======
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration-200";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            >;
              {is_loading ? "Creating Account..." : "Start Free Trial"}
            </button>;
          </form>;
<<<<<<< HEAD
          <div className="mt - 6 text - center">;
            <p className="text - zinc - 400 text - sm">;
              Already have an account?{" "}
              <Link href="/auth / signin" className="text - blue - 400 hover:text - blue - 300 font - medium">;
=======
          <div className="mt - 6 text-center">;
            <p className="text - zinc - 400 text-sm">;
              Already have an account?{" "}
              <Link href="/auth / signin" className="text - blue - 400 hover:text - blue - 300 font-medium">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                Sign in;
              </Link>;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
        <div className="text - center">;
          <p className="text - zinc - 500 text - xs">;
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;
=======
        <div className="text-center">;
          <p className="text - zinc - 500 text-xs">;
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc-300">;
              Terms of Service;
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc-300">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              Privacy Policy;
            </Link>;
          </p>;
        </div>;
      </div>;
    </div>);
}
