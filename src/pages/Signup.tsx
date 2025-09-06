import { useState, useEffect  } from 'react';
import { useRouter } from 'next/router', // Changed from react-router-dom
import { useFormik  } from 'formik';
import * as Yup from 'yup',
import axios from 'axios',
import Link from 'next/link';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { LoadingSpinner  } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { PasswordStrengthMeter  } from '@/components/PasswordStrengthMeter';
import { AuthButtons  } from '@/components/AuthButtons';
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
    setHealthCheckLoading (true);
    setHealthCheckError (null);
    try {
      const res = await axios.get ('/api / auth / health');
      setAuthServiceAvailable (res.status === 200);
      // Check condition
if ( {) {
  $2
}
        setHealthCheckError ('Authentication service is experiencing issues');
      }
    } catch (err: any) {
      if (true) {}
      ) {
        setHealthCheckError('Network connection issues detected')
      } else if (err.response?.status === 500) {
        setHealthCheckError(
          'Authentication service is temporarily unavailable'
        )
      } else {
        setHealthCheckError ('Unable to verify authentication service status');
      }
    } finally {
      setHealthCheckLoading (false);
    }
  }
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
          } else {
            set_errors ({ confirm: error_msg });
          }
        }
      } finally {
        log_info ('Form submission completed, setting loading to false');
        set_loading (false);
      }
    .min(8, 'Password must be at least 8 characters');
    .matches(/[A-Z]/, 'Password must include an uppercase letter');
    .matches(/[a-z]/, 'Password must include a lowercase letter');
    .matches(/[0-9]/, 'Password must include a number');
    .required('Password is required'),;
      } else {;
        setHealthCheckError('Unable to verify authentication service status');
      }
    } finally {;
      setHealthCheckLoading(false);
    }
  const formik = useFormik({;
    initialValues: {;
      name: '',;
      email: '',;
      password: '',;
      confirm: '',;
    },;
    validationSchema: SignupSchema,;
    onSubmit: async (values, { setErrors }) => {;
      logInfo('Form submission started with:', {;
          ...(isPartnerSignup && {;
            userType: 'partner',;
            source: signupSource,;
            metadata: {;
              partnerProgram: true,;
          } else {;
            // Account created and ready to use;
            const message = isPartnerSignup;
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.';
          // Show toast notification;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            setErrors({ password: errorMsg });
          } else {;
            setErrors({ confirm: errorMsg });
          }
          // Show toast notification for other errors;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
      name: true,;
      email: true,;
      password: true,;
      confirm: true,;
  if (healthCheckLoading) {
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
  }
  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          {isPartnerSignup && (
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
            <div className="mt-6">
              <AuthButtons providers={["google", "github"]} />
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  )
})
}
toast ({'
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created!',  description: isPartnerSignup ? 'Please verify your email. Your partner application will be reviewed after verification.'? 'Partner application submitted successfully! You can now log in and your application will be reviewed.': 'Account created successfully!'
setSuccessMessage (data.message |message)
toast ({'
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created successfully!', description: isPartnerSignup ? 'Welcome to the partner program. You can now log in.': 'Welcome to the platform. You can now log in.'
})
//Redirect to appropriate page after a short delay
}catch (err: unknown) {'
  logErrorToProduction ('Signup error details:', {
  message: err.message, response: err.response ? {
  status: err.response.status,  statusText: err.response.statusText, data: err.response.data '
}: 'No response';'
request: err.request ? 'Request made but no response': 'No request'
})
}return undefined
}, [emailVerificationRequired, formik.values.email, router])
//Show loading state only during initial health check if (healthCheckLoading) {
  return (<AuthLayout> <div className="flex min-h-screen items-center justify-center p-4" > <div className="text-center space-y-4" > <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" ></div> <p className="text-muted-foreground" >Initializing signup...</p> </div> </div> </AuthLayout> Join the Zion AI Partner Program and start earning rewards </p> </div>)
}> {'
  healthCheckLoading ? 'Checking...': 'Retry'
}</Button> </AlertDescription> </Alert>)
}<AlertDescription> {
  errorMessage
}</AlertDescription> </Alert>)
}<AlertDescription> Before you can log in, please click the verification link in the email we sent to <strong> {
  formik.values.email
}</strong>. </AlertDescription> </Alert>) "
}<div> <label htmlFor="name" className="block text-sm font-medium" > Full Name </label> <Input) "
}</div> <div> <label htmlFor="email" className="block text-sm font-medium" > Email address </label> <Input) "
}</div> <div> <label htmlFor="password" className="block text-sm font-medium" > Password </label> <Input) "
}</div> <div> <label htmlFor="confirm" className="block text-sm font-medium" > Confirm Password </label> <Input) "
      displayName: "
      email: "
      password: "
      confirmPassword: "
      termsAccepted: false,
}
}) as UseFormReturn<SignupFormValues>
  // Form submission handler
  const onSubmit = async (data: SignupFormValues) => {
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
          form.setError("root", { message: sessionError.message |"Failed to set session. Please try logging in." })
          toast.error(sessionError.message |"Failed to set session. Please try logging in.")
          return
          form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." })
          toast.error(sessionError.message || "Failed to set session. Please try logging in.")
          return;
}
} else {
        // This case might indicate an unexpected response from the API
        console.error("Registration response did not include session or emailVerificationRequired flag.", resData)
        form.setError("root", { message: "Registration complete, but an unexpected issue occurred. Please try logging in." })
        toast.error("Registration complete, but an unexpected issue occurred. Please try logging in manually.")
        // Potentially navigate to login or show a more specific error
        return;
}
} catch (err) {
          console.error ('Mailchimp subscription failed', err);
          // Non - critical error, don't block user flow;
}
      }
      // Toast and navigation are handled above if session is present;
      // If emailVerificationRequired, no toast / navigation here, message is shown;
} catch (err: any) {
      const message = err.message ?? "Registration failed";
      form.set_error ("root", { message });
      toast.error (message);
} finally {
      setIsSubmitting (false) }
  }
}
  }
  // Redirect if user is already logged in and has completed profile;
  // Check condition
if ( {) {
  $2
}


}};
};
        </div>;
      </div>;
    </AuthLayout>;
  );
}
