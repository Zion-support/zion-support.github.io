<<<<<<<< HEAD:temp_broken_pages_all/Signup.tsx
<<<<<<<< HEAD:temp_broken_pages_all/Signup.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";, // Changed from react-router-dom,
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/enhanced-loading-states";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import { AuthButtons } from "@/components/AuthButtons";
import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import { useState,, useEffect, ,  } from 'react';
import { useRouter,  } from 'next/router', // Changed from react-router-dom,
import { useFormik, ,  } from 'formik';
import * as Yup from 'yup',
import axios from 'axios',
import Link from 'next/link';
import { Input, ,  } from '@/components/ui/input';
import { Button, ,  } from '@/components/ui/button';
import { LoadingSpinner, ,  } from '@/components/ui/enhanced-loading-states';
import { Alert,, AlertDescription, ,  } from '@/components/ui/alert';
import { PasswordStrengthMeter, ,  } from '@/components/PasswordStrengthMeter';
import { AuthButtons, ,  } from '@/components/AuthButtons';
import { AlertCircle,, CheckCircle, Mail,  } from 'lucide-react'
>>>>>>>> pr-22690:temp-broken-files/Signup.tsx
          </form>
          {!emailVerificationRequired && (
            <div className='mt-6'>
              <AuthButtons providers={['google', 'github']} />
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
  message: err.message response: err.response ? {,
status: err.response.status  statusText: err.response.statusText data: err.response.data '
}: 'No response';'
request: err.request ? 'Request made but no response': 'No request'
})
}return undefined
}, [emailVerificationRequired formik.values.email router])
//Show loading state only during initial health check if (healthCheckLoading) {
  return (<AuthLayout> <div className="flex min-h-screen items-center justify-center p-4" > <div className="text-center space-y-4" > <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" ></div> <p className="text-muted-foreground" >Initializing signup...</p> </div> </div> </AuthLayout> Join the Zion AI Partner Program and start earning rewards </p> </div>)
}> {'
  healthCheckLoading ? 'Checking...': 'Retry'
}</Button> </AlertDescription> </Alert>)
}<AlertDescription> {errorMessage}</AlertDescription> </Alert>)
}<AlertDescription> Before you can log in please click the verification link in the email we sent to <strong> {formik.values.email}</strong>. </AlertDescription> </Alert>) "
}<div> <label htmlFor="name" className="block text-sm font-medium" > Full Name </label> <Input) "
}</div> <div> <label htmlFor="email" className="block text-sm font-medium" > Email address </label> <Input) "
}</div> <div> <label htmlFor="password" className="block text-sm font-medium" > Password </label> <Input) "
}</div> <div> <label htmlFor="confirm" className="block text-sm font-medium" > Confirm Password </label> <Input) "
}</div> <div className="flex items-center space-x-2" > <input)
}{"
  !emailVerificationRequired ? (<Button type="submit" disabled= {
  loading}> {'"
  loading ? (<> <LoadingSpinner size="sm" className="mr-2" /> Creating Account... </>) : (healthCheckError ? 'Try Creating Account': 'Create Account')
}</Button> > Go to Login </Button> <Button router.push (`/verify-status?email=$ {
  encodeURIComponent (formik.values.email)
}`)
}> Check Verification Status </Button> <Button > Try Different Email </Button> </div>)
}<p>⚠️ We detected some authentication service issues.</p> <p>If signup fails please try again in a few minutes or contact support.</p> </div>)
}</form> </div>)
}</div> </div> </AuthLayout>)
}'"
}
<<<<<<<< HEAD:temp_broken_pages_all/Signup.tsx
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm, type, UseFormReturn } from "react-hook-form";
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
import { Form,;
FormControl;
, FormField;
FormItem;
, FormLabel,;
FormMessage } from "@/components/ui/form";
import { useState,  } from "react"
import { Link,, Navigate, useNavigate,  } from "react-router-dom"
import { useForm,, type, UseFormReturn,  } from "react-hook-form"
import { zodResolver,  } from "@hookform/resolvers/zod"
import { z,  } from "zod"
import { User,, Mail,, Lock,, Eye,, EyeOff,, Facebook,, Twitter, Loader2,  } from "lucide-react"
import { useAuth,  } from "@/hooks/useAuth"
import { register,  } from "@/services/auth"
import { toast,  } from "@/hooks/use-toast"
import { Button,  } from "@/components/ui/button"
import { Input,  } from "@/components/ui/input"
import { Checkbox,  } from "@/components/ui/checkbox"
import { Alert, AlertDescription,  } from "@/components/ui/alert"
import { PasswordStrengthMeter,  } from "@/components/PasswordStrengthMeter"
import { Form,
FormControl
, , FormField,
FormItem
, , FormLabel,
FormMessage,
 } from "@/components/ui/form"
