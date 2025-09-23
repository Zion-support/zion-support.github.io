<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register - Zion Tech Group</title>
        <meta name="description" content="register page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
=======
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SignupForm from '@/components/auth/SignupForm';
import { AuthButtons } from '@/components/AuthButtons';
import { fireEvent } from '@/lib/analytics';
import { logInfo } from '@/utils/productionLogger';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const router = useRouter();

  useEffect(() => {
    fireEvent('signup_page_view');
  }, []);

  const handleSuccess = ({ email, emailVerificationRequired }: {
    email: string;
    emailVerificationRequired: boolean;
  }) => {
    if (emailVerificationRequired) {
      router.push(`/verify-status?email=${encodeURIComponent(email)}`);
    } else {
      router.push('/auth/login?registrationSuccess=true');
    }
  };

  return (
    <>
      <Head>
        <title>Create Account - Zion Tech Marketplace</title>
        <meta name="description" content="Create your Zion Tech Marketplace account" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logos/zion-logo.png"
              alt="Zion Tech"
              width={48}
              height={48}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link
                href="/auth/login"
                className="font-medium text-blue-600 hover:text-blue-500 underline"
              >
                sign in if you already have an account
              </Link>
            </p>
          </div>

          <SignupForm onSuccess={handleSuccess} />

          {/* Social signup options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>
            <AuthButtons providers={["google", "github"]} />
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              By creating an account, you agree to our{' '}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/legal/privacy" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </p>
          </div>
>>>>>>> origin/auto/autonomy-17186719616
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
};

export default RegisterPage;
>>>>>>> origin/auto/autonomy-17186719616
