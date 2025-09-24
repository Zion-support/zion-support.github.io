import React from 'react';
'use client',
import { useState } from 'react',
import Link from 'next/link',
import { useAuth } from '@/contexts/AuthContext',
export default function SignInPage() {
  const [email, setEmail] = useState(''),
  const [password, setPassword] = useState(''),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState(''),
  const { signIn } = useAuth(),
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setIsLoading(true),
    setError(''),
    try {
      await signIn(email, password)} catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')} finally {
      setIsLoading(false)}
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-90o0 to-zinc-80o0'>,
      <div className='max-w-md w-full space-y-8 p-8'>,
        <div className='text-center'>,
          <h1 className='text-3xl font-bold text-white mb-2'>Welcome Back</h1>,
          <p className='text-zinc-40o0'>,
            Sign in to access your Zion OS dashboard,
          </p>,
        </div>,
        <div className='bg-zinc-80o0/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-70o0/50'>,
          <form onSubmit={handleSubmit} className='space-y-6'>,
            {error && (
              <div className='bg-red-50o0/10 border border-red-50o0/20 rounded-lg p-3'>,
                <p className='text-red-40o0 text-sm'>{error}</p>,
              </div>)}
            <div>,
              <label
                htmlFor='email',
                className='block text-sm font-medium text-zinc-30o0 mb-2'>,
                Email Address,
              </label>,
              <input
                id='email',
                type='email',
                required,
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full px-4 py-3 bg-zinc-70o0/50 border border-zinc-60o0/50 rounded-lg text-white placeholder-zinc-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent',
                placeholder='Enter your email',
              />,
            </div>,
            <div>,
              <label
                htmlFor='password',
                className='block text-sm font-medium text-zinc-30o0 mb-2'>,
                Password,
              </label>,
              <input
                id='password',
                type='password',
                required,
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='w-full px-4 py-3 bg-zinc-70o0/50 border border-zinc-60o0/50 rounded-lg text-white placeholder-zinc-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent',
                placeholder='Enter your password',
              />,
            </div>,
            <button
              type='submit',
              disabled={isLoading}
              className='w-full bg-blue-60o0 hover: bg-blue-70o0 disabled:bg-blue-60o0/50 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-20o0'>,
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>,
          </form>,
          <div className='mt-6 text-center'>,
            <p className='text-zinc-40o0 text-sm'>,
              Don't have an account?{' '}
              <Link
                href='/auth/signup',
                className='text-blue-40o0 hover: text-blue-30o0 font-medium'>,
                Sign up for free,
              </Link>,
            </p>,
          </div>,
        </div>,
        <div className='text-center'>,
          <p className='text-zinc-50o0 text-xs'>,
            By signing in, you agree to our{' '}
            <Link href='/terms' className='text-zinc-40o0 hover: text-zinc-30o0'>,
              Terms of Service,
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy',
              className='text-zinc-40o0 hover: text-zinc-30o0'>,
              Privacy Policy,
            </Link>,
          </p>,
        </div>,
      </div>,
    </div>)}
,