>>>>>>>> pr-22690:temp-broken-files/Signup.tsx
// Form validation schema,
const signupSchema = z
  .object({displayName: z.string().min(2, "Name must be at least 2 characters")
    email: z.string().email("Please enter a valid email"),
password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
    confirmPassword: z.string(),
termsAccepted: z.boolean().refine(val => val === true {

      message: "You must accept the terms and conditions"})
})
  .refine(data => data.password === data.confirmPassword {message: "Passwords do not match",
path: ["confirmPassword"]})
type SignupFormValues = z.infer<typeof signupSchema>
export default function Signup() {
  return (
  return (
  return (
  const { signup loginWithGoogle loginWithFacebook loginWithTwitter isLoading isAuthenticated user } = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  // Track confirm password locally to prevent it from clearing on blur,
const [confirmPasswordValue, setConfirmPasswordValue] = useState("")
  const passwordValue = form.watch("password")
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Initialize react-hook-form,
const form = useForm({
    resolver: zodResolver(signupSchema),
defaultValues: {
      displayName: ",
email: ";
      password: ",;
confirmPassword: ";
      termsAccepted: false;
}
}) as UseFormReturn<SignupFormValues>
  // Form submission handler,
const onSubmit = async (data: SignupFormValues) => {;
    if (isSubmitting) return; // Prevent multiple submissions,
setIsSubmitting(true)
    try {

      const { res data: resData } = await register(
        data.displayName,
data.email,
data.password
      )
      // Handle duplicate email error from API,
if (res.status === 409 && resData?.code === 'EMAIL_EXISTS') {
        form.setError('email', { message: resData.message })
        toast.error('Email already registered – please login.')
        return
}
      // Check for successful response,
if (res.ok && resData.token && resData.user) {
        // Successful registration,
safeStorage.setItem('authToken', resData.token)
        setUser(resData.user)
        setTokens({ accessToken: resData.token refreshToken: resData.refreshToken |null })
      // Handle email verification required case,
if (resData?.emailVerificationRequired) {setShowVerificationMessage(true)
        // Do not proceed to set session or navigate} else if (resData?.session) {
        // Set the session directly if verification is not required,
const { error: sessionError } = await supabase.auth.setSession(resData.session)
        if (sessionError) {
          console.error("Error setting session:", sessionError)
          form.setError("root", { message: sessionError.message |"Failed to set session. Please try logging in." })
          toast.error(sessionError.message |"Failed to set session. Please try logging in.")
          return
}
        // The onAuthStateChange listener in AuthProvider should now handle
        // updating user state and navigating if necessary for other cases.
        // For direct signup with session we can navigate.
        toast.success("Welcome to ZionAI 🎉")
        navigate("/dashboard")
} else {

        // This case might indicate an unexpected response from the API,
console.error("Registration response did not include session or emailVerificationRequired flag.", resData)
        form.setError("root", { message: "Registration complete but an unexpected issue occurred. Please try logging in." })
        toast.error("Registration complete but an unexpected issue occurred. Please try logging in manually.")
        // Potentially navigate to login or show a more specific error,
return
}
      // Subscribe user to Mailchimp if opted in (only if registration is fully complete not pending verification)
      if (data.newsletterOptIn && mailchimpService && !resData?.emailVerificationRequired) {
        try {

          await mailchimpService.addSubscriber({
            email: data.email,
mergeFields: { FNAME: data.displayName }
          })
          await mailchimpService.sendWelcomeEmail(data.email, 'NEW10')
} catch (err) {console.error('Mailchimp subscription failed', err)
          // Non-critical error don't block user flow}
      }
      // Toast and navigation are handled above if session is present
      // If emailVerificationRequired no toast/navigation here message is shown
} catch (err: any) {
      const message = err.message ?? "Registration failed"
      form.setError("root", { message })
      toast.error(message)
} finally {

      setIsSubmitting(false) }
  }
  const onInvalid = (errors: any) => {
    const firstError = Object.keys(errors)[0] as keyof SignupFormValues,
if (firstError) {
      form.setFocus(firstError)
}
  }
  // Redirect if user is already logged in and has completed profile,
if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
}
  // Redirect to onboarding if user is authenticated but hasn't completed profile,
if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
}
import React from "react"
import Head from "next/head"
import Link from "next/link"
const Signup = () => {
import React from 'react';
import { SEO } from "@/components/SEO";

export default function Signup() {
  return (
    <>
      <SEO 
        title="Signup - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
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
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
</>  );
};
}};
};
import React from 'react';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Signup</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
            <h1 className="text-3xl font-bold text-white mb-4">Signup</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
