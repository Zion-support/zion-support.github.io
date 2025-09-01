import { Link, useNavigate  } from 'react-router-dom';
export default function Page() {
) ) ;
    setError('') ;
  };

  const validateForm = () => {
    if(!formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.company ||
      !formData.password ||
      !formData.confirmPassword) {
      setError('Please fill in all required fields') ;
      return false;
    }
    if(!/\S+@\S+\.\S+/.test (formData.email) ) {
      setError('Please enter a valid email address') ;
      return false;
    }
    if(formData.password.length < 8) {
      setError('Password must be at least 8 characters long') ;
      return false;
    }
    if(formData.password !== formData.confirmPassword) {
      setError('Passwords do not match') ;
      return false;
    }
    if(!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions') ;
      return false;
    }
    return true;
  };

import { useAuth } from "@/hooks/useAuth";
import { registerUser } from "@/services/authService";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import { safeStorage } from "@/utils/safeStorage";
import { mailchimpService } from "@/integrations/mailchimp";
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
    newsletterOptIn: z.boolean().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = any;

export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      newsletterOptIn: false,
    },
  });

  // Form submission handler
  const onSubmit = async (data: SignupFormValues) => {
    if (isSubmitting) return; // Prevent multiple submissions
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout (resolve, 2000) ) ;

      if (res.status !== 201) {
        const message = resData?.message || "Registration failed";
        if (res.status === 409) {
          form.setError("email", { message });
        } else if (res.status === 400 && message.toLowerCase().includes("password")) {
          form.setError("password", { message });
        } else {
          form.setError("root", { message });
        }
        toast.error(message);
        return;
      }

      if (resData?.token) {
        safeStorage.setItem("token", resData.token);
      }

      // Subscribe user to Mailchimp if opted in
      if (data.newsletterOptIn && mailchimpService) {
        try {
          await mailchimpService.addSubscriber({
            email: data.email,
            mergeFields: { FNAME: data.displayName }
          });
          await mailchimpService.sendWelcomeEmail(data.email, 'NEW10');
        } catch (err) {
          console.error('Mailchimp subscription failed', err);
        }
      }

      toast.success("Welcome to ZionAI 🎉");
      navigate("/dashboard");
    } catch (err: any) {
      const message =
        err?.response?.data?.message ?? err?.message ?? "Unexpected error";
      form.setError("root", { message });
      toast.error(message);
    } finally {
      setIsLoading(false) ;
    }
  };

  const getPasswordStrength = (password: string) => {
    if(password.length === 0) return { score: 0, label: '', color: '' };
    if(password.length < 8) return { score: 1, label: 'Weak', color: 'text-red - 400' };
    if(password.length < 12) return { score: 2, label: 'Fair', color: 'text-yellow-400' };
    if(password.length < 16) return { score: 3, label: 'Good', color: 'text-blue - 400' };
    return { score: 4, label: 'Strong', color: 'text-green - 400' };
  };

  const passwordStrength = getPasswordStrength(formData.password) ;

  const benefits = [{
      icon: <Brain className="w-6 h-6" />,
      title: 'AI - Powered Solutions',
      description: 'Access cutting - edge AI and machine learning technologies',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for your business needs',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank - level security and compliance standards',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Digital Transformation',
      description: 'Transform your business with modern technology',
    },
  ];

  const stats = [{ number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24 / 7', label: 'Support' },
    { number: '50+', label: 'Services' },
  ];

  return (<div  className="min - h-screen bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900 flex">
      {/* Left Side - Form */}
      <div  className="flex - 1 flex items - center justify - center px-4 py-12">
        <div  className="w-full max - w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Link to="/" className="inline - block mb-6">
              <div  className="flex items - center justify - center w-16 h-16 bg-gradient - to - br from - cyan - 500 to - blue - 600 rounded-2xl mx -auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </Link>
            <h1 className="text-4xl font - bold text-white mb-4">
              Join Zion Tech Group
            </h1>
            <p className="text-xl text-slate -300">
              Transform your business with cutting - edge technology solutions
            </p>
          </motion.div>

          {/* Error / Success Messages */}
          {error && (<motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p - 4 bg-red - 500 / 20 border border-red - 500 / 30 rounded-lg flex items - center gap-3 text-red -400"
            >
              <AlertCircle className="w-5 h-5" />
              {error}
            </motion.div>) }

          {success && (<motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p - 4 bg-green - 500 / 20 border border-green - 500 / 30 rounded-lg flex items - center gap-3 text-green -400"
            >
              <CheckCircle className="w-5 h-5" />
              {success}
            </motion.div>) }

          {/* Signup Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white / 5 border border-slate - 600 / 30 rounded-2xl p - 8 backdrop - blur -md"
          >
            <div  className="grid grid - cols - 1 md:grid - cols - 2 gap-6 mb-6">
              <div>
                <label className="block text-white font - medium mb-2">
                  First Name < span className="text-red -400">*</span>
                </label>
                <div  className="relative">
                  <User className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e =>
                      handleInputChange('firstName', e.target.value) }
                    className="w-full pl - 10 pr - 4 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font - medium mb-2">
                  Last Name < span className="text-red -400">*</span>
                </label>
                <div  className="relative">
                  <User className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e =>
                      handleInputChange('lastName', e.target.value) }
                    className="w-full pl - 10 pr - 4 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            </div>

            <div  className="grid grid - cols - 1 md:grid - cols - 2 gap-6 mb-6">
              <div>
                <label className="block text-white font - medium mb-2">
                  Email Address < span className="text-red -400">*</span>
                </label>
                <div  className="relative">
                  <Mail className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value) }
                    className="w-full pl - 10 pr - 4 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font - medium mb-2">
                  Phone Number
                </label>
                <div  className="relative">
                  <Phone className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value) }
                    className="w-full pl - 10 pr - 4 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            <div  className="grid grid - cols - 1 md:grid - cols - 2 gap-6 mb-6">
              <div>
                <label className="block text-white font - medium mb-2">
                  Company Name < span className="text-red -400">*</span>
                </label>
                <div  className="relative">
                  <Building className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => handleInputChange('company', e.target.value) }
                    className="w-full pl - 10 pr - 4 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font - medium mb-2">
                  Industry
                </label>
                <div  className="relative">
                  <Globe className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <select
                    value={formData.industry}
                    onChange={e =>
                      handleInputChange('industry', e.target.value) }
                    className="w-full pl - 10 pr - 4 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(industry => (<option key={industry} value={industry}>
                        {industry}
                      </option>) ) }
                  </select>
                </div>
              </div>
            </div>

            <div  className="mb-6">
              <label className="block text-white font - medium mb-2">
                Company Size
              </label>
              <div  className="relative">
                <Users className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                <select
                  value={formData.companySize}
                  onChange={e =>
                    handleInputChange('companySize', e.target.value) }
                  className="w-full pl - 10 pr - 4 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  {companySizes.map(size => (<option key={size} value={size}>
                      {size}
                    </option>) ) }
                </select>
              </div>
            </div>

            <div  className="grid grid - cols - 1 md:grid - cols - 2 gap-6 mb-6">
              <div>
                <label className="block text-white font - medium mb-2">
                  Password < span className="text-red -400">*</span>
                </label>
                <div  className="relative">
                  <Lock className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={e =>
                      handleInputChange('password', e.target.value) }
                    className="w-full pl - 10 pr - 12 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                    placeholder="Create a password"
                    required
                  />
                  <button     type="button"
                    onClick={ () => setShowPassword(!showPassword) }
                    className="absolute right - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 hover:text-white transition - colors duration -200"
                  >
                    {showPassword ? (<EyeOff className="w-5 h-5" />) : (<Eye className="w-5 h-5" />) }
                  </button>
                </div>
                {formData.password && (<div  className="mt-2">
                    <div  className="flex gap-1 mb-1">
                      {[1, 2, 3, 4].map(level => (<div  key={level}
                          className={`h-1 flex - 1 rounded-full transition - all duration - 300 ${level <= passwordStrength.score
                              ? passwordStrength.color.replace ('text-', 'bg-') : 'bg-slate - 600 / 30'
                          }`}
                        />) ) }
                    </div>
                    <p className={`text-xs ${passwordStrength.color}`}>
                      {passwordStrength.label}
                    </p>
                  </div>) }
              </div>

              <div>
                <label className="block text-white font - medium mb-2">
                  Confirm Password < span className="text-red -400">*</span>
                </label>
                <div  className="relative">
                  <Lock className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={e =>
                      handleInputChange('confirmPassword', e.target.value) }
                    className="w-full pl - 10 pr - 12 py-3 bg-white / 10 border border-slate - 600 / 30 rounded-lg text-white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                  <button     type="button"
                    onClick={ () => setShowConfirmPassword(!showConfirmPassword) }
                    className="absolute right - 3 top - 1/2 transform - translate - y-1 / 2 text-slate - 400 hover:text-white transition - colors duration -200"
                  >
                    {showConfirmPassword ? (<EyeOff className="w-5 h-5" />) : (<Eye className="w-5 h-5" />) }
                  </button>
                </div>
              </div>
            </div>

            <div  className="space - y-4 mb-8">
              <label className="flex items - start gap-3 cursor -pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={e =>
                    handleInputChange('agreeToTerms', e.target.checked) }
                  className="mt-1 w-4 h-4 text-cyan - 500 bg-slate - 700 border-slate - 600 rounded focus:ring - cyan - 500 focus:ring -2"
                  required
                />
                <span className="text-slate - 300 text-sm">
                  I agree to the{' '}
                  <Link
                    to="/terms"
                    className="text-cyan - 400 hover:text-cyan -300"
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/privacy"
                    className="text-cyan - 400 hover:text-cyan -300"
                  >
                    Privacy Policy
                  </Link>{' '}
                  <span className="text-red -400">*</span>
                </span>
              </label>

              <label className="flex items - start gap-3 cursor -pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToMarketing}
                  onChange={e =>
                    handleInputChange('agreeToMarketing', e.target.checked) }
                  className="mt-1 w-4 h-4 text-cyan - 500 bg-slate - 700 border-slate - 600 rounded focus:ring - cyan - 500 focus:ring -2"
                />
                <span className="text-slate - 300 text-sm">
                  I agree to receive marketing communications about Zion Tech
                  Group services and updates
                </span>
              </label>
            </div>

            <button     type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient - to - r from - cyan - 500 to - blue - 600 text-white font - medium rounded-lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 shadow-lg shadow-cyan - 500 / 25 disabled:opacity - 50 disabled:cursor - not - allowed flex items - center justify - center gap-3 text-lg"
            >
              {isLoading ? (<>
                  <div  className="animate - spin rounded-full h-5 w-5 border-b-2 border-white"></div > Creating Account...
                </>) : (<>
                  Create Account < ArrowRight className="w-5 h-5" />
                </>) }
            </button>

            <div  className="text-center mt-6">
              <p className="text-slate -400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-cyan - 400 hover:text-cyan - 300 font - medium transition - colors duration -200"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="bg-zion-blue-dark rounded-lg p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
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
                              className="bg-zion-blue pl-10 text-black placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
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
                              className="bg-zion-blue pl-10 text-black placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
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
                              className="bg-zion-blue pl-10 text-black border-zion-blue-light focus:border-zion-purple"
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
                              className="bg-zion-blue pl-10 text-black border-zion-blue-light focus:border-zion-purple"
                              {...field}
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
                    name="newsletterOptIn"
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
                            Subscribe to our newsletter
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

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
                    disabled={isLoading || isSubmitting}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
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
                    disabled={isLoading || isSubmitting}
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
                    disabled={isLoading || isSubmitting}
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithTwitter()}
                    disabled={isLoading || isSubmitting}
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div  className="hidden lg:flex flex - 1 bg-gradient - to - br from - cyan - 500 / 20 via - blue - 500 / 20 to - purple - 500 / 20 relative overflow-hidden">
        <div  className="absolute inset - 0 bg-gradient - to - br from - white / 5 to -white / 10"></div>

        <div  className="relative z - 10 flex items - center justify - center p -12">
          <div  className="text-center max - w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div  className="flex justify - center gap-4 mb-6">
                <div  className="w-16 h-16 bg-gradient - to - br from - cyan - 500 to - blue - 600 rounded-2xl flex items - center justify -center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div  className="w-16 h-16 bg-gradient - to - br from - blue - 500 to - purple - 600 rounded-2xl flex items - center justify -center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div  className="w-16 h-16 bg-gradient - to - br from - purple - 500 to - pink - 600 rounded-2xl flex items - center justify -center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl font - bold text-white mb-6"
            >
              Why Choose Zion Tech Group?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space - y-6 mb-8"
            >
              {benefits.map((benefit, index) => (<motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items - center gap-4 text-left"
                >
                  <div  className="w-12 h-12 bg-gradient - to - br from - cyan - 500 to - blue - 600 rounded-xl flex items - center justify - center flex - shrink -0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font - semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate - 300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>) ) }
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid - cols - 2 gap-6"
            >
              {stats.map((stat, index) => (<motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div  className="text-3xl font - bold text-cyan - 400 mb-1">
                    {stat.number}
                  </div>
                  <div  className="text-slate - 300 text-sm">{stat.label}</div>
                </motion.div>) ) }
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-8 p - 6 bg-white / 10 border border-slate - 600 / 30 rounded-xl backdrop - blur -md"
            >
              <div  className="flex items - center gap-3 mb-3">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font - semibold text-white">
                  Trusted by Industry Leaders
                </h3>
              </div>
              <p className="text-slate - 300 text-sm">
                Join thousands of businesses that trust Zion Tech Group to drive
                their digital transformation and innovation initiatives.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>) ;
};

