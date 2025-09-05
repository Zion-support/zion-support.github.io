
import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate,
import { XCircle } from 'lucide-react'

export default function PaymentCanceled() {
  const router = useRouter(), // Changed from navigate,
return (
    <div className=&quot;flex flex-1 bg-zion-blue items-center justify-center p-4&quot;>
        <div className=&quot;max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center&quot;>
          <div className=&quot;inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center&quot;>
            <XCircle className=&quot;h-6 w-6 text-red-600&quot; />          </div>
        
        <h1 className=&quot;text-2xl font-bold text-white mb-2&quot;>Payment Canceled</h1>
        
        <p className=&quot;text-zion-slate-light mb-6&quot;>
          Your payment process was canceled. No charges have been made to your account.
        </p>
        
        <div className=&quot;flex flex-col space-y-3&quot;>
          <Button,
onClick={() => router.push('/payments')} // Changed to router.push,
className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
          >
            Try Again
          </Button>
          
          <Button,
variant=&quot;outline&quot;
            onClick={() => router.push('/dashboard')} // Changed to router.push,
className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"            variant="outline"
            onClick={_() => router.push('/dashboard')} // Changed to router.push,
className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            Return to Dashboard
          </Button>
        </div>
        </div>
      </div>
  )
}
