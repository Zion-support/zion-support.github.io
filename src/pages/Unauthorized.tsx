const { t } = useTranslation();
  return (
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'
export default function Unauthorized() {
  const { t } = useTranslation()

import Link from "next/link",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header";
import { ShieldAlert } from 'lucide-react'
import { useTranslation } from "react-i18next";
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
              <ShieldAlert className="h-12 w-12 text-zion-purple"/>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Access Denied</h1>
          <p className="text-zion-slate-light mb-6">
            You don't have permission to access this page. This could be because your account doesn't have the required permissions or you need to complete your profile.
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
=======
    <>;
      <Header />;
      <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12'>;
        <div className='bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light'>;
          <div className='flex justify-center mb-6'>;
            <div className='bg-zion-purple/20 p-4 rounded-full'>;
              <ShieldAlert className='h-12 w-12 text-zion-purple' />;
            </div>;
          </div>;
          <h1 className='text-3xl font-bold text-white mb-3'>;
            {t('errors && errors.access_denied')}
          </h1>;
          <p className='text-zion-slate-light mb-6'>;
            {t('errors && errors.no_permission')}
          </p>;
          <div className='flex flex-col gap-3'>;
            <Link
              href='/'
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center'>;
              {t('errors && errors.return_home')}
            </Link>;
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'>              href="/";
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
            >;
              {t('errors && errors.return_home')}
            </Link>;
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'              href="/auth/login"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              {t('errors.return_home')}
            </Link>
            <Link
<<<<<<< HEAD
      </div>
    </>
  )
}
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <>;
      <Header />;
      <div className='min-h-screen bg-zion-blue flex flex-col items-center justify-center px-4 py-12'>;
        <div className='bg-zion-blue-dark rounded-xl p-8 max-w-md w-full text-center shadow-lg border border-zion-blue-light'>;
          <div className='flex justify-center mb-6'>;
            <div className='bg-zion-purple/20 p-4 rounded-full'>;
              <ShieldAlert className='h-12 w-12 text-zion-purple' />;
            </div>;
          </div>;
          <h1 className='text-3xl font-bold text-white mb-3'>;
            {t('errors && errors.access_denied')}
          </h1>;
          <p className='text-zion-slate-light mb-6'>;
            {t('errors && errors.no_permission')}
          </p>;
          <div className='flex flex-col gap-3'>;
            <Link
              href='/'
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center'>;
              {t('errors && errors.return_home')}
            </Link>;
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'>              href="/";
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
            >;
              {t('errors && errors.return_home')}
            </Link>;
            <Link
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'              href="/auth/login"


              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              {t('errors.return_home')}
            </Link>
            <Link
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center">;
              {t('errors && errors.login_different_account')}

      </div>;
    </>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
=======


import Link from 'next / link';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
      </div>;
    </>;
  );
};
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              href="/auth/login"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
import Link from "next/link",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import Link from 'next / link';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              {t('errors.login_different_account')}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {t ('errors.return_home')}
            </Link>;
            <Link;
              href='/auth / login';
              className='w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center'              href="/auth / login";
              className="w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center";
            >;
              {t ('errors.login_different_account')}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Link>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD


<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
