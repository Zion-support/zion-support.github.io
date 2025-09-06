import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'; // Changed from useNavigate
import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { XCircle } from 'lucide-react'
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> 
import { XCircle } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate
export default function PaymentCanceled() {
  const router = useRouter(), // Changed from navigate
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   return (
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>
        <p className="text-zion-slate-light mb-6">
          Your payment process was canceled. No charges have been made to your account.
        </p>
>>>>>>>         <div className="flex flex-col space-y-3">
ursor/fix-website-loading-errors-and-merge-6662
        <div className="flex flex-col space-y-3">
>>>>>>>           <Button
            onClick={(,) => router.push('/payments')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
export default function PaymentCanceled() {
  const router = useRouter(); // Changed from navigate
  return (
    <div className='flex flex-1 bg-zion-blue items-center justify-center p-4'>
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>
        <div className='inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center'>
          <XCircle className='h-6 w-6 text-red-600' />
        </div>
        <h1 className='text-2xl font-bold text-white mb-2'>Payment Canceled</h1>
        <p className='text-zion-slate-light mb-6'>
          Your payment process was canceled. No charges have been made to your
          account.
        </p>
        <div className='flex flex-col space-y-3'>
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'
          >
            Try Again
          </Button>
          <Button
            variant='outline'
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >
          
          <Button 
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
          >
>>>>>>>             Return to Dashboard
          </Button>
        </div>
        </div>
      </div>
  )
import React from 'react',;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router', // Changed from useNavigate;
import { XCircle } from 'lucide-react';
export default function PaymentCanceled() {;
  const router = useRouter(), // Changed from navigate;

  return (
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">;
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">;
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">;
            <XCircle className="h-6 w-6 text-red-600" />;
          </div>;

        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>;

        <p className="text-zion-slate-light mb-6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;

        <div className="flex flex-col space-y-3">;
          <Button
            onClick={(,) => router && router.push('/payments')} // Changed to router && router.push;
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Try Again;
          </Button>;

          <Button
            variant="outline"
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white';
import { useRouter } from 'next/router'; // Changed from useNavigate;
import { XCircle } from 'lucide-react';

export default function PaymentCanceled() {;
  const router = useRouter(); // Changed from navigate;

  return (
    <div className='flex flex-1 bg-zion-blue items-center justify-center p-4'>;
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>;
        <div className='inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center'>;
          <XCircle className='h-6 w-6 text-red-600' />;
        </div>;

        <h1 className='text-2xl font-bold text-white mb-2'>Payment Canceled</h1>;

        <p className='text-zion-slate-light mb-6'>;
          Your payment process was canceled. No charges have been made to your;
          account.;
        </p>;

        <div className='flex flex-col space-y-3'>;
          <Button
            onClick={() => router && router.push('/payments')} // Changed to router && router.push;
            className='bg-zion-purple hover:bg-zion-purple-dark text-white';
          >;
            Try Again;
          </Button>;

          <Button
            variant='outline'
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >;
import React from 'react';
import { Button } from '@/components / ui / button';
import { use_router } from 'next / router'; // Changed from use_navigate;
import { XCircle } from 'lucide-react';
import { use_router } from 'next / router', // Changed from use_navigate;
export default /**
 * PaymentCanceled - Function description
 */
function PaymentCanceled() {
  const router = use_router (), // Changed from navigate;
  return (
    <div className="flex flex - 1 bg - zion - blue items - center justify - center p - 4">;
        <div className="max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center">;
          <div className="inline - flex h - 12 w - 12 rounded - full bg - red - 100 mb - 4 items - center justify - center">;
            <XCircle className="h - 6 w - 6 text - red - 600" />;
          </div>;
        <h1 className="text - 2xl font - bold text - white mb - 2">Payment Canceled</h1>;
        <p className="text - zion - slate - light mb - 6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;
        <div className="flex flex - col space - y-3">;
          <Button;
            on_click={(, ) => router.push ('/payments')} // Changed to router.push;
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            Try Again;
          </Button>;
          <Button;
            variant="outline";
            on_click={() => router.push ('/dashboard')} // Changed to router.push;
            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
export default /**
 * PaymentCanceled - Function description
 */
function PaymentCanceled() {
  const router = use_router (); // Changed from navigate;
  return (
    <div className='flex flex - 1 bg - zion - blue items - center justify - center p - 4'>;
      <div className='max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center'>;
        <div className='inline - flex h - 12 w - 12 rounded - full bg - red - 100 mb - 4 items - center justify - center'>;
          <XCircle className='h - 6 w - 6 text - red - 600' />;
        </div>;
        <h1 className='text - 2xl font - bold text - white mb - 2'>Payment Canceled</h1>;
        <p className='text - zion - slate - light mb - 6'>;
          Your payment process was canceled. No charges have been made to your;
          account.;
        </p>;
        <div className='flex flex - col space - y-3'>;
          <Button;
            on_click={() => router.push ('/payments')} // Changed to router.push;
            className='bg - zion - purple hover:bg - zion - purple - dark text - white';
          >;
            Try Again;
          </Button>;
          <Button;
            variant='outline';
            on_click={() => router.push ('/dashboard')} // Changed to router.push;
            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white'          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Return to Dashboard;
          </Button>;
        </div>;
      </div>;

    </div>);            className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";

          >;
            Return to Dashboard;
          </Button>;
        </div>;

        </div>
      </div>
  );
}
;
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 