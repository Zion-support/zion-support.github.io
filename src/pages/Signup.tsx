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
      }
      // Toast and navigation are handled above if session is present
      // If emailVerificationRequired, no toast/navigation here, message is shown
    } catch (err: any) {
      const message = err.message ?? "Registration failed";
      form.setError("root", { message });
      toast.error(message);
    } finally {
      setIsSubmitting(false);
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Lock, 
  Building, 
  Phone, 
  Globe, 
  CheckCircle, 
  Eye,
  EyeOff,
  Shield,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

const accountTypes = [
  {
    id: 'individual',
    title: 'Individual',
    description: 'Personal account for freelancers and individual professionals',
    icon: User,
    features: ['Personal projects', 'Basic features', 'Community access', 'Free tier available']
  },
  {
    id: 'business',
    title: 'Business',
    description: 'Company account for teams and organizations',
    icon: Building,
    features: ['Team collaboration', 'Advanced features', 'Priority support', 'Custom integrations']
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Large organization account with custom solutions',
    icon: Building,
    features: ['Custom solutions', 'Dedicated support', 'SLA guarantees', 'On-premise options']
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Get started immediately with our platform and services'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with SOC2 compliance'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Access to cutting-edge AI and machine learning tools'
  },
  {
    icon: Rocket,
    title: 'Scalable Growth',
    description: 'Scale your business with our flexible solutions'
  }
];

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    website: '',
    accountType: 'individual',
    agreeToTerms: false,
    marketingEmails: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log('Form submitted:', formData);
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
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
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create your account and unlock access to cutting-edge AI solutions, micro SAAS platforms, and enterprise IT services.
            </p>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Account Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Account Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accountTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.accountType === type.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, accountType: type.id }))}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Multi-step Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 p-8"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium">Step {step} of 3</span>
                <span className="text-cyan-400 font-medium">{Math.round((step / 3) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Company Information</h3>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 pr-12"
                          placeholder="Create a strong password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Confirm Password</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 pr-12"
                          placeholder="Confirm your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Terms & Preferences</h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                        required
                      />
                      <span className="text-gray-300 text-sm">
                        I agree to the{' '}
                        <a href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                          Privacy Policy
                        </a>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="marketingEmails"
                        checked={formData.marketingEmails}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="text-gray-300 text-sm">
                        I would like to receive updates about new features, services, and industry insights
                      </span>
                    </label>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">What happens next?</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Verify your email address</li>
                      <li>• Complete your profile setup</li>
                      <li>• Access our platform and services</li>
                      <li>• Connect with our support team</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-slate-600 text-white rounded-xl hover:border-slate-500 transition-colors"
                  >
                    Previous
                  </button>
                )}
                
                <div className="ml-auto">
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Create Account
                    </button>
                  )}
                </div>
              </div>
            </form>
          </motion.div>

          {/* Login Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-gray-300">
              Already have an account?{' '}
              <a href="/login" className="text-cyan-400 hover:text-cyan-300 underline font-medium">
                Sign in here
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
  );
}