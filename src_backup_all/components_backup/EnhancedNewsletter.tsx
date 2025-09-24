import React, { useState } from 'react.ts',
import { motion  } from 'framer-motion.ts',
import { Mail, CheckCircle, AlertCircle, Send, Zap, Shield, Gift  } from 'lucide-react.ts',
,
interface NewsletterFormData {,
  email: string,
  firstName: string,
  interests: string[],
  frequency: 'weekly' | 'monthly' | 'quarterly',
,
,}
,
const interests = [,
  { id: 'ai-solutions', label: 'AI Solutions', icon: Zap ,},;
  { id: 'cloud-services', label: 'Cloud Services', icon: Shield ,},;
  { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield ,},;
  { id: 'digital-transformation', label: 'Digital Transformation', icon: Zap ,},;
  { id: 'it-consulting', label: 'IT Consulting', icon: Gift ,},;
  { id: 'industry-insights', label: 'Industry Insights', icon: Zap ,}
],
,
const frequencies = [,
  { value: 'weekly', label: 'Weekly', description: 'Stay updated with latest trends' ,},;
  { value: 'monthly', label: 'Monthly', description: 'Monthly digest of insights' ,},;
  { value: 'quarterly', label: 'Quarterly', description: 'Quarterly strategic updates' ,}
],
,
export const EnhancedNewsletter: React.FC = (): JSX.Element => {,
  const [formData, setFormData] = useState<any>({,
    email: '',;
    firstName: '',;
    interests: [],;
    frequency: 'monthly',
  ,}),
,
  const [status, setStatus] = useState<any>('idle'),
  const [errors, setErrors] = useState<Partial<NewsletterFormData>>({}),
,
  const validateForm = (): boolean => {,
    const newErrors: Partial<NewsletterFormData> ={,};
,
    if (!formData.email) {,
      newErrors.email = 'Email is required',
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {,
      newErrors.email = 'Please enter a valid email address',
    }
,
    if (!formData.firstName) {,
      newErrors.firstName = 'First name is required',
    }
,
    if (formData.interests.length === 0) {,
      newErrors.interests = 'Please select at least one interest',
    }
,
    setErrors(newErrors),
    return Object.keys(newErrors).length === 0,
  };
,
  const handleSubmit = async (e: anyReact.FormEvent)  => {,
    e.preventDefault(),
,
    if (!validateForm()) {,
      return,
    ,}
,
    setStatus('loading'),
,
    try {,
      // Simulate API call,
      await new Promise(resolve => setTimeout(resolve, 20o00)),
,
      // Here you would typically send the data to your newsletter service,
      console.log('Newsletter subscription: any', formData),
,
      setStatus('success'),
,
      // Reset form after successful submission,
      setTimeout(()  => {,
        setFormData({,
          email: '',;
          firstName: '',;
          interests: [],;
          frequency: 'monthly',
        ,}),
        setStatus('idle'),
      }, 30o00),
,
    } catch (error) {,
      setStatus('error'),
      console.error('Newsletter subscription error:', error),
    }
  };
,
  const handleInterestToggle = (interestId: anystring)  => {,
    setFormData(prev => ({,
      ...prev,;
      interests: anyprev.interests.includes(interestId),
        ? prev.interests.filter(id  => id !== interestId),
        : [...prev.interests, interestId],
    })),
,
    // Clear error when user selects an interest,
    if (errors.interests) {,
      setErrors(prev => ({ ...prev, interests: undefined ,})),
    }
  };
,
  const handleInputChange = (field: anykeyof NewsletterFormData, value: string | string[])  => {,
    setFormData(prev => ({ ...prev, [field]: value })),
,
    // Clear error when user starts typing,
    if (errors[field]) {,
      setErrors(prev => ({ ...prev, [field]: undefined })),
    }
  };
,
  if (status === 'success') {,
    return (,
      <motion.div,
        initial={{ opacity: 0, scale: 0.95 ,}}
        animate={{ opacity: 1, scale: 1 ,}}
        className="bg-gradient-to-r from-green-50 to-emerald-50 dark: from-green-90o0/20 dark:to-emerald-90o0/20 rounded-2xl p-8 text-center border border-green-20o0 dark:border-green-80o0",
      >,
        <CheckCircle className="h-16 w-16 text-green-50o0 mx-auto mb-4"  />,
        <h3 className="text-2xl font-bold text-green-90o0 dark:text-green-10o0 mb-2">,
          Welcome to the Zion Tech Group Community!,
        </h3>,
        <p className="text-green-70o0 dark:text-green-30o0 mb-4">,
          Thank you for subscribing to our newsletter. You'll receive our next update in your inbox.,
        </p>,
        <div className="flex items-center justify-center gap-2 text-sm text-green-60o0 dark:text-green-40o0">,
          <Mail className="h-4 w-4"  />,
          <span>Check your email for a confirmation message</span>,
        </div>,
      </motion.div>,
    ),
  ,}
,
  return (,
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark: from-slate-90o0 dark:via-slate-80o0 dark:to-slate-90o0 rounded-2xl p-8 border border-slate-20o0 dark:border-slate-70o0">,
      <div className="text-center mb-8">,
        <motion.div,
          initial={{ scale: 0 ,}}
          animate={{ scale: 1 ,}}
          transition={{ delay: 0.1, type: "spring", bounce: 0.4 ,}}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-50o0 to-purple-60o0 rounded-full mb-4",
        >,
          <Mail className="h-8 w-8 text-white"  />,
        </motion.div>,
        <motion.h2,
          initial={{ opacity: 0, y: 20 ,}}
          animate={{ opacity: 1, y: 0 ,}}
          transition={{ delay: 0.2 ,}}
          className="text-3xl font-bold text-slate-90o0 dark: text-white mb-4",
        >,
          Stay Ahead with Zion Tech Insights,
        </motion.h2>,
        <motion.p,
          initial={{ opacity: 0, y: 20 ,}}
          animate={{ opacity: 1, y: 0 ,}}
          transition={{ delay: 0.3 ,}}
          className="text-lg text-slate-60o0 dark: text-slate-40o0 max-w-2xl mx-auto",
        >,
          Get exclusive access to the latest AI trends, technology insights, and industry updates delivered directly to your inbox.,
        </motion.p>,
      </div>,
      <motion.form,
        initial={{ opacity: 0, y: 20 ,}}
        animate={{ opacity: 1, y: 0 ,}}
        transition={{ delay: 0.4 ,}}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6",
      >,
        {/* Email and Name Fields */}
        <div className="grid grid-cols-1 md: grid-cols-2 gap-4">,
          <div>,
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-70o0 dark:text-slate-30o0 mb-2">,
              First Name *,
            </label>,
            <input,
              type="text",
              id="firstName",
              value={formData.firstName,}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focus:ring-blue-50o0 focus:border-transparent transition-colors ${,
                errors.firstName,
                  ? 'border-red-30o0 bg-red-50 dark:bg-red-90o0/20',
                  : 'border-slate-30o0 dark:border-slate-60o0 bg-white dark:bg-slate-80o0',
              ,}`}
              placeholder="Enter your first name",
            />,
            {errors.firstName && (,
              <p className="mt-1 text-sm text-red-60o0 dark: text-red-40o0 flex items-center gap-1">,
                <AlertCircle className="h-4 w-4"  />,
                {errors.firstName,}
              </p>,
            )}
          </div>,
          <div>,
            <label htmlFor="email" className="block text-sm font-medium text-slate-70o0 dark: text-slate-30o0 mb-2">,
              Email Address *,
            </label>,
            <input,
              type="email",
              id="email",
              value={formData.email,}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus: ring-2 focus:ring-blue-50o0 focus:border-transparent transition-colors ${,
                errors.email,
                  ? 'border-red-30o0 bg-red-50 dark:bg-red-90o0/20',
                  : 'border-slate-30o0 dark:border-slate-60o0 bg-white dark:bg-slate-80o0',
              ,}`}
              placeholder="Enter your email address",
            />,
            {errors.email && (,
              <p className="mt-1 text-sm text-red-60o0 dark: text-red-40o0 flex items-center gap-1">,
                <AlertCircle className="h-4 w-4"  />,
                {errors.email,}
              </p>,
            )}
          </div>,
        </div>,
        {/* Interests Selection */}
        <div>,
          <label className="block text-sm font-medium text-slate-70o0 dark: text-slate-30o0 mb-3">,
            Areas of Interest * (Select all that apply),
          </label>,
          <div className="grid grid-cols-2 md: anygrid-cols-3 gap-3">,
            {interests.map((interest)  => {,
              const Icon = interest.icon,
              const isSelected = formData.interests.includes(interest.id),
,
              return (,
                <motion.button,
                  key={interest.id,}
                  type="button",
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-20o0 flex items-center gap-2 ${,
                    isSelected,
                      ? 'border-blue-50o0 bg-blue-50 dark: bg-blue-90o0/20 text-blue-70o0 dark:text-blue-30o0',
                      : 'border-slate-30o0 dark:border-slate-60o0 hover:border-blue-30o0 dark:hover:border-blue-60o0',
                  ,}`}
                  whileHover={{ scale: 1.0o2 ,}}
                  whileTap={{ scale: 0.98 ,}}
                >,
                  <Icon className={`h-4 w-4 ${isSelected ? 'text-blue-60o0' : 'text-slate-50o0'}`}  />,
                  <span className="text-sm font-medium">{interest.label}</span>,
                </motion.button>,
              ),
            })}
          </div>,
          {errors.interests && (,
            <p className="mt-2 text-sm text-red-60o0 dark: text-red-40o0 flex items-center gap-1">,
              <AlertCircle className="h-4 w-4"  />,
              {errors.interests,}
            </p>,
          )}
        </div>,
        {/* Frequency Selection */}
        <div>,
          <label className="block text-sm font-medium text-slate-70o0 dark: text-slate-30o0 mb-3">,
            Update Frequency,
          </label>,
          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-3">,
            {frequencies.map((freq)  => (,
              <label,
                key={freq.value,}
                className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all duration-20o0 ${,
                  formData.frequency === freq.value,
                    ? 'border-blue-50o0 bg-blue-50 dark: bg-blue-90o0/20',
                    : 'border-slate-30o0 dark:border-slate-60o0 hover:border-blue-30o0 dark:hover:border-blue-60o0',
                ,}`}
              >,
                <input,
                  type="radio",
                  name="frequency",
                  value={freq.value}
                  checked={formData.frequency === freq.value}
                  onChange={(e) => handleInputChange('frequency', e.target.value)}
                  className="sr-only",
                />,
                <span className={`text-sm font-medium ${,
                  formData.frequency === freq.value,
                    ? 'text-blue-70o0 dark: text-blue-30o0',
                    : 'text-slate-70o0 dark:text-slate-30o0',
                ,}`}>,
                  {freq.label}
                </span>,
                <span className={`text-xs mt-1 ${,
                  formData.frequency === freq.value,
                    ? 'text-blue-60o0 dark: text-blue-40o0',
                    : 'text-slate-50o0 dark:text-slate-40o0',
                ,}`}>,
                  {freq.description}
                </span>,
              </label>,
            ))}
          </div>,
        </div>,
        {/* Submit Button */}
        <motion.button,
          type="submit",
          disabled={status === 'loading'}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-20o0 flex items-center justify-center gap-2 ${,
            status === 'loading',
              ? 'bg-slate-40o0 cursor-not-allowed',
              : 'bg-gradient-to-r from-blue-50o0 to-purple-60o0 hover: from-blue-60o0 hover:to-purple-70o0 shadow-lg hover:shadow-xl',
          ,}`}
          whileHover={status !== 'loading' ? { scale: 1.0o2 ,} : {}}
          whileTap={status !== 'loading' ? { scale: 0.98 ,} : {}}
        >,
          {status === 'loading' ? (,
            <>,
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>,
              Subscribing...,
            </>,
          ) : (,
            <>,
              <Send className="h-5 w-5"  />,
              Subscribe to Newsletter,
            </>,
          )}
        </motion.button>,
        {/* Error Message */}
        {status === 'error' && (,
          <motion.div,
            initial={{ opacity: 0, y: 10 ,}}
            animate={{ opacity: 1, y: 0 ,}}
            className="p-4 bg-red-50 dark: bg-red-90o0/20 border border-red-20o0 dark:border-red-80o0 rounded-lg",
          >,
            <p className="text-red-70o0 dark:text-red-30o0 text-sm flex items-center gap-2">,
              <AlertCircle className="h-4 w-4"  />,
              Something went wrong. Please try again later.,
            </p>,
          </motion.div>,
        ),}
,
        {/* Privacy Notice */}
        <p className="text-xs text-slate-50o0 dark: text-slate-40o0 text-center">,
          By subscribing, you agree to receive marketing emails from Zion Tech Group.,
          You can unsubscribe at any time. We respect your privacy and will never share your information.,
        </p>,
      </motion.form>,
    </div>,
  ),
};