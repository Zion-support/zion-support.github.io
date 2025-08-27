<<<<<<< HEAD

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const signupSchema = z
  .object({
    displayName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine(val => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Track confirm password locally to prevent it from clearing on blur
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const passwordValue = form.watch("password");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  }) as UseFormReturn<SignupFormValues>;

  // Form submission handler
  const onSubmit = async (data: SignupFormValues) => {
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
    try {
      const { res, data: resData } = await register(
        data.displayName,
        data.email,
        data.password
      );

      // Handle duplicate email error from API
      if (res.status === 409 && resData?.code === 'EMAIL_EXISTS') {
        form.setError('email', { message: resData.message });
        toast.error('Email already registered – please login.');
        return;
      }

      // Check for successful response
      if (res.ok && resData.token && resData.user) {
        // Successful registration
        safeStorage.setItem('authToken', resData.token);
        setUser(resData.user);
        setTokens({ accessToken: resData.token, refreshToken: resData.refreshToken || null });

      // Handle email verification required case
      if (resData?.emailVerificationRequired) {
        setShowVerificationMessage(true);
        // Do not proceed to set session or navigate
      } else if (resData?.session) {
        // Set the session directly if verification is not required
        const { error: sessionError } = await supabase.auth.setSession(resData.session);
        if (sessionError) {
          console.error("Error setting session:", sessionError);
          form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." });
          toast.error(sessionError.message || "Failed to set session. Please try logging in.");
          return;
        }
        // The onAuthStateChange listener in AuthProvider should now handle
        // updating user state and navigating if necessary for other cases.
        // For direct signup with session, we can navigate.
        toast.success("Welcome to ZionAI 🎉");
        navigate("/dashboard");
      } else {
        // This case might indicate an unexpected response from the API
        console.error("Registration response did not include session or emailVerificationRequired flag.", resData);
        form.setError("root", { message: "Registration complete, but an unexpected issue occurred. Please try logging in." });
        toast.error("Registration complete, but an unexpected issue occurred. Please try logging in manually.");
        // Potentially navigate to login or show a more specific error
        return;
      }

      // Subscribe user to Mailchimp if opted in (only if registration is fully complete, not pending verification)
      if (data.newsletterOptIn && mailchimpService && !resData?.emailVerificationRequired) {
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { Mail, Lock, User, Eye, EyeOff, CheckCircle } from 'lucide-react';
export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    
    const { signup } = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setIsLoading(true);
        setError('');
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
        try {
          await mailchimpService.addSubscriber({
            email: data.email,
            mergeFields: { FNAME: data.displayName }
          });
          await mailchimpService.sendWelcomeEmail(data.email, 'NEW10');
        } catch (err) {
          console.error('Mailchimp subscription failed', err);
          // Non-critical error, don't block user flow
        }
<<<<<<< HEAD
      }
      // Toast and navigation are handled above if session is present
      // If emailVerificationRequired, no toast/navigation here, message is shown
    } catch (err: any) {
      const message = err.message ?? "Registration failed";
      form.setError("root", { message });
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = (errors: any) => {
    const firstError = Object.keys(errors)[0] as keyof SignupFormValues;
    if (firstError) {
      form.setFocus(firstError);
    }
  };

  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />;
  }
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <>
      
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="bg-zion-blue-dark rounded-lg p-6">
              <Form {...form}>
                {form.formState.errors.root && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
                  </Alert>
                )}
                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6" noValidate>
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="John Doe"
                              className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              aria-autocomplete="none"
                              autoComplete="off"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="you@example.com"
                              className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="off"
                              aria-autocomplete="none"
                              type="email"
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="new-password"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                              <span className="sr-only">
                                {showPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple"
                              value={confirmPasswordValue}
                              onChange={(e) => {
                                field.onChange(e)
                                setConfirmPasswordValue(e.target.value)
                              }}
                              onBlur={(e) => {
                                field.onBlur()
                                setConfirmPasswordValue(e.target.value)
                              }}
                              autoComplete="new-password"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                              <span className="sr-only">
                                {showConfirmPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <PasswordStrengthMeter password={passwordValue} />

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-zion-slate-light">
                            I agree to the{" "}
                            <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">
                              Privacy Policy
                            </a>
                          </FormLabel>
                          <FormMessage className="text-red-400" />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>
              </Form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zion-blue-light" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithGoogle()}
                    disabled={isSubmitting}
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                      <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />
                    </svg>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithFacebook()}
                    disabled={isSubmitting}
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithTwitter()}
                    disabled={isSubmitting}
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Join the Future of AI Marketplace</h3>
                <p className="text-lg text-white/80">
                  Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
=======
    };
    if (success) {
        return (
            <div className="min-h-screen bg-zion-blue flex items-center justify-center">
                <div className="max-w-md w-full mx-auto p-6 text-center">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white mb-4">Account Created!</h1>
                    <p className="text-zion-slate-light">
                        Your account has been successfully created. Redirecting to dashboard...
                    </p>
                </div>
            </div>
        );
    }
    return (
<>
            <SEO 
                title="Sign Up - Zion Tech Group" 
                description="Create your Zion Tech Group account to access the marketplace." 
                canonical="https://ziontechgroup.com/signup" 
            />
            <div className="min-h-screen bg-zion-blue flex items-center justify-center">
                <div className="max-w-md w-full mx-auto p-6">
                    <div className="text-center mb-8">
                        <GradientHeading>Create Account</GradientHeading>
                        <p className="text-zion-slate-light mt-4">
                            Join Zion Tech Group and start your journey
                        </p>
                    </div>
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <p className="text-red-400 text-sm">{error}</p>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                                    First Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First name"
                                        className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                                    Last Name
                                </label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    className="pl-10 pr-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    className="pl-10 pr-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
                                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            disabled={isLoading || !formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim()}
                            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-zion-slate-light text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-zion-cyan hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
</>
    );
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
}
