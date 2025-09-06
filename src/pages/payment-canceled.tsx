<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router', // Changed from useNavigate
import { XCircle } from 'lucide-react'

export default function PaymentCanceled() {
  const router = useRouter(), // Changed from navigate
  
  return (
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
        
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
          
          <Button 
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
<<<<<<< HEAD
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
=======

import React from 'react';
import { Button } from '@/components/ui/button';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useRouter } from 'next/router'; // Changed from useNavigate
import { XCircle } from 'lucide-react';

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
<<<<<<< HEAD
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
=======
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            Return to Dashboard
          </Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </div>
  );
<<<<<<< HEAD
=======
        </div>
      </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
