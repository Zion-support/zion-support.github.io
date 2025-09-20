import React from 'react';
<<<<<<< HEAD:temp_broken_pages_all/payment-success.tsx
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";, // Changed from useNavigate,
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function PaymentSuccess() {
  return (
  return (
  return (
  const router = null;
  return (
    <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4'>
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>
        <div className='inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center'>
          <CheckCircle2 className='h-6 w-6 text-green-600' />
        </div>
        <h1 className='text-2xl font-bold text-white mb-2'>
          {t('errors.payment_success_title')}
        </h1>
        <p className='text-zion-slate-light mb-6'>
          {t('errors.payment_success_message')}
        </p>
        <div className='flex flex-col space-y-3'>
          <Button
onClick={() => router.push('/dashboard')} // Changed to router.push className='bg-zion-purple hover:bg-zion-purple-dark text-white'
          >
            {t('errors.go_to_dashboard')}
          </Button>
          <Button
variant='outline'
            onClick={() => router.push('/')} // Changed to router.push className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >  return (
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
        <div className="inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        <p className="text-zion-slate-light mb-6">
          {t('errors.payment_success_message')}
        </p>
        <div className="flex flex-col space-y-3">
          <Button
onClick={() => router.push('/dashboard')} // Changed to router.push className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}
          </Button>
          <Button
variant="outline"
            onClick={() => router.push('/')} // Changed to router.push className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            {t('errors.return_home')}
          </Button>
        </div>

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Payment Successful</h1>
        <p className="text-lg text-gray-600">Your payment was processed successfully...</p>
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/payment-success.tsx
      </div>
    </div>
  );
}