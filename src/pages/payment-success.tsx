
<<<<<<< HEAD
import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next',
export default function PaymentSuccess() {
  const router = useRouter(), // Changed from navigate
  const { t } = useTranslation(),
=======
import React from 'react';

export default function PaymentSuccess() {_const _router = useRouter(); // Changed from navigate
  const { t} = useTranslation();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className=&quot;min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4&quot;>
      <div className=&quot;max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center&quot;>
        <div className=&quot;inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center&quot;>
          <CheckCircle2 className=&quot;h-6 w-6 text-green-600&quot; />
        </div>
        
<<<<<<< HEAD
        <h1 className=&quot;text-2xl font-bold text-white mb-2&quot;>{t('errors.payment_success_title')}</h1>
        
        <p className=&quot;text-zion-slate-light mb-6&quot;>
          {t('errors.payment_success_message')}
=======
        <h1 className="text-2xl font-bold text-white mb-2">{_t('errors.payment_success_title')}</h1>
        
        <p className="text-zion-slate-light mb-6">
          {_t('errors.payment_success_message')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </p>
        
        <div className=&quot;flex flex-col space-y-3&quot;>
          <Button 
<<<<<<< HEAD
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
=======
            onClick={_() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_t('errors.go_to_dashboard')}
          </Button>
          
          <Button 
<<<<<<< HEAD
            variant=&quot;outline&quot;
            onClick={() => router.push('/')} // Changed to router.push
            className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
=======
            variant="outline"
            onClick={_() => router.push('/')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_t('errors.return_home')}
          </Button>
        </div>
      </div>
    </div>
  )
}
