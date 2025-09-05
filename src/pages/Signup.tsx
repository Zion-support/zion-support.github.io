<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { useRouter } from 'next/router', // Changed from react-router-dom
import { useFormik } from 'formik',
import * as Yup from 'yup',
import axios from 'axios',
import Link from 'next/link',
import { Input } from '@/components/ui/input',
import { Button } from '@/components/ui/button',
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',
import { Alert, AlertDescription } from '@/components/ui/alert',
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter',
import { AuthButtons } from '@/components/AuthButtons',
import { AlertCircle, CheckCircle, Mail } from 'lucide-react'
import { toast } from '@/hooks/use-toast',
import { AuthLayout } from '@/layout',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',


const SignupSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must include an uppercase letter')
    .matches(/[a-z]/, 'Password must include a lowercase letter')
    .matches(/[0-9]/, 'Password must include a number')
    .required('Password is required'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
}),

export default function Signup() {
  const router = useRouter(), // Changed from navigate
  const [loading, setLoading] = useState(false),
  const [errorMessage, setErrorMessage] = useState(''),
  const [successMessage, setSuccessMessage] = useState(''),
  const [emailVerificationRequired, setEmailVerificationRequired] = useState(false),
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),
  const [healthCheckLoading, setHealthCheckLoading] = useState(true),
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null),
  
  // Check if this is a partner signup
  const isPartnerSignup = router.query.type === 'partner',
  const signupSource = router.query.source as string || 'direct',

  const performHealthCheck = async () => {
    setHealthCheckLoading(true),
    setHealthCheckError(null),
    try {
      const res = await axios.get('/api/auth/health'),
      setAuthServiceAvailable(res.status === 200),
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues')
      }
    } catch (err: any) {
      logErrorToProduction('Auth service health check failed', { data: err }),
      setAuthServiceAvailable(false),
      // Set a more specific error message based on the error type
      if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {
        setHealthCheckError('Network connection issues detected')
      } else if (err.response?.status === 500) {
        setHealthCheckError('Authentication service is temporarily unavailable')
      } else {
        setHealthCheckError('Unable to verify authentication service status')
      }
    } finally {
      setHealthCheckLoading(false)
    }
  },

  useEffect(() => {
    performHealthCheck()
  }, []),

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
      terms: false
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { setErrors }) => {
      logInfo('Form submission started with: ', { 
        name: values.name,
        email: values.email,
        hasPassword: !!values.password,
        isPartnerSignup 
      }),
=======
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';


const _SignupSchema = Yup.object({_name: Yup.string().required('Name is required'), _email: Yup.string().email('Invalid email').required('Email is required'), _password: Yup.string()
    .min(8, _'Password must be at least 8 characters')
    .matches(/[A-Z]/, _'Password must include an uppercase letter')
    .matches(/[a-z]/, _'Password must include a lowercase letter')
    .matches(/[0-9]/, _'Password must include a number')
    .required('Password is required'), _confirm: Yup.string()
    .oneOf([Yup.ref('password')], _'Passwords must match')
    .required('Confirm password is required'), _terms: Yup.boolean().oneOf([true], _'You must accept the terms and conditions')});

export default function Signup() {_const _router = useRouter(); // Changed from navigate
  const [loading, _setLoading] = useState(false);
  const [errorMessage, _setErrorMessage] = useState('');
  const [successMessage, _setSuccessMessage] = useState('');
  const [emailVerificationRequired, _setEmailVerificationRequired] = useState(false);
  const [authServiceAvailable, _setAuthServiceAvailable] = useState(true);
  const [healthCheckLoading, _setHealthCheckLoading] = useState(true);
  const [healthCheckError, _setHealthCheckError] = useState<string | null>(null);
  
  // Check if this is a partner signup
  const _isPartnerSignup = router.query.type === 'partner';
  const _signupSource = router.query.source as string || 'direct';

  const _performHealthCheck = async () => {
    setHealthCheckLoading(true);
    setHealthCheckError(null);
    try {
      const _res = await axios.get('/api/auth/health');
      setAuthServiceAvailable(res.status === 200);
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues');}
    } catch (err: unknown) {_logErrorToProduction('Auth service health check failed', _{ data: err});
      setAuthServiceAvailable(false);
      // Set a more specific error message based on the error type
      if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {_setHealthCheckError('Network connection issues detected');} else if (err.response?.status === 500) {_setHealthCheckError('Authentication service is temporarily unavailable');} else {_setHealthCheckError('Unable to verify authentication service status');}
    } finally {_setHealthCheckLoading(false);}
  };

  useEffect__(() => {_performHealthCheck();}, []);

  const _formik = useFormik(_{_initialValues: {
      name: '', _email: '', _password: '', _confirm: '', _terms: false}, _validationSchema: SignupSchema, _onSubmit: async (values, _{_setErrors}) => {_logInfo('Form submission started with:', _{ 
        name: values.name, _email: values.email, _hasPassword: !!values.password, _isPartnerSignup});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setLoading(true),
      setErrorMessage(''), // Clear any previous error
      setSuccessMessage(''), // Clear any previous success message
      setEmailVerificationRequired(false),
      
      try {_const _requestData = {
          name: values.name, _email: values.email, _password: values.password, _...(isPartnerSignup && {
            userType: 'partner', _source: signupSource, _metadata: {
              partnerProgram: true, _signupType: 'partner'}
          })
        },
        
<<<<<<< HEAD
        logInfo('Making API request to /api/auth/register with:', { 
          ...requestData, 
          password: '[REDACTED]' 
        }),
        
        const res = await axios.post('/api/auth/register', requestData),
        
        logInfo('API response received: ', { 
          status: res.status,
          data: res.data 
        }),
        
        if (res.status === 201) {
          const data = res.data,
          
          if (data.emailVerificationRequired) {
            // Email verification is required
            setEmailVerificationRequired(true),
            const message = isPartnerSignup 
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, your partner application will be reviewed.'
              : 'Account created! Please check your email to verify your account.',
            setSuccessMessage(data.message || message),
=======
        logInfo('Making API request to /api/auth/register with:', {_...requestData, _password: '[REDACTED]'});
        
        const _res = await axios.post('/api/auth/register', requestData);
        
        logInfo('API response received:', {_status: res.status, _data: res.data});
        
        if (res.status === 201) {_const _data = res.data;
          
          if (data.emailVerificationRequired) {
            // Email verification is required
            setEmailVerificationRequired(true);
            const _message = isPartnerSignup 
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, _your partner application will be reviewed.'
              : 'Account created! Please check your email to verify your account.';
            setSuccessMessage(data.message || message);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            
            toast({
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created!', _description: isPartnerSignup 
                ? 'Please verify your email. Your partner application will be reviewed after verification.'
<<<<<<< HEAD
                : 'Please check your email to verify your account before logging in.'})
          } else {
            // Account created and ready to use
            const message = isPartnerSignup 
=======
                : 'Please check your email to verify your account before logging in.'});
          } else {_// Account created and ready to use
            const _message = isPartnerSignup 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.'
              : 'Account created successfully!',
            setSuccessMessage(data.message || message),
            
            toast({
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created successfully!', _description: isPartnerSignup 
                ? 'Welcome to the partner program. You can now log in.'
                : 'Welcome to the platform. You can now log in.'}),
            
            // Redirect to appropriate page after a short delay
<<<<<<< HEAD
            setTimeout(() => {
              router.push(isPartnerSignup ? '/partners' : '/login')
            }, 2000)
=======
            setTimeout__(() => {_router.push(isPartnerSignup ? '/partners' : '/login');}, 2000);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          }
        }
      } catch (err: unknown) {_logErrorToProduction('Signup error details:', _{
          message: err.message, _response: err.response ? {
            status: err.response.status, _statusText: err.response.statusText, _data: err.response.data} : 'No response',
          request: err.request ? 'Request made but no response' : 'No request',
<<<<<<< HEAD
          config: err.config ? {
            url: err.config.url,
            method: err.config.method
          } : 'No config'
        }),
        
        const status = err.response?.status,
        // Try both 'error' and 'message' fields for compatibility
        const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.',
        
        logInfo('Processed error message:', { data: errorMsg }),
        
        if (status === 409) {
          // Handle duplicate email specifically
          setErrorMessage(errorMsg),
          setErrors({ email: errorMsg }),
          
          // Show toast notification
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive'})
        } else if (status === 400) {
          // Handle validation errors (weak password, etc.)
          setErrorMessage(errorMsg),
          
          // Set the error on password field if it's password-related
          if (errorMsg.toLowerCase().includes('password')) {
            setErrors({ password: errorMsg })
          } else {
            setErrors({ confirm: errorMsg })
          }
          
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive'})
        } else {
          // Handle other errors (network, server, etc.)
          setErrorMessage(errorMsg),
          setErrors({ confirm: errorMsg }),
          
          // Show toast notification for other errors
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive'})
        }
      } finally {
        logInfo('Form submission completed, setting loading to false'),
        setLoading(false)
      }
=======
          config: err.config ? {_url: err.config.url, _method: err.config.method} : 'No config'
        });
        
        const _status = err.response?.status;
        // Try both 'error' and 'message' fields for compatibility
        const _errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.';
        
        logInfo('Processed error message:', {_data: errorMsg});
        
        if (status === 409) {_// Handle duplicate email specifically
          setErrorMessage(errorMsg);
          setErrors({ email: errorMsg});
          
          // Show toast notification
          toast({_title: 'Signup failed', _description: errorMsg, _variant: 'destructive'});
        } else if (status === 400) {_// Handle validation errors (weak password, _etc.)
          setErrorMessage(errorMsg);
          
          // Set the error on password field if it's password-related
          if (errorMsg.toLowerCase().includes('password')) {
            setErrors({ password: errorMsg});
          } else {_setErrors({ confirm: errorMsg});
          }
          
          toast({_title: 'Signup failed', _description: errorMsg, _variant: 'destructive'});
        } else {_// Handle other errors (network, _server, _etc.)
          setErrorMessage(errorMsg);
          setErrors({ confirm: errorMsg});
          
          // Show toast notification for other errors
          toast({_title: 'Signup failed', _description: errorMsg, _variant: 'destructive'});
        }
      } finally {_logInfo('Form submission completed, _setting loading to false');
        setLoading(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

<<<<<<< HEAD
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(),
    formik.setTouched({
      name: true,
      email: true,
      password: true,
      confirm: true,
      terms: true
    }),
    await formik.handleSubmit(e)
  },

  // After successful registration, guide the user to the verification screen
  useEffect(() => {
    if (emailVerificationRequired && formik.values.email) {
      const timer = setTimeout(() => {
        router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`)
      }, 3000),
      return () => clearTimeout(timer)
=======
  const _handleFormSubmit = async (_e: React.FormEvent<HTMLFormElement>) => {_e.preventDefault();
    formik.setTouched({
      name: true, _email: true, _password: true, _confirm: true, _terms: true});
    await formik.handleSubmit(e);
  };

  // After successful registration, guide the user to the verification screen
  useEffect__(() => {_if (emailVerificationRequired && formik.values.email) {
      const _timer = setTimeout__(() => {
        router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`);
      }, 3000);
      return () => clearTimeout(timer);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return undefined
  }, [emailVerificationRequired, formik.values.email, router]),

  // Show loading state only during initial health check
  if (healthCheckLoading) {_return (
      <AuthLayout>
        <div className=&quot;flex min-h-screen items-center justify-center p-4&quot;>
          <div className=&quot;text-center space-y-4&quot;>
            <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto&quot;></div>
            <p className=&quot;text-muted-foreground&quot;>Initializing signup...</p>
          </div>
        </div>
      </AuthLayout>
<<<<<<< HEAD
    )
  }

  return (
    <AuthLayout>
      <div className=&quot;flex min-h-screen items-center justify-center p-4&quot;>
        <div className=&quot;w-full max-w-sm space-y-4&quot;>
          {isPartnerSignup && (
            <div className=&quot;text-center mb-6&quot;>
              <h1 className=&quot;text-2xl font-bold text-foreground&quot;>Partner Application</h1>
              <p className=&quot;text-sm text-muted-foreground mt-2&quot;>
=======
    );}

  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          {_isPartnerSignup && (
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-foreground">Partner Application</h1>
              <p className="text-sm text-muted-foreground mt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Join the Zion AI Partner Program and start earning rewards
              </p>
            </div>
          )}
<<<<<<< HEAD
          <form onSubmit={handleFormSubmit} className=&quot;space-y-4&quot; noValidate>
          {/* Show Health Check Warning */}
          {healthCheckError && (
            <Alert variant=&quot;destructive&quot; className=&quot;border-yellow-500 bg-yellow-50 text-yellow-900&quot;>
              <AlertCircle className=&quot;h-4 w-4&quot; />
              <AlertDescription className=&quot;flex items-center justify-between&quot;>
                <span>{healthCheckError}. You can still try to sign up, but it may fail.</span>
                <Button 
                  variant=&quot;outline&quot; 
                  size=&quot;sm&quot; 
                  onClick={performHealthCheck}
                  disabled={healthCheckLoading}
                  className=&quot;ml-2 text-xs&quot;
=======
          <form onSubmit={_handleFormSubmit} className="space-y-4" noValidate>
          {_/* Show Health Check Warning */}
          {_healthCheckError && (
            <Alert variant="destructive" className="border-yellow-500 bg-yellow-50 text-yellow-900">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>{healthCheckError}. You can still try to sign up, but it may fail.</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={_performHealthCheck}
                  disabled={_healthCheckLoading}
                  className="ml-2 text-xs"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  {_healthCheckLoading ? 'Checking...' : 'Retry'}
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
<<<<<<< HEAD
          {/* Show Success message */}
          {successMessage && (
            <Alert className=&quot;border-green-500 bg-green-50 text-green-900&quot; data-testid=&quot;success-alert&quot;>
              {emailVerificationRequired ? <Mail className=&quot;h-4 w-4&quot; /> : <CheckCircle className=&quot;h-4 w-4&quot; />}
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}
          
          {/* Show Error message */}
          {errorMessage && (
            <Alert variant=&quot;destructive&quot; data-testid=&quot;error-alert&quot;>
              <AlertCircle className=&quot;h-4 w-4&quot; />
=======
          {_/* Show Success message */}
          {_successMessage && (
            <Alert className="border-green-500 bg-green-50 text-green-900" data-testid="success-alert">
              {emailVerificationRequired ? <Mail className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
              <AlertDescription>{_successMessage}</AlertDescription>
            </Alert>
          )}
          
          {_/* Show Error message */}
          {_errorMessage && (
            <Alert variant="destructive" data-testid="error-alert">
              <AlertCircle className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          
<<<<<<< HEAD
          {emailVerificationRequired && (
            <Alert className=&quot;border-blue-500 bg-blue-50 text-blue-900&quot;>
              <Mail className=&quot;h-4 w-4&quot; />
=======
          {_emailVerificationRequired && (
            <Alert className="border-blue-500 bg-blue-50 text-blue-900">
              <Mail className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <AlertDescription>
                Before you can log in, _please click the verification link in the email we sent to <strong>{formik.values.email}</strong>.
              </AlertDescription>
            </Alert>
          )}
          
          <div>
            <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium&quot;>
              Full Name
            </label>
            <Input
<<<<<<< HEAD
              id=&quot;name&quot;
              name=&quot;name&quot;
              data-testid=&quot;name-input&quot;
              value={formik.values.name}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.name && formik.errors.name && (
              <div className=&quot;text-red-500 text-sm&quot;>{formik.errors.name}</div>
=======
              id="name"
              name="name"
              data-testid="name-input"
              value={_formik.values.name}
              onChange={_formik.handleChange}
              disabled={_loading || emailVerificationRequired}
            />
            {_formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
          </div>
          
          <div>
            <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium&quot;>
              Email address
            </label>
            <Input
<<<<<<< HEAD
              id=&quot;email&quot;
              type=&quot;email&quot;
              name=&quot;email&quot;
              data-testid=&quot;email-input&quot;
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.email && formik.errors.email && (
              <div className=&quot;text-red-500 text-sm&quot;>{formik.errors.email}</div>
=======
              id="email"
              type="email"
              name="email"
              data-testid="email-input"
              value={_formik.values.email}
              onChange={_formik.handleChange}
              disabled={_loading || emailVerificationRequired}
            />
            {_formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
          </div>
          
          <div>
            <label htmlFor=&quot;password&quot; className=&quot;block text-sm font-medium&quot;>
              Password
            </label>
          <Input
<<<<<<< HEAD
            id=&quot;password&quot;
            type=&quot;password&quot;
            name=&quot;password&quot;
            data-testid=&quot;password-input&quot;
            value={formik.values.password}
            onChange={formik.handleChange}
            disabled={loading || emailVerificationRequired}
          />
          <PasswordStrengthMeter password={formik.values.password} />
          {formik.touched.password && formik.errors.password && (
            <div className=&quot;text-red-500 text-sm&quot;>{formik.errors.password}</div>
=======
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            value={_formik.values.password}
            onChange={_formik.handleChange}
            disabled={_loading || emailVerificationRequired}
          />
          <PasswordStrengthMeter password={_formik.values.password} />
          {_formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          )}
        </div>
          
          <div>
            <label htmlFor=&quot;confirm&quot; className=&quot;block text-sm font-medium&quot;>
              Confirm Password
            </label>
            <Input
<<<<<<< HEAD
              id=&quot;confirm&quot;
              type=&quot;password&quot;
              name=&quot;confirm&quot;
              data-testid=&quot;confirm-password-input&quot;
              value={formik.values.confirm}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.confirm && formik.errors.confirm && (
              <div className=&quot;text-red-500 text-sm&quot;>{formik.errors.confirm}</div>
=======
              id="confirm"
              type="password"
              name="confirm"
              data-testid="confirm-password-input"
              value={_formik.values.confirm}
              onChange={_formik.handleChange}
              disabled={_loading || emailVerificationRequired}
            />
            {_formik.touched.confirm && formik.errors.confirm && (
              <div className="text-red-500 text-sm">{formik.errors.confirm}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
          </div>
          
          <div className=&quot;flex items-center space-x-2&quot;>
            <input
<<<<<<< HEAD
              id=&quot;terms&quot;
              name=&quot;terms&quot;
              type=&quot;checkbox&quot;
              data-testid=&quot;terms-checkbox&quot;
              checked={formik.values.terms}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            <label htmlFor=&quot;terms&quot; className=&quot;text-sm&quot;>
              I agree to the{' '}
              <Link href=&quot;/terms&quot; className=&quot;underline&quot;>Terms of Service</Link>{' '}
              and{' '}
              <Link href=&quot;/privacy&quot; className=&quot;underline&quot;>Privacy Policy</Link>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className=&quot;text-red-500 text-sm&quot;>{formik.errors.terms}</div>
=======
              id="terms"
              name="terms"
              type="checkbox"
              data-testid="terms-checkbox"
              checked={_formik.values.terms}
              onChange={_formik.handleChange}
              disabled={_loading || emailVerificationRequired}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{_' '}
              <Link href="/terms" className="underline">Terms of Service</Link>{_' '}
              and{_' '}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
            </label>
          </div>
          {_formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          )}
          
          {_!emailVerificationRequired ? (
            <Button 
              type=&quot;submit&quot; 
              disabled={loading} 
<<<<<<< HEAD
              data-testid=&quot;signup-submit&quot;
              className={healthCheckError ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
=======
              data-testid="signup-submit"
              className={_healthCheckError ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_loading ? (
                <>
                  <LoadingSpinner size=&quot;sm&quot; className=&quot;mr-2&quot; />
                  Creating Account...
                </>
              ) : (
                healthCheckError ? 'Try Creating Account' : 'Create Account'
              )}
            </Button>
<<<<<<< HEAD
          ) : (
            <div className=&quot;space-y-2&quot;>
              <Button
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                className=&quot;w-full&quot;
                onClick={() => router.push('/login')}
=======
          ) : (_<div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={_() => router.push('/login')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Go to Login
              </Button>
              <Button
<<<<<<< HEAD
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                className=&quot;w-full&quot;
                onClick={() =>
=======
                type="button"
                variant="outline"
                className="w-full"
                onClick={_() =>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`)
                }
              >
                Check Verification Status
              </Button>
              <Button
<<<<<<< HEAD
                type=&quot;button&quot;
                variant=&quot;ghost&quot;
                className=&quot;w-full text-sm&quot;
                onClick={() => {
                  setEmailVerificationRequired(false),
                  setSuccessMessage('')
                }}
=======
                type="button"
                variant="ghost"
                className="w-full text-sm"
                onClick={_() => {
                  setEmailVerificationRequired(false);
                  setSuccessMessage('');}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Try Different Email
              </Button>
            </div>
          )}
          
<<<<<<< HEAD
          {/* Additional help text when service issues are detected */}
          {healthCheckError && (
            <div className=&quot;text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded&quot;>
=======
          {_/* Additional help text when service issues are detected */}
          {_healthCheckError && (
            <div className="text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <p>⚠️ We detected some authentication service issues.</p>
              <p>If signup fails, _please try again in a few minutes or contact support.</p>
            </div>
          )}
          </form>
<<<<<<< HEAD
          {!emailVerificationRequired && (
            <div className=&quot;mt-6&quot;>
              <AuthButtons providers={[&quot;google&quot;, &quot;github&quot;]} />
=======
          {_!emailVerificationRequired && (
            <div className="mt-6">
              <AuthButtons providers={["google", _"github"]} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  )
}
