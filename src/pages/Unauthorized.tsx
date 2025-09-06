<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export default function Unauthorized() {
  const { t } = useTranslation();
  return (
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'
export default function Unauthorized() {
  const { t } = useTranslation()
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import Link from "next/link",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header";
import { ShieldAlert } from 'lucide-react'
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
<<<<<<< HEAD
export default function Unauthorized() {
  const { t } = useTranslation(),
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center'>;
              {t('errors && errors.return_home')}
            </Link>;
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'            >              href="/"
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useTranslation } from "react-i18next",
export default function Unauthorized() {
  const { t } = useTranslation(),
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light">
          <div className="flex justify-center mb-6">
            <div className="bg-zion-purple/20 p-4 rounded-full">
              <ShieldAlert className="h-12 w-12 text-zion-purple" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">{t('errors.access_denied')}</h1>
          <p className="text-zion-slate-light mb-6">
            {t('errors.no_permission')}
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href='/'
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center'            >
              {t('errors.return_home')}
            </Link>
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'            >              href="/"
              href="/"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
=======
>>>>>>>               className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            >
              {t('errors.return_home')}
            </Link>
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'              href="/auth/login"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              {t('errors.login_different_account')}
            </Link>
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
  );
}
=======
      </div>
    </>
  )
}
=======
  )
}
      </div>;
    </>;
  );
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              href="/auth/login"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
import Link from "next/link",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
import { ShieldAlert } from 'lucide-react';
import { useTranslation } from "react-i18next",;
export default function Unauthorized() {;
  const { t } = useTranslation();
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12">;
        <div className="bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light">;
          <div className="flex justify-center mb-6">;
            <div className="bg-zion-purple/20 p-4 rounded-full">;
              <ShieldAlert className="h-12 w-12 text-zion-purple" />;
            </div>;
          </div>;
          <h1 className="text-3xl font-bold text-white mb-3">{t('errors.access_denied')}</h1>;
          <p className="text-zion-slate-light mb-6">;
            {t('errors.no_permission')}
          </p>;
          <div className="flex flex-col gap-3">;
            <Link;
              href="/";
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
            >;
              {t('errors.return_home')}
            </Link>;
            <Link;
              href="/auth/login";
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center";
            >;
<<<<<<< HEAD
              {t ('errors.return_home')}
            </Link>;
            <Link;
              href='/auth / login';
              className='w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center'              href="/auth / login";
              className="w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center";
            >;
              {t ('errors.login_different_account')}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>             </Link>;
=======
              {t('errors.login_different_account')}
            </Link>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </div>;
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
