<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

export default function OnboardingPage() {
  return (
    <>
      <Head>
        <title>Onboarding - Zion Tech Group</title>
        <meta name="description" content="onboarding page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Onboarding</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
=======
import OnboardingWizard from '../components/onboarding/OnboardingWizard'

export default function OnboardingPage() {
  return (
    <div>
      <OnboardingWizard />
    </div>
  )
>>>>>>> origin/auto/autonomy-17186719616
}