import React from 'react'
import { Button  } from '@/components/ui/button'
import { useRouter } from 'next/router', // Changed from useNavigate
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
export default function PaymentSuccess() {









  return (
          {t('errors.payment_success_title')}
          {t('errors.payment_success_message')}
        
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        
          {t('errors.payment_success_message')}
        


            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}


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
          {t('errors.payment_success_title')}
          {t('errors.payment_success_message')}
        
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors.payment_success_title')}</h1>
        
          {t('errors.payment_success_message')}
        


            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors.go_to_dashboard')}


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
          <CheckCircle2 className='h-6 w-6 text-green-600' /></$1>
          {t('errors && errors.payment_success_title')}
          {t('errors && errors.payment_success_message')}



            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'
          >
            {t('errors && errors.go_to_dashboard')}
            variant='outline'
            onClick={() => router.push('/')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >  return (




            variant="outline"
            onClick={() => router.push('/')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
          >
            {t('errors.return_home')}




          <CheckCircle2 className="h-6 w-6 text-green-600" /></$1>
        <h1 className="text-2xl font-bold text-white mb-2">{t('errors && errors.payment_success_title')}</h1>
          {t('errors && errors.payment_success_message')}
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            {t('errors && errors.go_to_dashboard')}


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
          <CheckCircle2 className='h - 6 w - 6 text - green - 600' /></$1>
          {t ('errors.payment_success_title')}
          {t ('errors.payment_success_message')}
            on_click={() => router.push ('/dashboard')} // Changed to router.push
            className='bg - zion - purple hover:bg - zion - purple - dark text - white'
          >
            {t ('errors.go_to_dashboard')}
            variant='outline'
            on_click={() => router.push ('/')} // Changed to router.push
            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white'          >  return (
          <CheckCircle2 className="h - 6 w - 6 text - green - 600" /></$1>
        <h1 className="text - 2xl font - bold text - white mb - 2">{t ('errors.payment_success_title')}</h1>
          {t ('errors.payment_success_message')}
            on_click={() => router.push ('/dashboard')} // Changed to router.push
            className="bg - zion - purple hover:bg - zion - purple - dark text - white"
          >
            {t ('errors.go_to_dashboard')}
            variant="outline"
            on_click={() => router.push ('/')} // Changed to router.push
            className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white"
          >
            {t ('errors.return_home')}
          </Button></$1></$1></$1>)
}
</$1></div></div></div></div></div></div></div></div></div></div>