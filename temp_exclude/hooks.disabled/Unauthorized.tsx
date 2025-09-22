
import Link from "next/link",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { ShieldAlert } from 'lucide-react'
import { useTranslation } from "react-i18next",
export default function Unauthorized() {
  const { t } = useTranslation(),
  return (
<<<<<<< HEAD
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
              href="/"
=======
    <>;
      <Header />;
      <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12'>;'
        <div className='bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light'>;'
          <div className='flex justify-center mb-6'>;'
            <div className='bg-zion-purple/20 p-4 rounded-full'>;'
              <ShieldAlert className='h-12 w-12 text-zion-purple' />;
            </div>;
          </div>;'
          <h1 className='text-3xl font-bold text-white mb-3'>;'
            {t('errors && errors.access_denied')}
          </h1>;'
          <p className='text-zion-slate-light mb-6'>;'
            {t('errors && errors.no_permission')}
          </p>;'
          <div className='flex flex-col gap-3'>;
            <Link'
              href='/''
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center'>;'
              {t('errors && errors.return_home')}
            </Link>;
            <Link'
              href='/auth/login''
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'>              href="/";"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
            >;'
              {t('errors && errors.return_home')}
            </Link>;
            <Link'
              href='/auth/login''"
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'              href="/auth/login"

<<<<<<< HEAD:temp_exclude/hooks.disabled/Unauthorized.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/Unauthorized.tsx
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >'
              {t('errors.return_home')}
            </Link>
<<<<<<< HEAD:temp_exclude/hooks.disabled/Unauthorized.tsx
            <Link
<<<<<<< HEAD
              href="/auth/login"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
import Link from "next/link",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
=======

              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center">;
=======
            <Link;
"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/Unauthorized.tsx
              {t('errors && errors.login_different_account')}

      </div>;
    </>;
  );
};

<<<<<<< HEAD:temp_exclude/hooks.disabled/Unauthorized.tsx

import Link from 'next / link';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ShieldAlert } from 'lucide-react';
=======
'
import Link from 'next / link';'
import { Button } from '@/components / ui / button';'
import { Header } from '@/components / Header';'
import { ShieldAlert } from 'lucide-react';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/Unauthorized.tsx
import { useTranslation } from "react-i18next",;
export default function Unauthorized() { return null; }
  const { t } = useTranslation();
  return (;
    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12">;"
        <div className="bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light">;"
          <div className="flex justify-center mb-6">;"
            <div className="bg-zion-purple/20 p-4 rounded-full">;"
              <ShieldAlert className="h-12 w-12 text-zion-purple" />;
            </div>;
          </div>;'"
          <h1 className="text-3xl font-bold text-white mb-3">{t('errors.access_denied')}</h1>;"
          <p className="text-zion-slate-light mb-6">;'
            {t('errors.no_permission')}
          </p>;"
          <div className="flex flex-col gap-3">;
            <Link;"
              href="/";"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
            >;'
              {t('errors.return_home')}
            </Link>;
            <Link;"
              href="/auth/login";"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center";
<<<<<<< HEAD:temp_exclude/hooks.disabled/Unauthorized.tsx
            >;
<<<<<<< HEAD
              {t('errors.login_different_account')}
=======
=======
            >;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/Unauthorized.tsx
              {t ('errors.return_home')}
            </Link>;
            <Link;'
              href='/auth / login';'"
              className='w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center'              href="/auth / login";"
              className="w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center";
            >;'
              {t ('errors.login_different_account')}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </Link>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </>;
  );
}
=======


<<<<<<< HEAD:temp_exclude/hooks.disabled/Unauthorized.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/Unauthorized.tsx
