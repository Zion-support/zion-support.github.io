import { AlertCircle, CheckCircle, Mail } from 'lucide-react'

import { toast } from '@/hooks/use-toast'
import { AuthLayout } from '@/layout'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
const SignupSchema = Yup.object({
  name: Yup.string().required('Name is required')
  email: Yup.string().email('Invalid email').required('Email is required')
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must include an uppercase letter')
    .matches(/[a-z]/, 'Password must include a lowercase letter')
    .matches(/[0-9]/, 'Password must include a number')
    .required('Password is required')
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
  terms: Yup.boolean().oneOf(
    [true]
    'You must accept the terms and conditions'
  const router = useRouter(); // Changed from navigate
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [emailVerificationRequired, setEmailVerificationRequired] =
    useState(false)
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true)
  const [healthCheckLoading, setHealthCheckLoading] = useState(true)
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null)
  // Check if this is a partner signup
  const isPartnerSignup = router.query.type === 'partner'
  const signupSource = (router.query.source as string) |'direct'
  const performHealthCheck = async () => {
    setHealthCheckLoading(true)
    setHealthCheckError(null)
    try {
      const res = await axios.get('/api/auth/health')
      setAuthServiceAvailable(res.status === 200)
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues')
      }
    } catch (err: any) {
      logErrorToProduction('Auth service health check failed', { data: err })
      setAuthServiceAvailable(false)
      // Set a more specific error message based on the error type
      ) {
        setHealthCheckError('Network connection issues detected')
      } else if (err.response?.status === 500) {
        setHealthCheckError(
          'Authentication service is temporarily unavailable'
        )
      } else {
        setHealthCheckError('Unable to verify authentication service status')
      }
    } finally {
      setHealthCheckLoading(false)
    }
  }
  useEffect(() => {
    performHealthCheck()
  }, [])
  const formik = useFormik({
    initialValues: {
      name: ''
      email: ''
      password: ''
      confirm: ''
      terms: false
    }
    validationSchema: SignupSchema
    onSubmit: async (values, { setErrors }) => {
      logInfo('Form submission started with:', {
        name: values.name,        email: values.email
        hasPassword: !!values.password
        isPartnerSignup
      })
      setLoading(true)
      setErrorMessage(''); // Clear any previous error
      setSuccessMessage(''); // Clear any previous success message
      setEmailVerificationRequired(false)
      try {
        const requestData = {
          name: values.name
          email: values.email
          password: values.password
          ...(isPartnerSignup && {
            userType: 'partner'
            source: signupSource
            metadata: {
              partnerProgram: true
              signupType: 'partner'
            }
          })
        }
        logInfo('Making API request to /api/auth/register with:', {
          ...requestData
          password: '[REDACTED]'
        })
        const res = await axios.post('/api/auth/register', requestData)
        logInfo('API response received:', {
          status: res.status
          data: res.data
        })
        if (res.status === 201) {
          const data = res.data
          if (data.emailVerificationRequired) {
            // Email verification is required
            setEmailVerificationRequired(true)
            const message = isPartnerSignup
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, your partner application will be reviewed.'
              : 'Account created! Please check your email to verify your account.'
            setSuccessMessage(data.message |message)
            toast({
              title: isPartnerSignup
                ? 'Partner application submitted!'
                : 'Account created!'
              description: isPartnerSignup
                ? 'Please verify your email. Your partner application will be reviewed after verification.'
                : 'Please check your email to verify your account before logging in.'
            })
          } else {
            // Account created and ready to use
            const message = isPartnerSignup
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.'
              : 'Account created successfully!'
            setSuccessMessage(data.message |message)
            toast({
              title: isPartnerSignup
                ? 'Partner application submitted!'
                : 'Account created successfully!'
              description: isPartnerSignup
                ? 'Welcome to the partner program. You can now log in.'
                : 'Welcome to the platform. You can now log in.'
            })
            // Redirect to appropriate page after a short delay
            setTimeout(() => {
              router.push(isPartnerSignup ? '/partners' : '/login')
            }, 2000) }
        }
      } catch (err: any) {
        logErrorToProduction('Signup error details:', {
          message: err.message
          response: err.response
            ? {
                status: err.response.status
                statusText: err.response.statusText
                data: err.response.data
              }
            : 'No response'
          request: err.request ? 'Request made but no response' : 'No request'
          config: err.config
            ? {
                url: err.config.url
                method: err.config.method
              }
            : 'No config'
        })
        const status = err.response?.status
        // Try both 'error' and 'message' fields for compatibility
          'Signup failed. Please try again.'
        logInfo('Processed error message:', { data: errorMsg })
        if (status === 409) {
          // Handle duplicate email specifically
          setErrorMessage(errorMsg)
          setErrors({ email: errorMsg })
          // Show toast notification
          toast({
            title: 'Signup failed'
            description: errorMsg
            variant: 'destructive'
          })
        } else if (status === 400) {
          // Handle validation errors (weak password, etc.)
          setErrorMessage(errorMsg)
          // Set the error on password field if it's password-related
          if (errorMsg.toLowerCase().includes('password')) {
            setErrors({ password: errorMsg })
          } else {
            setErrors({ confirm: errorMsg })
          }
          toast({
            title: 'Signup failed'
            description: errorMsg
            variant: 'destructive'
          })
        } else {
          // Handle other errors (network, server, etc.)
          setErrorMessage(errorMsg)
          setErrors({ confirm: errorMsg })
          // Show toast notification for other errors
          toast({
            title: 'Signup failed'
            description: errorMsg
            variant: 'destructive'
          })
        }
      } finally {
        logInfo('Form submission completed, setting loading to false')
        setLoading(false)
      }
    }
  })
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    formik.setTouched({
      name: true
      email: true
      password: true
      confirm: true
      terms: true
    })
    await formik.handleSubmit(e)
  }
  // After successful registration, guide the user to the verification screen
  useEffect((,) => {
    if (emailVerificationRequired && formik.values.email) {
      const timer = setTimeout(() => {
        router.push(
          `/verify-status?email=${encodeURIComponent(formik.values.email)}`
        )
      }, 3000)
      return () => clearTimeout(timer) }
    return undefined
  }, [emailVerificationRequired, formik.values.email, router])
