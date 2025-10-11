import React from 'react'
import { Button  } from '@/components/ui/button'
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
export default function PaymentSuccess() {









  return (
    <div>
          <div>
        <div>
          <CheckCircle2 />
        </div>
        <h1 className='text-2xl font-bold text-white mb-2'>
          {t('errors.payment_success_title')}

        </h1>
        <p className='text-zion-slate-light mb-6'>
          {t('errors.payment_success_message')}

        </p>
        <div>
          <Button />
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        
        <p className="text-zion-slate-light mb-6">
          {t('errors.payment_success_message')}

        </p>
        
        <div>
          <Button />
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}

          </Button>


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }

  }

  const router = useRouter(); // Changed from navigate
  const { t } = useTranslation()
  static getDerivedStateFromError(error) {
    return { hasError: true }

  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>
    }

    return this.props.children
  }

}

import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'; // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react';import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
export default function PaymentSuccess() {
  const router = useRouter(); // Changed from navigate
  const { t } = useTranslation()




  return (
    <div>
          <div>
        <div>
          <CheckCircle2 />
        </div>
        <h1 className='text-2xl font-bold text-white mb-2'>
          {t('errors.payment_success_title')}

        </h1>
        <p className='text-zion-slate-light mb-6'>
          {t('errors.payment_success_message')}

        </p>
        <div>
          <Button />
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        
        <p className="text-zion-slate-light mb-6">
          {t('errors.payment_success_message')}

        </p>
        
        <div>
          <Button />
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}

          </Button>


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }

  }

  const router = useRouter(); // Changed from navigate
  const { t } = useTranslation()
  static getDerivedStateFromError(error) {
    return { hasError: true }

  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>
    }

    return this.props.children
  }

}

import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next',
export default function PaymentSuccess() {
  const router = useRouter(), // Changed from navigate
  const { t } = useTranslation(),
  





  return (
    <div>
          <div>
        <div>
          <CheckCircle2 className='h-6 w-6 text-green-600' /></$1>
        <h1 className='text-2xl font-bold text-white mb-2'>
          {t('errors && errors.payment_success_title')}

        </h1>
        <p className='text-zion-slate-light mb-6'>
          {t('errors && errors.payment_success_message')}

        </p>
        <div>
          <Button />
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'
          >
            {t('errors && errors.go_to_dashboard')}

          </Button>
          <Button />
            variant='outline'
            onClick={() => router.push('/')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >  return (

          <Button />
            variant="outline"
            onClick={() => router.push('/')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            {t('errors.return_home')}

          </Button>
        </div>
      </div>
    </div>




    <div>
          <div>
        <div>
          <CheckCircle2 className="h-6 w-6 text-green-600" /></$1>
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors && errors.payment_success_title')}</h1>
        <p className="text-zion-slate-light mb-6">
          {t('errors && errors.payment_success_message')}

        </p>
        <div>
          <Button />
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors && errors.go_to_dashboard')}

          </Button>
          <Button />
          <Button />
            variant="outline"

            onClick={() => router.push('/')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            {t('errors.return_home')}

          </Button></$1></$1></$1>
  )
}

  )
}

import React from 'react'
import { Button } from '@/components / ui / button'
import { use_router } from 'next / router'; // Changed from use_navigate
import { CheckCircle2 } from 'lucide-react'; import { use_translation } from 'react - i18next'
import { use_router } from 'next / router', // Changed from use_navigate
import { CheckCircle2 } from 'lucide-react'
import { use_translation } from 'react - i18next'
export default /**
 * PaymentSuccess - Function description
 */
function PaymentSuccess() {
  const router = use_router (); // Changed from navigate
  const { t } = use_translation ()
  return (
    <div>
          <div>
        <div>
          <CheckCircle2 className='h - 6 w - 6 text - green - 600' /></$1>
        <h1 className='text - 2xl font - bold text - white mb - 2'>
          {t ('errors.payment_success_title')}

        </h1>
        <p className='text - zion - slate - light mb - 6'>
          {t ('errors.payment_success_message')}

        </p>
        <div>
          <Button />
            on_click={() => router.push ('/dashboard')} // Changed to router.push
            className='bg - zion - purple hover:bg - zion - purple - dark text - white'
          >
            {t ('errors.go_to_dashboard')}

          </Button>
          <Button />
            variant='outline'
            on_click={() => router.push ('/')} // Changed to router.push
            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white'          >  return (
    <div>
          <div>
        <div>
          <CheckCircle2 className="h - 6 w - 6 text - green - 600" /></$1>
        <h1 className="text - 2xl font - bold text - white mb - 2">{t ('errors.payment_success_title')}</h1>
        <p className="text - zion - slate - light mb - 6">
          {t ('errors.payment_success_message')}

        </p>
        <div>
          <Button />
            on_click={() => router.push ('/dashboard')} // Changed to router.push
            className="bg - zion - purple hover:bg - zion - purple - dark text - white"
          >
            {t ('errors.go_to_dashboard')}

          </Button>
          <Button />
            variant="outline"
            on_click={() => router.push ('/')} // Changed to router.push
            className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white"
          >
            {t ('errors.return_home')}

          </Button></$1></$1></$1>)
}

</$1></div></div></div></div></div></div></div></div></div></div>