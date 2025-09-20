import React, { useState, useCallback } from 'react',
import { motion } from 'framer-motion',
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react',
import { AnimatePresence } from 'framer-motion',

interface ContactFormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string
}

interface ContactFormProps {
  isReducedMotion?: boolean,
}

const ContactForm: React.FC<ContactFormProps> = ({ isReducedMotion = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  }),
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({}),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),

  const services = [
    'AI & Machine LearningQuantum Computing',
    'Space TechnologyCybersecurity',
    'Cloud SolutionsMicro SaaS',
    'Enterprise ITOther'
  ],

  const validateField = useCallback((name: keyof ContactFormData, value: string): string => {
    switch (name) {
      case 'name': {
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      }
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '',
      }
      case 'phone': {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/,
        return value && !phoneRegex.test(value.replace(/\s/g, '')) ? 'Please enter a valid phone number' : '',
      }
      case 'message': {
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '',
      }
      default: {
        return ''
      }
    }
  }, []),

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value })),
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' })),
    }
  }, [errors]),

  const handleBlur = useCallback((name: keyof ContactFormData) => {
    const error = validateField(name, formData[name]),
    setErrors(prev => ({ ...prev, [name]: error })),
  }, [validateField, formData]),

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<ContactFormData> = {},
    let isValid = true,

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof ContactFormData,
      const error = validateField(fieldName, formData[fieldName]),
      if (error) {
        newErrors[fieldName] = error,
        isValid = false,
      }
    }),

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value })),
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' })),
    }
  },

  const handleBlur = (name: string) => {
    const error = validateField(name, formData[name]),
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error })),
    }
  },

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {},
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]),
      if (error) {
        newErrors[key] = error,
      }
    }),
    
    setErrors(newErrors),
    return isValid,
  }, [formData, validateField]),

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault(),
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true),
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setSubmitStatus('success'),
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      }),
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000),
    } catch {
      setSubmitStatus('error'),
      setTimeout(() => setSubmitStatus('idle'), 5000),
    } finally {
      setIsSubmitting(false),
    }
  }, [validateForm]),

  const inputClasses = "w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300",
  const errorClasses = "text-red-400 text-sm mt-1 flex items-center gap-2",

const ContactForm: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ContactForm</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default ContactForm,
