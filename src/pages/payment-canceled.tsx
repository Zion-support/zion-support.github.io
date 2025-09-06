import React from 'react';
import { Button } from '@/components/ui/button';


ursor/fix-website-loading-errors-and-merge-6662


import React from 'react';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/router'; // Changed from useNavigate

import { XCircle } from 'lucide-react'

export default function PaymentCanceled() {
  const router = useRouter(); // Changed from navigate
  


  

  return (
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

;
}

  )
import React from 'react',;

      </div>);
      </div>);
}
;
