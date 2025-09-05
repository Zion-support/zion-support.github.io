
<<<<<<< HEAD
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useRouter } from 'next/router', // Changed from useNavigate;
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next',;
;
export default function PaymentSuccess() {;
  const router = useRouter(), // Changed from navigate;
  const { t } = useTranslation(),;
  ;
  return (;
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">;
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">;
        <div className="inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center">;
          <CheckCircle2 className="h-6 w-6 text-green-600" />;
        </div>;
        ;
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>;
        ;
        <p className="text-zion-slate-light mb-6">;
          {t('errors.payment_success_message')}
        </p>;
        ;
        <div className="flex flex-col space-y-3">;
          <Button ;
            onClick={() => router.push('/dashboard')} // Changed to router.push;
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            {t('errors.go_to_dashboard')}
          </Button>;
          ;
          <Button ;
            variant="outline";
            onClick={() => router.push('/')} // Changed to router.push;
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
          >;
            {t('errors.return_home')}
          </Button>;
        </div>;
      </div>;
    </div>;
  ),;
=======
import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next',
export default function PaymentSuccess() {
  const router = useRouter(), // Changed from navigate
  const { t } = useTranslation(),  
  return (
    <div className=&quot;min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4&quot;>
      <div className=&quot;max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center&quot;>
        <div className=&quot;inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center&quot;>
          <CheckCircle2 className=&quot;h-6 w-6 text-green-600&quot; />
        </div>
        
        <h1 className=&quot;text-2xl font-bold text-white mb-2&quot;>{t('errors.payment_success_title')}</h1>
        
        <p className=&quot;text-zion-slate-light mb-6&quot;>
          {t('errors.payment_success_message')}        </p>
        
        <div className=&quot;flex flex-col space-y-3&quot;>
          <Button 
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;          >
            {_t('errors.go_to_dashboard')}
          </Button>
          
          <Button 
            variant=&quot;outline&quot;
            onClick={() => router.push('/')} // Changed to router.push
            className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;          >
            {_t('errors.return_home')}
          </Button>
        </div>
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
