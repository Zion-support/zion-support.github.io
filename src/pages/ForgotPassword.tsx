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
    </div>
  );
}