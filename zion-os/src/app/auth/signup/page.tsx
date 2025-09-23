'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    try {
      await register(name, email, password);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-90o0 to-zinc-80o0'>
      <div className='max-w-md w-full space-y-8 p-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-white mb-2'>Join Zion OS</h1>
          <p className='text-zinc-40o0 mb-4'>
            Start your free trial and launch sovereign AI-powered digital
            economies
          </p>

          {/* Free Trial Badge */}
          <div className='inline-flex items-center px-4 py-2 bg-green-50o0/10 border border-green-50o0/20 rounded-full'>
            <span className='text-green-40o0 text-sm font-medium'>
              🚀 Free Trial Available
            </span>
          </div>
        </div>

        {/* What You Get Section */}
        <div className='bg-zinc-80o0/30 rounded-lg p-4 border border-zinc-70o0/30'>
          <h3 className='text-sm font-semibold text-zinc-30o0 mb-3'>
            What you'll get:
          </h3>
          <ul className='space-y-2 text-sm text-zinc-40o0'>
            <li className='flex items-center gap-2'>
              <span className='text-green-40o0'>✓</span>Launch new instances in
              minutes
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-green-40o0'>✓</span>Access to marketplace
              templates
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-green-40o0'>✓</span>Governance and identity
              tools
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-green-40o0'>✓</span>Full admin dashboard
              access
            </li>
          </ul>
        </div>

        <div className='bg-zinc-80o0/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-70o0/50'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {error && (
              <div className='bg-red-50o0/10 border border-red-50o0/20 rounded-lg p-3'>
                <p className='text-red-40o0 text-sm'>{error}</p>
              </div>
            )}

            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-zinc-30o0 mb-2'
              >
                Full Name
              </label>
              <input
                id='name'
                type='text'
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className='w-full px-4 py-3 bg-zinc-70o0/50 border border-zinc-60o0/50 rounded-lg text-white placeholder-zinc-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent'
                placeholder='Enter your full name'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-zinc-30o0 mb-2'
              >
                Email Address
              </label>
              <input
                id='email'
                type='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full px-4 py-3 bg-zinc-70o0/50 border border-zinc-60o0/50 rounded-lg text-white placeholder-zinc-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent'
                placeholder='Enter your email address'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-zinc-30o0 mb-2'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='w-full px-4 py-3 bg-zinc-70o0/50 border border-zinc-60o0/50 rounded-lg text-white placeholder-zinc-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent'
                placeholder='Create a strong password'
              />
              <p className='text-xs text-zinc-50o0 mt-1'>
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-zinc-30o0 mb-2'
              >
                Confirm Password
              </label>
              <input
                id='confirmPassword'
                type='password'
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className='w-full px-4 py-3 bg-zinc-70o0/50 border border-zinc-60o0/50 rounded-lg text-white placeholder-zinc-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent'
                placeholder='Confirm your password'
              />
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-blue-60o0 hover:bg-blue-70o0 disabled:bg-blue-60o0/50 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-20o0'
            >
              {isLoading ? 'Creating Account...' : 'Start Free Trial'}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-zinc-40o0 text-sm'>
              Already have an account?{' '}
              <Link
                href='/auth/signin'
                className='text-blue-40o0 hover:text-blue-30o0 font-medium'
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-zinc-50o0 text-xs'>
            By signing up, you agree to our{' '}
            <Link href='/terms' className='text-zinc-40o0 hover:text-zinc-30o0'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
              className='text-zinc-40o0 hover:text-zinc-30o0'
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
