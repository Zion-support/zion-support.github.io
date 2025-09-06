<<<<<<< HEAD



import React from 'react';
import { Button  } from '@/components/ui/button';
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next';
export default function PaymentSuccess() {


=======


  return (
    <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4'>
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>
        <div className='inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center'>
          <CheckCircle2 className='h-6 w-6 text-green-600' />
        </div>


        
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        
        <p className="text-zion-slate-light mb-6">
          {t('errors.payment_success_message')}
        </p>
        
        <div className="flex flex-col space-y-3">
          <Button 


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'
          >
            {t('errors.go_to_dashboard')}
          </Button>


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
=======
<<<<<<< HEAD
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next',
export default function PaymentSuccess() {
  const router = useRouter(), // Changed from navigate
  const { t } = useTranslation(),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
        
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        
        <p className="text-zion-slate-light mb-6">
          {t('errors.payment_success_message')}
        </p>
        
        <div className="flex flex-col space-y-3">
          <Button 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}
          </Button>
<<<<<<< HEAD
          <Button
            variant='outline'
            onClick={() => router && router.push('/')} // Changed to router && router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >  return (
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
<<<<<<< HEAD
          <Button
=======
          <Button 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            variant="outline"
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
=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          
          <Button 

            variant="outline"
            onClick={() => router && router.push('/')} // Changed to router && router.push;
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
          >;
            {t('errors && errors.return_home')}
          </Button>;
        </div>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from 'react';
import { Button } from '@/components / ui / button';
import { use_router } from 'next / router'; // Changed from use_navigate;
import { CheckCircle2 } from 'lucide-react'; import { use_translation } from 'react - i18next';
import { use_router } from 'next / router', // Changed from use_navigate;
import { CheckCircle2 } from 'lucide-react';
import { use_translation } from 'react - i18next';
export default /**
 * PaymentSuccess - Function description
 */
function PaymentSuccess() {
  const router = use_router (); // Changed from navigate;
  const { t } = use_translation ();
  return (
    <div className='min - h-screen bg - zion - blue flex flex - col items - center justify - center p - 4'>;
      <div className='max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center'>;
        <div className='inline - flex h - 12 w - 12 rounded - full bg - green - 100 mb - 4 items - center justify - center'>;
          <CheckCircle2 className='h - 6 w - 6 text - green - 600' />;
        </div>;
        <h1 className='text - 2xl font - bold text - white mb - 2'>;
          {t ('errors.payment_success_title')}
        </h1>;
        <p className='text - zion - slate - light mb - 6'>;
          {t ('errors.payment_success_message')}
        </p>;
        <div className='flex flex - col space - y-3'>;
          <Button;
            on_click={() => router.push ('/dashboard')} // Changed to router.push;
            className='bg - zion - purple hover:bg - zion - purple - dark text - white';
          >;
            {t ('errors.go_to_dashboard')}
          </Button>;
          <Button;
            variant='outline';
            on_click={() => router.push ('/')} // Changed to router.push;
            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white'          >  return (
    <div className="min - h-screen bg - zion - blue flex flex - col items - center justify - center p - 4">;
      <div className="max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center">;
        <div className="inline - flex h - 12 w - 12 rounded - full bg - green - 100 mb - 4 items - center justify - center">;
          <CheckCircle2 className="h - 6 w - 6 text - green - 600" />;
        </div>;
        <h1 className="text - 2xl font - bold text - white mb - 2">{t ('errors.payment_success_title')}</h1>;
        <p className="text - zion - slate - light mb - 6">;
          {t ('errors.payment_success_message')}
        </p>;
        <div className="flex flex - col space - y-3">;
          <Button;
            on_click={() => router.push ('/dashboard')} // Changed to router.push;
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            {t ('errors.go_to_dashboard')}
          </Button>;
          <Button;
            variant="outline";
            on_click={() => router.push ('/')} // Changed to router.push;
            className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";
          >;
            {t ('errors.return_home')}
          </Button>;
        </div>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
