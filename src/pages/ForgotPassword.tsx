<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-6">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
=======
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
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
=======
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
        <SEO title="Password Reset Sent - Zion Tech Group" description="Check your email for password reset instructions." canonical="https://ziontechgroup.com/forgot-password"/>
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Check Your Email</h1>
            <p className="text-zion-slate-light mb-6">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <p className="text-zion-slate-light text-sm mb-8">
              If you don't see the email, check your spam folder or{' '}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-zion-cyan hover:underline"
              >
                try again
              </button>
            </p>
            <Link
              to="/login"
              className="inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Back to Login
            </Link>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center mb-8">
          <Link
            to="/login"
            className="inline-flex items-center text-zion-cyan hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Link>
          <h1 className="text-3xl font-bold text-white mb-4">Forgot Password?</h1>
          <p className="text-zion-slate-light mt-4">
            Enter your email address and we'll send you a link to reset your password.
          </p>
=======
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

            <div className="bg-zion-blue-dark rounded-lg p-6">
              {submitted ? (<div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">
                    <Mail className="h-6 w-6 text-zion-purple"/>
                  </div>
                  <h3 className="text-lg font-medium text-white">Check your email</h3>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    We've sent a password reset link to your email address.
                  </p>
                  <div className="mt-6">
                    <Link to="/login" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center">
                      Back to login
                    </Link>
                  </div>
                </div>) : (<Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="email" render={({ field }) => (<FormItem>
                          <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input placeholder="you@example.com" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field}/>
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400"/>
                        </FormItem>)}/>

                    <Button type="submit" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Reset Password"}
                    </Button>

                    <div className="text-center">
                      <Link to="/login" className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light">
                        Back to login
                      </Link>
                    </div>
                  </form>
                </Form>)}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light"/>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>
              </div>
            </div>

            <Button type="submit" disabled={isLoading || !email.trim()} className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              Remember your password?{' '}
              <Link to="/login" className="text-zion-cyan hover:underline">
                Sign in
              </Link>
            </p>
          </div>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan focus:outline-none rounded-lg"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
<<<<<<< HEAD
    </div>
  );
}
=======
      
    </>);
=======
        return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Password Reset Sent - Zion Tech Group", description: "Check your email for password reset instructions.", canonical: "https://ziontechgroup.com/forgot-password" }), _jsx("div", { className: "min-h-screen bg-zion-blue flex items-center justify-center", children: _jsx("div", { className: "max-w-md w-full mx-auto p-6", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4", children: _jsx(CheckCircle, { className: "h-6 w-6 text-green-600" }) }), _jsx("h1", { className: "text-2xl font-bold text-white mb-4", children: "Check Your Email" }), _jsxs("p", { className: "text-zion-slate-light mb-6", children: ["We've sent password reset instructions to ", _jsx("strong", { children: email })] }), _jsxs("p", { className: "text-zion-slate-light text-sm mb-8", children: ["If you don't see the email, check your spam folder or", ' ', _jsx("button", { onClick: () => setIsSubmitted(false), className: "text-zion-cyan hover:underline", children: "try again" })] }), _jsx(Link, { to: "/login", className: "inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-300", children: "Back to Login" })] }) }) })] }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Forgot Password - Zion Tech Group", description: "Reset your password to access your Zion Tech Group account.", canonical: "https://ziontechgroup.com/forgot-password" }), _jsx("div", { className: "min-h-screen bg-zion-blue flex items-center justify-center", children: _jsxs("div", { className: "max-w-md w-full mx-auto p-6", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsxs(Link, { to: "/login", className: "inline-flex items-center text-zion-cyan hover:text-white transition-colors mb-4", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Login"] }), _jsx(GradientHeading, { children: "Forgot Password?" }), _jsx("p", { className: "text-zion-slate-light mt-4", children: "Enter your email address and we'll send you a link to reset your password." })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-white mb-2", children: "Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", className: "pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true })] })] }), _jsx(Button, { type: "submit", disabled: isLoading || !email.trim(), className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed", children: isLoading ? 'Sending...' : 'Send Reset Link' })] }), _jsx("div", { className: "mt-8 text-center", children: _jsxs("p", { className: "text-zion-slate-light text-sm", children: ["Remember your password?", ' ', _jsx(Link, { to: "/login", className: "text-zion-cyan hover:underline", children: "Sign in" })] }) })] }) })] }));
}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
