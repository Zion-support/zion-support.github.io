import Link from 'next/link';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { LoadingSpinner  } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { PasswordStrengthMeter  } from '@/components/PasswordStrengthMeter';
import { AuthButtons  } from '@/components/AuthButtons';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-domimport { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'
import { AuthButtons } from '@/components/AuthButtons'

import { AlertCircle, CheckCircle, Mail } from 'lucide-react'



  ),
});
export default function Signup() {;


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
import { useState, useEffect } from 'react';
import { use_router } from 'next / router'; // Changed from react-router-domimport { use_formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next / link';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { LoadingSpinner } from '@/components / ui / enhanced - loading - states';
import { Alert, AlertDescription } from '@/components / ui / alert';
import { PasswordStrengthMeter } from '@/components / PasswordStrengthMeter';
import { AuthButtons } from '@/components / AuthButtons';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';
import { toast } from '@/hooks / use - toast';
import { AuthLayout } from '@/layout';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
const SignupSchema = Yup.object ({
  name: Yup.string ().required ('Name is required'),
  email: Yup.string ().email ('Invalid email').required ('Email is required'),
  password: Yup.string ();
    .min (8, 'Password must be at least 8 characters');
    .matches (/[A - Z]/, 'Password must include an uppercase letter');
    .matches (/[a - z]/, 'Password must include a lowercase letter');
    .matches (/[0 - 9]/, 'Password must include a number');
    .required ('Password is required'),
  confirm: Yup.string ();
    .one_of ([Yup.ref ('password')], 'Passwords must match');
    .required ('Confirm password is required'),
  terms: Yup.boolean ().one_of (
    [true],
    'You must accept the terms and conditions'),
});
export default /**
 * Signup - Function description
 */
function Signup() {
  const router = use_router (); // Changed from navigate;
  const [loading, set_loading] = useState (false);
  const [error_message, setErrorMessage] = useState ('');
  const [success_message, setSuccessMessage] = useState ('');
  const [emailVerificationRequired, setEmailVerificationRequired] =;
    useState (false);
  const [authServiceAvailable, setAuthServiceAvailable] = useState (true);
  const [healthCheckLoading, setHealthCheckLoading] = useState (true);
  const [healthCheckError, setHealthCheckError] = useState < string | null>(null);
  // Check if this is a partner signup;
  const isPartnerSignup = router.query.type === 'partner';
  const signup_source = (router.query.source as string) || 'direct';
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


      if (true) {}


      ) {
        setHealthCheckError('Network connection issues detected')
      } else if (err.response?.status === 500) {
        setHealthCheckError(
          'Authentication service is temporarily unavailable'
        )
      logErrorToProduction ('Auth service health check failed', { data: err });
      setAuthServiceAvailable (false);
      // Set a more specific error message based on the error type;
      // Check condition
if (
      ) {) {
  $2
}
        setHealthCheckError ('Network connection issues detected');
      } else // Check condition
if ( {) {
  $2
}
        setHealthCheckError (
          'Authentication service is temporarily unavailable');
      } else {
        setHealthCheckError('Unable to verify authentication service status')
      }
    } finally {
      setHealthCheckLoading(false)
    }
  }

  useEffect (() => {
    performHealthCheck ();
  }, []);
  const formik = use_formik ({
    initial_values: {
      name: '',
      email: '',
      password: '',
      confirm: '',
      terms: false,
    },
    validation_schema: SignupSchema,
    on_submit: async (values, { set_errors }) => {
      log_info ('Form submission started with:', {
        name: values.name,        email: values.email,
        has_password: !!values.password,
        isPartnerSignup,
      });
      set_loading (true);
      setErrorMessage (''); // Clear any previous error;
      setSuccessMessage (''); // Clear any previous success message;
      setEmailVerificationRequired (false);
      try {
        const request_data = {
          name: values.name,
          email: values.email,
          password: values.password,
          ...(isPartnerSignup && {
            user_type: 'partner',
            source: signup_source,
            metadata: {
              partner_program: true,
              signup_type: 'partner',
            },
          }),
        }
        log_info ('Making API request to /api / auth / register with:', {
          ...request_data,
          password: '[REDACTED]',
        });
        const res = await axios.post ('/api / auth / register', request_data);
        log_info ('API response received:', {
          status: res.status,
          data: res.data,
        });
        // Check condition
if ( {) {
  $2
}
          const data = res.data;
          // Check condition
if ( {) {
  $2
}
            // Email verification is required;
            setEmailVerificationRequired (true);
            const message = isPartnerSignup;
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, your partner application will be reviewed.';
              : 'Account created! Please check your email to verify your account.';
            setSuccessMessage (data.message || message);
            toast ({
              title: isPartnerSignup;
                ? 'Partner application submitted!';
                : 'Account created!',
              description: isPartnerSignup;
                ? 'Please verify your email. Your partner application will be reviewed after verification.';
                : 'Please check your email to verify your account before logging in.',
            });
          } else {
            // Account created and ready to use;
            const message = isPartnerSignup;
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.';
              : 'Account created successfully!';
            setSuccessMessage (data.message || message);
            toast ({
              title: isPartnerSignup;
                ? 'Partner application submitted!';
                : 'Account created successfully!',
              description: isPartnerSignup;
                ? 'Welcome to the partner program. You can now log in.';
                : 'Welcome to the platform. You can now log in.',
            });
            // Redirect to appropriate page after a short delay;
            set_timeout (() => {
              router.push (isPartnerSignup ? '/partners' : '/login');
            }, 2000) }
        }
      } catch (err: any) {
        logErrorToProduction ('Signup error details:', {
          message: err.message,
          response: err.response;
            ? {
                status: err.response.status,
                status_text: err.response.status_text,
                data: err.response.data,
              }
            : 'No response',
          request: err.request ? 'Request made but no response' : 'No request',
          config: err.config;

            ? {
                url: err.config.url
                method: err.config.method
              }


        const errorMsg = null;
          err.response?.data?.error ||
          err.response?.data?.message ||


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
            : 'No config',
        });
        const status = err.response?.status;
        // Try both 'error' and 'message' fields for compatibility;
        const error_msg =;
          err.response?.data?.error ||;
          err.response?.data?.message ||;
          'Signup failed. Please try again.';
        log_info ('Processed error message:', { data: error_msg });
        // Check condition
if ( {) {
  $2
}
          // Handle duplicate email specifically;
          setErrorMessage (error_msg);
          set_errors ({ email: error_msg });
          // Show toast notification;
          toast ({
            title: 'Signup failed',
            description: error_msg,
            variant: 'destructive',
          });
        } else // Check condition
if ( {) {
  $2
}
          // Handle validation errors (weak password, etc.);
          setErrorMessage (error_msg);
          // Set the error on password field if it's password - related;
          if (.includes ('password')) {) {
  $2
}
            set_errors ({ password: error_msg });
          } else {
            setErrors({ confirm: errorMsg })
          }

          toast ({
            title: 'Signup failed',
            description: error_msg,
            variant: 'destructive',
          });
        } else {
          // Handle other errors (network, server, etc.);
          setErrorMessage (error_msg);
          set_errors ({ confirm: error_msg });
          // Show toast notification for other errors;
          toast ({
            title: 'Signup failed',
            description: error_msg,
            variant: 'destructive',
          });

        }
      } finally {
        logInfo('Form submission completed, setting loading to false')
        setLoading(false)
      }

    },
  });
  const handleFormSubmit = async (e: React.FormEvent < HTMLFormElement>) => {
    e.prevent_default ();    formik.set_touched ({
      name: true,
      email: true,
      password: true,
      confirm: true,
      terms: true,
    });
    await formik.handle_submit (e);

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
      terms: true,;
    });
    await formik && formik.handleSubmit(e);
  };


    return (
      <AuthLayout>;
        <div className='flex min-h-screen items-center justify-center p-4'>;
          <div className='text-center space-y-4'>;
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto'></div>;
            <p className='text-muted-foreground'>Initializing signup...</p>;
          </div>;
        </div>;
      </AuthLayout>;
    );
  }
  return (
    <AuthLayout>;
      <div className='flex min-h-screen items-center justify-center p-4'>;
        <div className='w-full max-w-sm space-y-4'>;
          {isPartnerSignup && (;
            <div className='text-center mb-6'>;
              <h1 className='text-2xl font-bold text-foreground'>;
                Partner Application;
              </h1>;
              <p className='text-sm text-muted-foreground mt-2'>;
                Join the Zion AI Partner Program and start earning rewards;
              </p>;
            </div>;
          )}

      <AuthLayout>;
        <div className='flex min - h-screen items - center justify - center p - 4'>;
          <div className='text - center space - y-4'>;
            <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - blue - 600 mx - auto'></div>;
            <p className='text - muted - foreground'>Initializing signup...</p>;
          </div>;
        </div>;
      </AuthLayout>);
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
;
          {/* Show Success message */}
          {successMessage && (
            <Alert className="border-green-500 bg-green-50 text-green-900" data-testid="success-alert">
              {emailVerificationRequired ? <Mail className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}
;
          {/* Show Error message */}
          {errorMessage && (
            <Alert variant="destructive" data-testid="error-alert">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          
          {emailVerificationRequired && (
            <Alert className="border-blue-500 bg-blue-50 text-blue-900">
              <Mail className="h-4 w-4" />
              <AlertDescription>
                Before you can log in, please click the verification link in the email we sent to <strong>{formik.values.email}</strong>.
              </AlertDescription>
            </Alert>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              data-testid="name-input"
              value={formik.values.name}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              data-testid="email-input"
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
          <Input
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            value={formik.values.password}
            onChange={formik.handleChange}
            disabled={loading || emailVerificationRequired}
          />
          <PasswordStrengthMeter password={formik.values.password} />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
          
          <div>
            <label htmlFor="confirm" className="block text-sm font-medium">
              Confirm Password
            </label>
            <Input
              id="confirm"
              type="password"
              name="confirm"
              data-testid="confirm-password-input"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.confirm && formik.errors.confirm && (
              <div className="text-red-500 text-sm">{formik.errors.confirm}</div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              data-testid="terms-checkbox"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{' '}
              <Link href="/terms" className="underline">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
          )}
          
          {!emailVerificationRequired ? (
            <Button 
              type="submit" 
              disabled={loading} 
              data-testid="signup-submit"
              className={healthCheckError ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
            >
              {loading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Creating Account...
                </>
              ) : (
                healthCheckError ? 'Try Creating Account' : 'Create Account'
              )}
            </Button>
          ) : (
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => router.push('/login')}
              >
                Go to Login
              </Button>


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


          </form>
          {!emailVerificationRequired && (
            <div className='mt-6'>
              <AuthButtons providers={['google', 'github']} />
            </div>
          )}

          </form>;
          {!emailVerificationRequired && (;
            <div className='mt-6'>;
              <AuthButtons providers={['google', 'github']} />;
            </div>;
          )}
        </div>;
      </div>;
    </AuthLayout>;
  );

}) ;
};
toast ({';
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created!',  description: isPartnerSignup ? 'Please verify your email. Your partner application will be reviewed after verification.'? 'Partner application submitted successfully! You can now log in and your application will be reviewed.': 'Account created successfully!';
setSuccessMessage (data && data.message || message);
toast ({';
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created successfully!', description: isPartnerSignup ? 'Welcome to the partner program. You can now log in.': 'Welcome to the platform. You can now log in.' ;
});
//Redirect to appropriate page after a short delay ;

}catch (err: unknown) {';
  logErrorToProduction ('Signup error details:', {;
  message: err && err.message, response: err && err.response ? {;
  status: err && err.response.status,  statusText: err && err.response.statusText, data: err && err.response.data ';
}: 'No response';';
request: err && err.request ? 'Request made but no response': 'No request';

});
}return undefined;
}, [emailVerificationRequired, formik && formik.values.email, router]);
//Show loading state only during initial health check if (healthCheckLoading) {;
  return (<AuthLayout> <div className="flex min-h-screen items-center justify-center p-4" > <div className="text-center space-y-4" > <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" ></div> <p className="text-muted-foreground" >Initializing signup...</p> </div> </div> </AuthLayout> Join the Zion AI Partner Program and start earning rewards </p> </div>) ;
}> {';
  healthCheckLoading ? 'Checking...': 'Retry' ;
}</Button> </AlertDescription> </Alert>) ;
}<AlertDescription> {;
  errorMessage ;
}</AlertDescription> </Alert>) ;
}<AlertDescription> Before you can log in, please click the verification link in the email we sent to <strong> {;
  formik && formik.values.email ;
}</strong>. </AlertDescription> </Alert>) ";

}<div> <label htmlFor="name" className="block text-sm font-medium" > Full Name </label> <Input) "
}</div> <div> <label htmlFor="email" className="block text-sm font-medium" > Email address </label> <Input) "
}</div> <div> <label htmlFor="password" className="block text-sm font-medium" > Password </label> <Input) "
}</div> <div> <label htmlFor="confirm" className="block text-sm font-medium" > Confirm Password </label> <Input) "

              </div>)}
          </form>;
          {!emailVerificationRequired && (
            <div className='mt - 6'>;
              <AuthButtons providers={['google', 'github']} />;
            </div>)}
        </div>;
      </div>;
    </AuthLayout>);
});
}
toast ({';
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created!',  description: isPartnerSignup ? 'Please verify your email. Your partner application will be reviewed after verification.'? 'Partner application submitted successfully! You can now log in and your application will be reviewed.': 'Account created successfully!';
setSuccessMessage (data.message || message);
toast ({';
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created successfully!', description: isPartnerSignup ? 'Welcome to the partner program. You can now log in.': 'Welcome to the platform. You can now log in.';
});
//Redirect to appropriate page after a short delay;
}catch (err: unknown) {';
  logErrorToProduction ('Signup error details:', {
  message: err.message, response: err.response ? {
  status: err.response.status,  status_text: err.response.status_text, data: err.response.data ';
}: 'No response';';
request: err.request ? 'Request made but no response': 'No request';
});
}return undefined;
}, [emailVerificationRequired, formik.values.email, router]);
//Show loading state only during initial health check // Check condition
if ( {) {
  $2

}
  return (<AuthLayout> <div className="flex min - h-screen items - center justify - center p - 4" > <div className="text - center space - y-4" > <div className="animate - spin rounded - full h - 8 w - 8 border - b-2 border - blue - 600 mx - auto" ></div> <p className="text - muted - foreground" >Initializing signup...</p> </div> </div> </AuthLayout> Join the Zion AI Partner Program and start earning rewards </p> </div>);
}> {';
  healthCheckLoading ? 'Checking...': 'Retry';
}</Button> </AlertDescription> </Alert>);
}<AlertDescription> {
  error_message;
}</AlertDescription> </Alert>);
}<AlertDescription> Before you can log in, please click the verification link in the email we sent to <strong> {
  formik.values.email;
}</strong>. </AlertDescription> </Alert>) ";
}<div> <label html_for="name" className="block text - sm font - medium" > Full Name </label> <Input) ";
}</div> <div> <label html_for="email" className="block text - sm font - medium" > Email address </label> <Input) ";
}</div> <div> <label html_for="password" className="block text - sm font - medium" > Password </label> <Input) ";
}</div> <div> <label html_for="confirm" className="block text - sm font - medium" > Confirm Password </label> <Input) ";
}</div> <div className="flex items - center space - x-2" > <input);
}{";
  !emailVerificationRequired ? (<Button type="submit" disabled= {
  loading;
}> {'";
  loading ? (<> <LoadingSpinner size="sm" className="mr - 2" /> Creating Account... </>) : (healthCheckError ? 'Try Creating Account': 'Create Account');
}</Button> > Go to Login </Button> <Button router.push (`/verify - status?email=$ {
  encodeURIComponent (formik.values.email);
}`);
}> Check Verification Status </Button> <Button > Try Different Email </Button> </div>);
}<p>⚠️ We detected some authentication service issues.</p> <p > If signup fails, please try again in a few minutes or contact support.</p> </div>);
}</form> </div>);
}</div> </div> </AuthLayout>);
}'";
}
import { useState  } from './react';
import { Link, Navigate, use_navigate  } from './react-router-dom';
import { use_form, type UseFormReturn  } from './react - hook - form';
import { zod_resolver  } from '@hookform / resolvers / zod';
import { z  } from './zod';
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter, Loader2  } from './lucide-react';
import { use_auth  } from '@/hooks / use_auth';
import { register  } from '@/services / auth';
import { toast  } from '@/hooks / use - toast';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Checkbox  } from '@/components / ui / checkbox';
import { Alert, AlertDescription  } from '@/components / ui / alert';
import { PasswordStrengthMeter  } from '@/components / PasswordStrengthMeter';
import {


      displayName: ",
      email: ",
      password: ",
      confirmPassword: ",
      termsAccepted: false,,
},,;
}) as UseFormReturn<SignupFormValues>;
  // Form submission handler;
  const onSubmit = async (data: SignupFormValues) => {;


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

  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, ,
} from '@/components / ui / form';
// Form validation schema;
const signup_schema = z;
  .object ({
    display_name: z.string ().min (2, "Name must be at least 2 characters"),
    email: z.string ().email ("Please enter a valid email"),
    password: z.string ();
      .min (8, "Password must be at least 8 characters");
      .regex (/[A - Z]/, "Password must contain at least one uppercase letter");
      .regex (/[a - z]/, "Password must contain at least one lowercase letter");
      .regex (/[0 - 9]/, "Password must contain at least one number"),
    confirm_password: z.string (),
    terms_accepted: z.boolean ().refine (val => val === true, {
      message: "You must accept the terms and conditions", ,
}), ,
});
  .refine (data => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"], ,
});
type SignupFormValues = z.infer < typeof signup_schema>;
export default /**
 * Signup - Function description
 */
