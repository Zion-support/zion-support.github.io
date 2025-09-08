import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
// Form validation schema
const forgotPasswordSchema = z.object({
    email: z.string().email("Please enter a valid email"),
});
export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim())
            return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setIsLoading(false);
        }, 2000);
    };
    if (isSubmitted) {
        return (<>
        <SEOHead title="Password Reset Sent - Zion Tech Group" description="Check your email for password reset instructions." canonical="https://ziontechgroup.com/forgot-password"/>
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="max-w-md w-full mx-auto p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600"/>
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">Check Your Email</h1>
              <p className="text-zion-slate-light mb-6">
                We've sent password reset instructions to <strong>{email}</strong>
              </p>
              <p className="text-zion-slate-light text-sm mb-8">
                If you don't see the email, check your spam folder or{' '}
                <button onClick={() => setIsSubmitted(false)} className="text-zion-cyan hover:underline">
                  try again
                </button>
              </p>
              <Link to="/login" className="inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </>);
    }
    return (<>
      
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Reset your password
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Enter your email and we'll send you a link to reset your password.
              </p>
            </div>




