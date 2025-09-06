import { useState, useEffect  } from 'react';
import { useRouter } from 'next/router', // Changed from react-router-dom
import { useFormik  } from 'formik';
import * as Yup from 'yup',
import axios from 'axios',
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
  )
})
export default function Signup() {
ursor/fix-website-loading-errors-and-merge-6662
                <Link href='/privacy' className='underline'>;
                  Privacy Policy;
                </Link>;
              </label>;
            </div>;


            {!emailVerificationRequired ? (;

              <Button
                type='submit'
              <Button;
                type='submit';
                disabled={loading}
                data - testid='signup - submit';
                className={

                  healthCheckError ? 'bg - yellow - 600 hover:bg - yellow - 700' : '';
                }
              >;
                {loading ? (
                  <>;
                    <LoadingSpinner size='sm' className='mr - 2' />;
                    Creating Account...;
                  </>) : healthCheckError ? (
                  'Try Creating Account') : (
                  'Create Account')}
              </Button>) : (
              <div className='space - y-2'>;
                <Button;
                  type='button';
                  variant='outline';
                  className='w - full';
                  on_click={() => router.push ('/login')}
                >;
                  Go to Login;
                </Button>;
                <Button;
                  type='button';
                  variant='outline';
                  className='w - full';
                  on_click={() =>;
                    router.push (
                      `/verify - status?email=${encodeURIComponent (formik.values.email)}`);

                  }
                >;
                  Check Verification Status;
                </Button>;

                  onClick={() => {;
                    setEmailVerificationRequired(false);
                    setSuccessMessage('');

                <Button;
                  type='button';
                  variant='ghost';
                  className='w - full text - sm';
                  on_click={() => {
                    setEmailVerificationRequired (false);
                    setSuccessMessage ('');
                  }}
                >;
                  Try Different Email;
                </Button>;

              </div>)}
            {/* Additional help text when service issues are detected */}
            {healthCheckError && (
              <div className='text - center text - xs text - muted - foreground mt - 4 p - 3 bg - muted rounded'>;

                <p>⚠️ We detected some authentication service issues.</p>;
                <p>;
                  If signup fails, please try again in a few minutes or contact;
                  support.;
                </p>;


          <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
          {/* Show Health Check Warning */}
          {healthCheckError && (
            <Alert variant="destructive" className="border-yellow-500 bg-yellow-50 text-yellow-900">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>{healthCheckError}. You can still try to sign up, but it may fail.</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={performHealthCheck}
                  disabled={healthCheckLoading}
                  className="ml-2 text-xs"
                >
                  {healthCheckLoading ? 'Checking...' : 'Retry'}
                </Button>;
              </AlertDescription>;
            </Alert>;
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
  // Redirect if user is already logged in and has completed profile;
  // Check condition
if ( {) {
  $2
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

        </div>;
;