=======
import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router', // Changed from react-router-dom;
import { useFormik } from 'formik',;
import * as Yup from 'yup',;
import axios from 'axios',;
import Link from 'next/link',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter',;
import { AuthButtons } from '@/components/AuthButtons',;
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast',;
import { AuthLayout } from '@/layout',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
const SignupSchema = Yup.object({;
  name: Yup.string().required('Name is required'),;
  email: Yup.string().email('Invalid email').required('Email is required'),;
  password: Yup.string();
    .min(8, 'Password must be at least 8 characters');
    .matches(/[A-Z]/, 'Password must include an uppercase letter');
    .matches(/[a-z]/, 'Password must include a lowercase letter');
    .matches(/[0-9]/, 'Password must include a number');
    .required('Password is required'),;
  confirm: Yup.string();
    .oneOf([Yup.ref('password')], 'Passwords must match');
    .required('Confirm password is required'),;
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions');
}),;
export default function Signup() {;
  const router = useRouter(), // Changed from navigate;
  const [loading, setLoading] = useState(false),;
  const [errorMessage, setErrorMessage] = useState(''),;
  const [successMessage, setSuccessMessage] = useState(''),;
  const [emailVerificationRequired, setEmailVerificationRequired] = useState(false),;
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),;
  const [healthCheckLoading, setHealthCheckLoading] = useState(true),;
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null),;
  // Check if this is a partner signup;
  const isPartnerSignup = router.query.type === 'partner',;
  const signupSource = router.query.source as string || 'direct',;
  const performHealthCheck = async () => {;
    setHealthCheckLoading(true),;
    setHealthCheckError(null),;
    try {;
      const res = await axios.get('/api/auth/health'),;
      setAuthServiceAvailable(res.status === 200),;
      if (res.status !== 200) {;
        setHealthCheckError('Authentication service is experiencing issues');
      }
    } catch (err: any) {;
      logErrorToProduction('Auth service health check failed', { data: err }),;
      setAuthServiceAvailable(false),;
      // Set a more specific error message based on the error type;
      if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {;
        setHealthCheckError('Network connection issues detected');
      } else if (err.response?.status === 500) {;
        setHealthCheckError('Authentication service is temporarily unavailable');
      } else {;
        setHealthCheckError('Unable to verify authentication service status');
      }
    } finally {;
      setHealthCheckLoading(false);
    }
  },;
  useEffect(() => {;
    performHealthCheck();
  }, []),;
  const formik = useFormik({;
    initialValues: {;
      name: '',;
      email: '',;
      password: '',;
      confirm: '',;
      terms: false;
    },;
    validationSchema: SignupSchema,;
    onSubmit: async (values, { setErrors }) => {;
      logInfo('Form submission started with:', {;
        name: values.name,;
        email: values.email,;
        hasPassword: !!values.password,;
        isPartnerSignup;
      }),;
      setLoading(true),;
      setErrorMessage(''), // Clear any previous error;
      setSuccessMessage(''), // Clear any previous success message;
      setEmailVerificationRequired(false),;
      try {;
        const requestData = {;
          name: values.name,;
          email: values.email,;
          password: values.password,;
          ...(isPartnerSignup && {;
            userType: 'partner',;
            source: signupSource,;
            metadata: {;
              partnerProgram: true,;
              signupType: 'partner';
            }
          });
        },;
        logInfo('Making API request to /api/auth/register with:', {;
          ...requestData,;
          password: '[REDACTED]';
        }),;
        const res = await axios.post('/api/auth/register', requestData),;
        logInfo('API response received:', {;
          status: res.status,;
          data: res.data;
        }),;
        if (res.status === 201) {;
          const data = res.data,;
          if (data.emailVerificationRequired) {;
            // Email verification is required;
            setEmailVerificationRequired(true),;
            const message = isPartnerSignup;
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, your partner application will be reviewed.';
              : 'Account created! Please check your email to verify your account.',;
            setSuccessMessage(data.message || message),;
            toast({;
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created!',;
              description: isPartnerSignup;
                ? 'Please verify your email. Your partner application will be reviewed after verification.';
                : 'Please check your email to verify your account before logging in.'});
          } else {;
            // Account created and ready to use;
            const message = isPartnerSignup;
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.';
              : 'Account created successfully!',;
            setSuccessMessage(data.message || message),;
            toast({;
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created successfully!',;
              description: isPartnerSignup;
                ? 'Welcome to the partner program. You can now log in.';
                : 'Welcome to the platform. You can now log in.'}),;
            // Redirect to appropriate page after a short delay;
            setTimeout(() => {;
              router.push(isPartnerSignup ? '/partners' : '/login');
            }, 2000);
          }
        }
      } catch (err: any) {;
        logErrorToProduction('Signup error details:', {;
          message: err.message,;
          response: err.response ? {;
            status: err.response.status,;
            statusText: err.response.statusText,;
            data: err.response.data;
          } : 'No response',;
          request: err.request ? 'Request made but no response' : 'No request',;
          config: err.config ? {;
            url: err.config.url,;
            method: err.config.method;
          } : 'No config';
        }),;
        const status = err.response?.status,;
        // Try both 'error' and 'message' fields for compatibility;
        const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.',;
        logInfo('Processed error message:', { data: errorMsg }),;
        if (status === 409) {;
          // Handle duplicate email specifically;
          setErrorMessage(errorMsg),;
          setErrors({ email: errorMsg }),;
          // Show toast notification;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            variant: 'destructive'});
        } else if (status === 400) {;
          // Handle validation errors (weak password, etc.);
          setErrorMessage(errorMsg),;
          // Set the error on password field if it's password-related;
          if (errorMsg.toLowerCase().includes('password')) {;
            setErrors({ password: errorMsg });
          } else {;
            setErrors({ confirm: errorMsg });
          }
;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            variant: 'destructive'});
        } else {;
          // Handle other errors (network, server, etc.);
          setErrorMessage(errorMsg),;
          setErrors({ confirm: errorMsg }),;
          // Show toast notification for other errors;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            variant: 'destructive'});
        }
      } finally {;
        logInfo('Form submission completed, setting loading to false'),;
        setLoading(false);
      }
    }
  }),;
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {;
    e.preventDefault(),;
    formik.setTouched({;
      name: true,;
      email: true,;
      password: true,;
      confirm: true,;
      terms: true;
    }),;
    await formik.handleSubmit(e);
  },;
  // After successful registration, guide the user to the verification screen;
  useEffect(() => {;
    if (emailVerificationRequired && formik.values.email) {;
      const timer = setTimeout(() => {;
        router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`);
      }, 3000),;
      return () => clearTimeout(timer);
    }
    return undefined
  }, [emailVerificationRequired, formik.values.email, router]),

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Show loading state only during initial health check
  if (healthCheckLoading) {
    return (
      <AuthLayout>
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-muted-foreground">Initializing signup...</p>
          </div>
        </div>
      </AuthLayout>
    )
  }
  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          {isPartnerSignup && (
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-foreground">Partner Application</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Join the Zion AI Partner Program and start earning rewards
              </p>
            </div>
          )}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() =>
                  router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`)
                }
              >
                Check Verification Status
              </Button>
=======
              <Button
                type="button"
                variant="ghost"
                className="w-full text-sm"
                onClick={() => {
                  setEmailVerificationRequired(false),
                  setSuccessMessage('')
                }}
              >;
                Try Different Email;
              </Button>;
            </div>;
          )}
;
          {/* Additional help text when service issues are detected */}
          {healthCheckError && (
            <div className="text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
              <p>⚠️ We detected some authentication service issues.</p>
              <p>If signup fails, please try again in a few minutes or contact support.</p>
            </div>
          )}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </form>
          {!emailVerificationRequired && (
            <div className="mt-6">
              <AuthButtons providers={["google", "github"]} />
            </div>
          )}
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true)
    try {
      const { res, data: resData } = await register(
        data.displayName
        data.email
        data.password
      )
      // Handle duplicate email error from API
      if (res.status === 409 && resData?.code === 'EMAIL_EXISTS') {
        form.setError('email', { message: resData.message })
        toast.error('Email already registered – please login.')
        return;
}
      // Check for successful response
      if (res.ok && resData.token && resData.user) {
        // Successful registration
        safeStorage.setItem('authToken', resData.token)
        setUser(resData.user)
        setTokens({ accessToken: resData.token, refreshToken: resData.refreshToken |null })
      // Handle email verification required case
      if (resData?.emailVerificationRequired) {
        setShowVerificationMessage(true)
        // Do not proceed to set session or navigate
} else if (resData?.session) {
        // Set the session directly if verification is not required
        const { error: sessionError } = await supabase.auth.setSession(resData.session)
        if (sessionError) {
          console.error("Error setting session:", sessionError)
}
        // The onAuthStateChange listener in AuthProvider should now handle
        // updating user state and navigating if necessary for other cases.
        // For direct signup with session, we can navigate.
        toast.success("Welcome to ZionAI 🎉")
        navigate("/dashboard")
} else {
        // This case might indicate an unexpected response from the API
        console.error("Registration response did not include session or emailVerificationRequired flag.", resData)
        form.setError("root", { message: "Registration complete, but an unexpected issue occurred. Please try logging in." })
        toast.error("Registration complete, but an unexpected issue occurred. Please try logging in manually.")
        // Potentially navigate to login or show a more specific error
        return;
}
      // Subscribe user to Mailchimp if opted in (only if registration is fully complete, not pending verification)
      if (data.newsletterOptIn && mailchimpService && !resData?.emailVerificationRequired) {
        try {
          await mailchimpService.addSubscriber({
            email: data.email
            mergeFields: { FNAME: data.displayName }
          })
          await mailchimpService.sendWelcomeEmail(data.email, 'NEW10')
} catch (err) {
          console.error('Mailchimp subscription failed', err)
          // Non-critical error, don't block user flow
}
      }
      // Toast and navigation are handled above if session is present
      // If emailVerificationRequired, no toast/navigation here, message is shown
} catch (err: any) {
      const message = err.message ?? "Registration failed"
      form.setError("root", { message })
      toast.error(message)
} finally {
      setIsSubmitting(false) }
  }
  const onInvalid = (errors: any) => {
    const firstError = Object.keys(errors)[0] as keyof SignupFormValues
    if (firstError) {
      form.setFocus(firstError)
}
  }
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
}
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
}
import React from "react"
import Head from "next/head"
import Link from "next/link"
const Signup = () => {
  return (
    <>
      <Head>
        <title>Signup - Zion Tech Group</title>
        <meta name="description" content="Professional Signup services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Signup
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Signup services and solutions
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>  )
}
=======
        </div>;
      </div>;
    </AuthLayout>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
