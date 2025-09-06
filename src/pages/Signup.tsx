=======
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
  ),
});
export default function Signup() {;
=======

>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

          </form>
          {!emailVerificationRequired && (
            <div className="mt-6">
              <AuthButtons providers={["google", "github"]} />
            </div>
          )}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD
<<<<<<< HEAD
