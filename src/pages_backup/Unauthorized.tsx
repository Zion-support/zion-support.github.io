const { t } = useTranslation()
  return (
    <>
      <Header />
      <div>
          <div>
          <div>
          <div>
              <ShieldAlert className='h-12 w-12 text-zion-purple' /></$1></$1>
          <h1 className='text-3xl font-bold text-white mb-3'>
            {t('errors && errors.access_denied')}

          </h1>
          <p className='text-zion-slate-light mb-6'>
            {t('errors && errors.no_permission')}

          </p>
          <div>
            <$2 />
              href='/'
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center'>
              {t('errors && errors.return_home')}

            </Link>
            <$2 />
              href='/auth/login'



              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'>              href="/"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              {t('errors && errors.return_home')}

            </Link>
            <$2 />
              href='/auth/login'
              className='w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center'              href="/auth/login"





              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              {t('errors.return_home')}

            </Link>
            <$2 />
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center">
              {t('errors && errors.login_different_account')}

      </div>
    </>
  )
}

import Link from 'next / link'
import { Button } from '@/components / ui / button'
import { Header } from '@/components / Header'
import { ShieldAlert } from 'lucide-react'
import { useTranslation } from "react-i18next",
export default function Unauthorized() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <div>
          <div>
          <div>
          <div>
              <ShieldAlert className="h-12 w-12 text-zion-purple" /></$1></$1>
          <h1 className="text-3xl font-bold text-white mb-3">{t('errors.access_denied')}</h1>
          <p className="text-zion-slate-light mb-6">
            {t('errors.no_permission')}

          </p>
          <div>
            <;$2 />
              href="/"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              {t('errors.return_home')}

            </Link>
            <;$2 />
              href="/auth/login"
              className="w-full border border-zion-blue-light text-zion-slate-light hover:bg-zion-blue hover:text-white px-4 py-2 rounded inline-flex items-center justify-center"
            >
              {t ('errors.return_home')}

            </Link>
            <;$2 />
              href='/auth / login'
              className='w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center'              href="/auth / login"
              className="w - full border border - zion - blue - light text - zion - slate - light hover:bg - zion - blue hover:text - white px - 4 py - 2 rounded inline - flex items - center justify - center"
            >
              {t ('errors.login_different_account')}

            </Link></$1></$1></$1></$1></div>