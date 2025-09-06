<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { Button } from '@/components/ui/button';

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

import { useRouter } from 'next/router'; // Changed from useNavigate

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { Button } from '@/components/ui/button'
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router'; // Changed from useNavigate
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { XCircle } from 'lucide-react'
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { XCircle } from 'lucide-react'


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { XCircle } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate
export default function PaymentCanceled() {
  const router = useRouter(), // Changed from navigate
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>
        <p className="text-zion-slate-light mb-6">
          Your payment process was canceled. No charges have been made to your account.
        </p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>         <div className="flex flex-col space-y-3">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="flex flex-col space-y-3">
>>>>>>>           <Button
            onClick={(,) => router.push('/payments')} // Changed to router.push
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>
        
        <p className="text-zion-slate-light mb-6">
          Your payment process was canceled. No charges have been made to your account.
        </p>
        
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Try Again
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
export default function PaymentCanceled() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button 
            variant="outline";
            onClick={() => router.push('/dashboard')} // Changed to router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white';
export default function PaymentCanceled() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
        
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>
        
        <p className="text-zion-slate-light mb-6">
          Your payment process was canceled. No charges have been made to your account.
        </p>
        
        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Try Again
          </Button>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Button 
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/router'; // Changed from useNavigate;

import { XCircle } from 'lucide-react';
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          >
            Return to Dashboard
          </Button>
        </div>
        </div>
      </div>
    </div>
  );            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >
<<<<<<< HEAD

            Return to Dashboard
=======
>>>>>>>             Return to Dashboard
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </Button>
        </div>
<<<<<<< HEAD
        </div>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  )
import React from 'react',;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
      </div>
  )
      </div>
  )
}
;
}
  )
import React from 'react',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  )
import React from 'react',;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router', // Changed from useNavigate;
import { XCircle } from 'lucide-react';
export default function PaymentCanceled() {;
  const router = useRouter(), // Changed from navigate;
  return (;
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button;
            onClick={() => router.push('/payments')} // Changed to router.push;
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Try Again;
          </Button>;
          <Button;
            variant="outline";
<<<<<<< HEAD
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
            Return to Dashboard;
          </Button>;
        </div>;
      </div>;

    </div>);            className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";

=======
            onClick={() => router.push('/dashboard')} // Changed to router.push;
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            Return to Dashboard;
          </Button>;
        </div>;
<<<<<<< HEAD

        </div>
      </div>
=======
        </div>;
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

      </div>);
      </div>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
