
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { Button  } from '@/components/ui/button';
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next';
export default function PaymentSuccess() {
  const router = null;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router'; // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'; import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next';
export default function PaymentSuccess() {;
  const router = useRouter(); // Changed from navigate
  const { t } = useTranslation()
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next',
export default function PaymentSuccess() {
  const router = useRouter(), // Changed from navigate
  const { t } = useTranslation(),
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
        <div className="inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            onClick={() => router.push('/dashboard')} // Changed to router.push
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <h1 className='text-2xl font-bold text-white mb-2'>
          {t('errors.payment_success_title')}
        </h1>
        <p className='text-zion-slate-light mb-6'>
          {t('errors.payment_success_message')}
        </p>
        <div className='flex flex-col space-y-3'>
          <Button
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             onClick={() => router.push('/dashboard')} // Changed to router.push
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}
          </Button>
<<<<<<< HEAD

            variant="outline"
=======
          <Button
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        
        <p className="text-zion-slate-light mb-6">
          {t('errors.payment_success_message')}
        </p>
        
        <div className="flex flex-col space-y-3">
          <Button 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  const router = useRouter(); // Changed from navigate
  const { t } = useTranslation();

  
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
import { useRouter } from 'next/router'; // Changed from useNavigate;
import { CheckCircle2 } from 'lucide-react';import { useTranslation } from 'react-i18next';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router', // Changed from useNavigate;
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router', // Changed from useNavigate;
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export default function PaymentSuccess() {;
  const router = useRouter(); // Changed from navigate;
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4'>;
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>;
        <div className='inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center'>;
          <CheckCircle2 className='h-6 w-6 text-green-600' />;
        </div>;

        <h1 className='text-2xl font-bold text-white mb-2'>;
          {t('errors && errors.payment_success_title')}
        </h1>;

        <p className='text-zion-slate-light mb-6'>;
          {t('errors && errors.payment_success_message')}
        </p>;

        <div className='flex flex-col space-y-3'>;
          <Button
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push;
            className='bg-zion-purple hover:bg-zion-purple-dark text-white';
          >;
            {t('errors && errors.go_to_dashboard')}
          </Button>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button
            variant='outline'
            onClick={() => router.push('/')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >  return (
<<<<<<< HEAD


          <Button 


>>>>>>>             variant="outline"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}
          </Button>
          <Button
          <Button 
            variant="outline"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={() => router.push('/')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            {t('errors.return_home')}
          </Button>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Button 

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
          
          <Button 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="outline"
            onClick={() => router.push('/')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            {t('errors.return_home')}
          </Button>;
        </div>;
      </div>;
    </div>;
  );
}
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