function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, is_loading, is_authenticated, user } = use_auth ();
  const navigate = use_navigate ();
  const [show_password, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  // Track confirm password locally to prevent it from clearing on blur;
  const [confirmPasswordValue, setConfirmPasswordValue] = useState ("");
  const password_value = form.watch ("password");
  const [is_submitting, setIsSubmitting] = useState (false);
  // Initialize react - hook - form;
  const form = use_form ({
    resolver: zod_resolver (signup_schema),
    default_values: {
      display_name: ",
      email: ",
      password: ",
      confirm_password: ",
      terms_accepted: false, ,
}, ,
}) as UseFormReturn < SignupFormValues>;
  // Form submission handler;
  const on_submit = async (data: SignupFormValues) => {
    // Check condition
if (return) {
  $2
} // Prevent multiple submissions;
    setIsSubmitting (true);
    try {
      const { res, data: res_data } = await register (
        data.display_name,
        data.email,
        data.password);
      // Handle duplicate email error from API;
      // Check condition
if ( {) {
  $2

          form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." })
          toast.error(sessionError.message || "Failed to set session. Please try logging in.")
          return;


}
        form.set_error ('email', { message: res_data.message });
        toast.error ('Email already registered – please login.');
        return;
}
      // Check for successful response;
      // Check condition
if ( {) {
  $2
}
        // Successful registration;
        safe_storage.set_item ('auth_token', res_data.token);
        set_user (res_data.user);
        set_tokens ({ access_token: res_data.token, refresh_token: res_data.refresh_token || null });
      // Handle email verification required case;
      // Check condition
if ( {) {
  $2
}
        setShowVerificationMessage (true);
        // Do not proceed to set session or navigate;
} else // Check condition
if ( {) {
  $2
}
        // Set the session directly if verification is not required;
        const { error: session_error } = await supabase.auth.set_session (res_data.session);
        // Check condition
if ( {) {
  $2
}
          console.error ("Error setting session:", session_error);
          form.set_error ("root", { message: session_error.message || "Failed to set session. Please try logging in." });
          toast.error (session_error.message || "Failed to set session. Please try logging in.");
          return;
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
      // Subscribe user to Mailchimp if opted in (only if registration is fully complete, not pending verification);
      // Check condition
if ( {) {
  $2
}

        try {
          await mailchimp_service.add_subscriber ({
            email: data.email,
            merge_fields: { FNAME: data.display_name }
          });
          await mailchimp_service.sendWelcomeEmail (data.email, 'NEW10');

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

}</div> <div className="flex items-center space-x-2" > <input) 
}{"
  !emailVerificationRequired ? (<Button type="submit" disabled= {
  loading 
}> {'";
  loading ? (<> <LoadingSpinner size="sm" className="mr-2" /> Creating Account... </>) : (healthCheckError ? 'Try Creating Account': 'Create Account') ;
}</Button> > Go to Login </Button> <Buttonrouter && router.push (`/verify-status?email=$ {
  encodeURIComponent (formik && formik.values.email) 
}`) 
}> Check Verification Status </Button> <Button > Try Different Email </Button> </div>) ;
}<p>⚠️ We detected some authentication service issues.</p> <p>If signup fails, please try again in a few minutes or contact support.</p> </div>) ;
}</form> </div>) ;
}</div> </div> </AuthLayout>) ;
}'";
}
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { register } from "@/services/auth";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,,;
} from "@/components/ui/form";
// Form validation schema;
const signupSchema = z;
  .object({;
    displayName: z && z.string().min(2, "Name must be at least 2 characters"),;
    email: z && z.string().email("Please enter a valid email"),;
    password: z && z.string();
      .min(8, "Password must be at least 8 characters");
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter");
      .regex(/[a-z]/, "Password must contain at least one lowercase letter");
      .regex(/[0-9]/, "Password must contain at least one number"),;
    confirmPassword: z && z.string(),;
    termsAccepted: z && z.boolean().refine(val => val === true, {;
      message: "You must accept the terms and conditions",,;
}),,;
});
  .refine(data => data && data.password === data && data.confirmPassword, {;
    message: "Passwords do not match",;
    path: ["confirmPassword"],,;
});
type SignupFormValues = z && z.infer<typeof signupSchema>;
export default function Signup() {;
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Track confirm password locally to prevent it from clearing on blur;
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const passwordValue = form && form.watch("password");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Initialize react-hook-form;
  const form = useForm({;
    resolver: zodResolver(signupSchema),;
    defaultValues: {;
      displayName: ",;
      email: ",;
      password: ",;
      confirmPassword: ",;
      termsAccepted: false,,;
},,;
}) as UseFormReturn<SignupFormValues>;
  // Form submission handler;
  const onSubmit = async (data: SignupFormValues) => {;
    if (isSubmitting) return; // Prevent multiple submissions;

    setIsSubmitting(true);
    try {;
      const { res, data: resData } = await register(;
        data && data.displayName,;
        data && data.email,;
        data && data.password;
      );
      // Handle duplicate email error from API;
      if (res && res.status === 409 && resData?.code === 'EMAIL_EXISTS') {;
        form && form.setError('email', { message: resData && resData.message });
        toast && toast.error('Email already registered – please login.');
        return;
}

      // Check for successful response;
      if (res && res.ok && resData && resData.token && resData && resData.user) {;
        // Successful registration;
        safeStorage && safeStorage.setItem('authToken', resData && resData.token);
        setUser(resData && resData.user);
        setTokens({ accessToken: resData && resData.token, refreshToken: resData && resData.refreshToken || null });
      // Handle email verification required case;
      if (resData?.emailVerificationRequired) {;
        setShowVerificationMessage(true);
        // Do not proceed to set session or navigate;
} else if (resData?.session) {;
        // Set the session directly if verification is not required;
        const { error: sessionError } = await supabase && supabase.auth.setSession(resData && resData.session);
        if (sessionError) {;
          console && console.error("Error setting session:", sessionError);
          form && form.setError("root", { message: sessionError && sessionError.message || "Failed to set session. Please try logging in." });
          toast && toast.error(sessionError && sessionError.message || "Failed to set session. Please try logging in.");
          return;
}
        // The onAuthStateChange listener in AuthProvider should now handle;
        // updating user state and navigating if necessary for other cases.;
        // For direct signup with session, we can navigate.;
        toast && toast.success("Welcome to ZionAI 🎉");
        navigate("/dashboard");
} else {;
        // This case might indicate an unexpected response from the API;
        console && console.error("Registration response did not include session or emailVerificationRequired flag.", resData);
        form && form.setError("root", { message: "Registration complete, but an unexpected issue occurred. Please try logging in." });
        toast && toast.error("Registration complete, but an unexpected issue occurred. Please try logging in manually.");
        // Potentially navigate to login or show a more specific error;
        return;
}
}}
}
      }
      // Toast and navigation are handled above if session is present;
      // If emailVerificationRequired, no toast/navigation here, message is shown;
} catch (err: any) {;
      const message = err && err.message ?? "Registration failed";
      form && form.setError("root", { message });
      toast && toast.error(message);
} finally {;
      setIsSubmitting(false);    }
  };
  const onInvalid = (errors: any) => {;
    const firstError = Object && Object.keys(errors)[0] as keyof SignupFormValues;
    if (firstError) {;
      form && form.setFocus(firstError);

  const on_invalid = (errors: any) =>: any {
    const first_error = Object.keys (errors)[0] as keyof SignupFormValues;
    // Check condition
if ( {) {
  $2
}
      form.set_focus (first_error);
}
  }
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
}


import React from "react";
import Head from "next/head";
import Link from "next/link";
const Signup = () => {;
  return (
    <>;
      <Head>;
        <title>Signup - Zion Tech Group</title>;
        <meta name="description" content="Professional Signup services"  />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;
              Signup;
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional Signup services and solutions;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
    return <Navigate to="/" />;
}


}};
};
