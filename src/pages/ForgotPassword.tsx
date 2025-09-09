import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { GradientHeading } from '../GradientHeading';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await axios.post(`${API_URL}/auth/forgot`, { email })
      if (res.status === 200) {
        toast.success('Email sent')
      } else {
        throw new Error('Request failed')
      }
    } catch (err: any) {
      logErrorToProduction(err)
      const msg = err?.response?.data?.message || err.message || 'Failed to send reset link'
      setError(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Forgot Password - Zion Tech Group"
        description="Reset your password to access your Zion Tech Group account."
        canonical="https://ziontechgroup.com/forgot-password"
      />
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
            <GradientHeading>Forgot Password?</GradientHeading>
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
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed"
            >
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
        </div>
      </div>
    </>
  );
}