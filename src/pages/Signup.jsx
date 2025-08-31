<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Mail, 
  Lock, 
  Shield,
  ArrowRight,
  Building2,
  Users,
  Zap,
  Brain
} from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companySize: '',
    industry: '',
    termsAccepted: false,
    newsletterOptIn: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Government',
    'Education',
    'Consulting',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - redirect to dashboard or welcome page
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'An error occurred during signup. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Join Zion Tech Group
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI, cloud, and technology solutions. 
            Start your digital transformation journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Signup Form */}
          <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Create Your Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        errors.firstName ? 'border-red-500' : 'border-zinc-600'
                      }`}
                      placeholder="Enter first name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        errors.lastName ? 'border-red-500' : 'border-zinc-600'
                      }`}
                      placeholder="Enter last name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-zinc-600'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        errors.password ? 'border-red-500' : 'border-zinc-600'
                      }`}
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 bg-zinc-700/50 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                        errors.confirmPassword ? 'border-red-500' : 'border-zinc-600'
                      }`}
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Information */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select size</option>
                    {companySizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-zinc-600 rounded"
                  />
                  <label className="ml-3 text-sm text-zinc-300">
                    I agree to the{' '}
                    <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                      Privacy Policy
                    </Link> *
                  </label>
                </div>
                {errors.termsAccepted && (
                  <p className="text-red-400 text-sm ml-7 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.termsAccepted}
                  </p>
                )}

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="newsletterOptIn"
                    checked={formData.newsletterOptIn}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-zinc-600 rounded"
                  />
                  <label className="ml-3 text-sm text-zinc-300">
                    I want to receive updates about new features, services, and industry insights
                  </label>
                </div>
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.submit}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-zinc-400">
                Already have an account?{' '}
                <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-8">
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
=======
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    });
    // Form submission handler
    const onSubmit = async (data) => {
        if (isSubmitting)
            return; // Prevent multiple submissions
        setIsSubmitting(true);
        try {
            const { res, data: resData } = await register(data.displayName, data.email, data.password);
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
                }
                else if (resData?.session) {
                    // Set the session directly if verification is not required
                    const { error: sessionError } = await supabase.auth.setSession(resData.session);
                    if (sessionError) {
                        // // // // // // // console.error("Error setting session:", sessionError);
                        form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." });
                        toast.error(sessionError.message || "Failed to set session. Please try logging in.");
                        return;
                    }
                    // The onAuthStateChange listener in AuthProvider should now handle
                    // updating user state and navigating if necessary for other cases.
                    // For direct signup with session, we can navigate.
                    toast.success("Welcome to ZionAI 🎉");
                    router("/dashboard");
                }
                else {
                    // This case might indicate an unexpected response from the API
                    // // // // // // // console.error("Registration response did not include session or emailVerificationRequired flag.", resData);
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
                    }
                    catch (err) {
                        // // // // // // // console.error('Mailchimp subscription failed', err);
                        // Non-critical error, don't block user flow
                    }
                }
                // Toast and navigation are handled above if session is present
                // If emailVerificationRequired, no toast/navigation here, message is shown
            }
            try { /* empty */ }
            catch (err) {
                const message = err.message ?? "Registration failed";
                form.setError("root", { message });
                toast.error(message);
            }
            finally {
                setIsSubmitting(false);
            }
        }
        finally { /* empty */ }
        ;
        const onInvalid = (errors) => {
            const firstError = Object.keys(errors)[0];
            if (firstError) {
                form.setFocus(firstError);
            }
        };
        // Redirect if user is already logged in and has completed profile
        if (isAuthenticated && user?.profileComplete) {
            return <Navigate to="/"/>;
        }
        // Redirect to onboarding if user is authenticated but hasn't completed profile
        if (isAuthenticated && !user?.profileComplete) {
            return <Navigate to="/onboarding"/>;
        }
        return (<>
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
                {form.formState.errors.root && (<Alert variant="destructive" className="mb-4">
                    <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
                  </Alert>)}
                <form onSubmit = {
  form.handleSubmit(onSubmit,
  onInvalid)
} className="space-y-6" noValidate>
                  <FormField control={form.control} name="displayName" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="John Doe" className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field} aria-autocomplete="none" autoComplete="off"/>
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400"/>
                      </FormItem>)}/>
                  <FormField control={form.control} name="email" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="you@example.com" className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field} autoComplete="off" aria-autocomplete="none" type="email"/>
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400"/>
                      </FormItem>)}/>
                  <FormField control={form.control} name="password" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple" {...field} autoComplete="new-password"/>
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
                            <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan" onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? (<EyeOff className="h-4 w-4"/>) : (<Eye className="h-4 w-4"/>)}
                              <span className="sr-only">
                                {showPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400"/>
                      </FormItem>)}/>
                  <FormField control={form.control} name="confirmPassword" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple" value={confirmPasswordValue} onChange={(e) => {
                    field.onChange(e);
                    setConfirmPasswordValue(e.target.value);
                }} onBlur={(e) => {
                    field.onBlur();
                    setConfirmPasswordValue(e.target.value);
                }} autoComplete="new-password"/>
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
                            <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                              {showConfirmPassword ? (<EyeOff className="h-4 w-4"/>) : (<Eye className="h-4 w-4"/>)}
                              <span className="sr-only">
                                {showConfirmPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400"/>
                      </FormItem>)}/>
                  <PasswordStrengthMeter password={passwordValue}/>
                  <FormField control={form.control} name="termsAccepted" render={({ field }) => (<FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"/>
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
                          <FormMessage className="text-red-400"/>
                        </div>
                      </FormItem>)}/>
                  <Button type="submit" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" disabled={isSubmitting}>
                    {isSubmitting ? (<>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                        Creating Account...
                      </>) : ("Create Account")}
                  </Button>
                </form>
              </Form>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zion-blue-light"/>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Solutions</h4>
                    <p className="text-zinc-300">
                      Access cutting-edge AI technologies that transform your business operations and drive innovation.
                    </p>
                  </div>
                </div>
<<<<<<< HEAD

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Rapid Implementation</h4>
                    <p className="text-zinc-300">
                      Get up and running quickly with our proven implementation methodologies and expert support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                    <p className="text-zinc-300">
                      Bank-grade security and compliance standards to protect your data and maintain trust.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                    <p className="text-zinc-300">
                      24/7 technical support and dedicated account management to ensure your success.
                    </p>
                  </div>
=======
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick={() => loginWithGoogle()} disabled={isSubmitting}>
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/>
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/>
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"/>
                      <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853"/>
                    </svg>
                  </Button>
                  <Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick={() => loginWithFacebook()} disabled={isSubmitting}>
                    <span className="sr-only">Sign in with Facebook</span>
                    <Facebook className="h-5 w-5"/>
                  </Button>
                  <Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick={() => loginWithTwitter()} disabled={isSubmitting}>
                    <span className="sr-only">Sign in with Twitter</span>
                    <Twitter className="h-5 w-5"/>
                  </Button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-zinc-300 mb-6">
                Join thousands of businesses already transforming their operations with Zion Tech Group.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Free 30-day trial
                </div>
                <div className="flex items-center text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
=======
    </>);
    };
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
}
