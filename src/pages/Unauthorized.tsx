import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ShieldAlert } from 'lucide-react';
import { useTranslation } from "react-i18next";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export default function Unauthorized() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12'>
        <div className='bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light'>
          <div className='flex justify-center mb-6'>
            <div className='bg-zion-purple/20 p-4 rounded-full'>
              <ShieldAlert className='h-12 w-12 text-zion-purple' />
            </div>
          </div>
          <h1 className='text-3xl font-bold text-white mb-3'>
            {t('errors.access_denied')}
          </h1>
          <p className='text-zion-slate-light mb-6'>
            {t('errors.no_permission')}
          </p>
          <div className='flex flex-col gap-3'>
            <Link
              href='/'
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center'            >
              {t('errors.return_home')}
            </Link>
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'            >
=======
              href="/"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              {t('errors.return_home')}
            </Link>
            <Link
<<<<<<< HEAD
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'
=======
              href="/auth/login"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {t('errors.login_different_account')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
