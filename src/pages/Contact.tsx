<<<<<<< HEAD
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
<<<<<<< HEAD
  Send, 
<<<<<<< HEAD
  MessageSquare, 
  Building, 
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
  CheckCircle,
  Globe,
  Building,
  Users,
  Shield,
  Brain
} from 'lucide-react';
=======
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
>>>>>>> origin/main
=======
import { SEO } from '../components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
=======
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
=======
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/build-and-fix-errors-e276
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
<<<<<<< HEAD
  MessageSquare, 
  Users, 
  Globe,
  Building,
  CheckCircle,
  ArrowRight,
  Shield,
  Brain,
  Cloud,
  Database,
  TrendingUp,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c

const ContactPage: React.FC = () => {
=======
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
=======
  Send, 
  CheckCircle, 
  MessageSquare,
  Globe,
  Building
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
>>>>>>> origin/cursor/build-and-fix-errors-e276
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    subject: '',
=======
=======
    phone: '',
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
    company: '',
    phone: '',
    service: '',
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
=======
    company: '',
    phone: '',
    service: '',
>>>>>>> origin/cursor/build-and-fix-errors-e276
    message: ''
=======
    message: '',
    budget: '',
    timeline: ''
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
  });
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  const [errors, setErrors] = useState<{[key: string]: string}>({});
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

<<<<<<< HEAD
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
<<<<<<< HEAD
=======
  const [isSubmitted, setIsSubmitted] = useState(false);
=======
import { useState } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
<<<<<<< HEAD
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
=======
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, MessageSquare, MapPin, Phone, Brain, Shield, Cloud, Code } from "lucide-react";
=======
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

export default function Contact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
<<<<<<< HEAD
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices = [
    {
      name: "Main Office",
      address: "364 E Main St STE 1008, Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
=======

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD

    const schema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email address"),
      subject: z.string().min(2, "Subject must be at least 2 characters"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    });

    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      }
      setErrors(fieldErrors);
      toast({
        title: "Form Validation Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setErrors({});

    // Simulate form submission
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant");
      }
      
      return Promise.resolve();
    } catch (error) {
      console.error("Error in AI chat:", error);
      toast({
        title: "Chat Error",
        description: "There was an error communicating with our AI assistant. Please try again.",
        variant: "destructive"
      });
      return Promise.resolve();
    }
  };

  const offices = [
    {
=======
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 302 464 0950",
      description: "Speak with our technology experts",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "kleber@ziontechgroup.com",
      description: "Send us a detailed message",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "364 E Main St STE 1008<br>Middletown DE 19709",
      description: "Our headquarters location",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 10:00 AM - 4:00 PM",
      description: "Eastern Time Zone",
      color: "from-orange-500 to-red-500"
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
    }
  ];
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
<<<<<<< HEAD
=======
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
<<<<<<< HEAD
    setErrors(prev => ({ ...prev, [name]: '' }));
=======
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
=======
  Github
} from 'lucide-react';

export default function Contact() {
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

<<<<<<< HEAD
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
>>>>>>> origin/cursor/build-and-fix-errors-e276
  };

<<<<<<< HEAD
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
=======
=======
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
  };

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
=======
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

=======
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
    e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    
    if (!validateForm()) {
      return;
    }

=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
    setIsSubmitting(true);
<<<<<<< HEAD
    
    // Simulate form submission
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await new Promise(resolve => setTimeout(resolve, 2000));
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    setSubmitStatus('success');
    setIsSubmitting(false);
=======
    // Here you would typically send the form data to your backend
    // Form submitted successfully - console.log removed for production
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-675b
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
=======
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
      setFormData({
        firstName: '',
        lastName: '',
=======
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
=======
=======
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-e276
      setIsSubmitted(false);
      setFormData({
        name: '',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
=======
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
      setIsSubmitted(false);
      setFormData({
        name: '',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
        email: '',
        company: '',
        phone: '',
        service: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        message: '',
        budget: '',
        timeline: '',
        preferredContact: 'email'
      });
<<<<<<< HEAD
    }, 3000);
=======
        message: ''
      });
<<<<<<< HEAD
    }, 5000);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
=======
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
        message: '',
        budget: '',
        timeline: ''
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }, 3000);
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
    }, 3000);
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
  };

  const contactMethods = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Phone,
<<<<<<< HEAD
      title: 'Phone',
<<<<<<< HEAD
<<<<<<< HEAD
      details: ['+1 (302) 464-0950', '+1 (800) 123-4567'],
      description: 'Speak directly with our team',
      action: 'Call Now',
=======
      value: '+1 (302) 464-0950',
<<<<<<< HEAD
>>>>>>> origin/main
      href: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-500'
=======
      value: '+1 302 464 0950',
      description: 'Call us directly for immediate assistance',
      action: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
      description: 'Call us directly for immediate assistance',
      action: () => window.location.href = 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Available 24/7 for urgent inquiries',
      action: 'tel:+13024640950',
      color: 'from-zion-cyan to-zion-cyan-dark'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    },
    {
      icon: Mail,
      title: 'Email',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      details: ['info@ziontechgroup.com', 'support@ziontechgroup.com'],
      description: 'Send us a detailed message',
      action: 'Send Email',
      href: 'mailto:info@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      details: ['Available 24/7', 'Instant response'],
      description: 'Chat with our support team',
      action: 'Start Chat',
      href: '#',
      color: 'from-green-500 to-emerald-500'
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      name: "Headquarters",
      address: "364 E Main St STE 1008, Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
<<<<<<< HEAD
    }
  ];

  return (
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Tech Plaza, Suite 100',
      zip: '10001',
      phone: '+1 (212) 555-0123',
      email: 'nyc@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'San Francisco',
      country: 'United States',
      address: '456 Innovation Drive, Floor 3',
      zip: '94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Business District, Office 5',
      zip: 'EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'
=======
      value: 'kleber@ziontechgroup.com',
<<<<<<< HEAD
      description: 'Send us an email for detailed inquiries',
      action: 'mailto:kleber@ziontechgroup.com',
=======
      description: 'Send us a detailed message',
      action: () => window.location.href = 'mailto:kleber@ziontechgroup.com',
>>>>>>> origin/cursor/build-and-fix-errors-e276
      color: 'from-blue-500 to-cyan-500'
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
      value: 'kleber@ziontechgroup.com',
      description: 'Get a response within 2 hours',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-zion-purple to-zion-purple-dark'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '364 E Main St STE 1008, Middletown DE 19709',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Visit our headquarters in Delaware',
      action: '#',
      color: 'from-purple-500 to-pink-500'
=======
      description: 'Visit us for in-person consultations',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-zion-cyan to-zion-purple'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
      description: 'Visit us for in-person consultations',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-zion-cyan to-zion-purple'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
      description: 'Visit us for in-person consultations',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-zion-cyan to-zion-purple'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    },
    {
      icon: Clock,
      title: 'Business Hours',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: '24/7 emergency support available',
      action: '#',
      color: 'from-orange-500 to-yellow-500'
=======
      title: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      description: "Send us an email for detailed inquiries"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      description: "Visit our office for in-person meetings"
    },
    {
      icon: Globe,
      title: "Website",
      value: "https://ziontechgroup.com",
      link: "https://ziontechgroup.com",
      description: "Explore our services and solutions"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
=======
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Get a quick response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (302) 464-0950',
      link: 'tel:+13024640950',
      description: 'Available Monday-Friday, 9AM-6PM EST'
=======
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 302 464 0950', 'Available 24/7'],
      color: 'from-zion-cyan to-zion-purple',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['kleber@ziontechgroup.com', 'Quick response guaranteed'],
      color: 'from-zion-purple to-zion-cyan',
      action: 'mailto:kleber@ziontechgroup.com'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
    },
    {
      icon: MapPin,
      title: 'Visit Us',
<<<<<<< HEAD
      value: '364 E Main St STE 1008, Middletown, DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Main office location'
=======
      description: 'Visit our office for in-person meetings',
      action: () => window.open('https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'),
      color: 'from-purple-500 to-pink-500'
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      color: 'from-zion-cyan to-zion-blue-light',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
    },
    {
      icon: Clock,
      title: 'Business Hours',
<<<<<<< HEAD
<<<<<<< HEAD
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      link: null,
      description: 'Weekend support available for urgent matters'
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (302) 464-0950",
      link: "tel:+13024640950"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "364 E Main St STE 1008, Middletown, DE 19709",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      link: "#"
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      description: 'We\'re available during business hours',
      action: null,
      color: 'from-orange-500 to-red-500'
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
      details: ['Monday - Friday: 9AM - 6PM EST', 'Weekend: By appointment'],
      color: 'from-zion-purple to-zion-cyan',
      action: null
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
      value: 'Mon-Fri: 9AM-6PM EST',
      description: 'Extended hours available by appointment',
      action: null,
      color: 'from-zion-purple to-zion-cyan'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    }
  ];

  const services = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    'AI & Autonomous Systems',
    'Cybersecurity Services',
    'Quantum Technology',
    'Cloud & Infrastructure',
    'Digital Transformation',
    'Industry Solutions',
    'Custom Development',
    'Consulting Services'
  ];

  const officeLocations = [
    {
      city: 'Middletown, DE',
      address: '364 E Main St STE 1008, Middletown DE 19709',
      country: 'United States',
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      timezone: 'EST (UTC-5)',
      description: 'Our headquarters and primary development center'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/zion-tech-group',
      icon: '💼',
      description: 'Follow us for industry insights and updates'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: '🐦',
      description: 'Get real-time updates and announcements'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Zion-Holdings',
      icon: '💻',
      description: 'Explore our open-source projects and contributions'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ziontechgroup',
      icon: '📺',
      description: 'Watch our latest demos and tutorials'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    }
  ];
=======

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your message. We'll get back to you as soon as possible.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="w-full"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }
>>>>>>> origin/main

  const services = [
    'AI & Machine Learning',
    'Quantum Technology',
    'Cybersecurity',
    'Cloud Migration',
    'Digital Transformation',
    'IT Infrastructure',
    'Micro-SaaS Development',
    'Business Intelligence',
    'Custom Software Development',
    'Consulting Services'
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'DevOps & Automation',
    'Blockchain',
    'IoT Solutions',
    'Digital Marketing',
    'IT Consulting',
    'Software Testing',
    'Other'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
  ];

  const budgets = [
    'Under $10,000',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000'
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'Flexible'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    "AI & Machine Learning",
    "Micro SAAS Solutions",
    "Cloud & DevOps",
    "Digital Transformation",
    "Enterprise Solutions",
    "IT Consulting",
    "Custom Development",
    "Other"
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-zion-slate-light mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Global Service</span>
              </div>
            </div>
          </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge AI and technology solutions? 
            Let's start a conversation about your digital transformation journey.
          </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{method.title}</h3>
                  <div className="space-y-2 mb-4">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  <a
                    href={method.href}
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                  >
                    {method.action}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss how our solutions 
            can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              24/7 Support
            </span>
            <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
              Free Consultation
            </span>
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Global Reach
            </span>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-zion-cyan font-medium mb-2">{method.value}</p>
                  <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>
                  {method.action && (
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      {method.action.startsWith('tel:') ? 'Call Now' : 
                       method.action.startsWith('mailto:') ? 'Send Email' : 'Get Directions'}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-zion-cyan" />
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again or contact us directly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                      Email *
                    </label>
                    <input
                      type="email"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
=======
    "AI Workflow Automation",
    "Quantum Computing as a Service",
    "AI Cybersecurity Platform",
    "Edge Computing Platform",
    "Micro SAAS Solutions",
    "AI Business Intelligence",
    "Cloud & DevOps",
    "Enterprise Solutions",
    "Digital Transformation",
    "Custom Development"
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const responseTimes = [
    { type: "Phone Calls", time: "Immediate" },
    { type: "Emails", time: "Within 2 hours" },
    { type: "Contact Form", time: "Within 4 hours" },
    { type: "Support Tickets", time: "Within 24 hours" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with Zion Tech Group. Contact us for AI solutions, micro SAAS services, and innovative technology consulting. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        keywords="contact Zion Tech Group, AI consulting, micro SAAS services, technology consulting, Delaware tech company"
        canonical="https://ziontechgroup.com/contact"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-2xl text-zion-cyan mb-4 font-semibold">
            Let's Build Something Amazing Together
          </p>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI solutions, micro SAAS services, 
            and innovative technology? Contact us today and let's discuss how we can help you succeed.
          </p>
=======
    'Custom Software Development',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Digital Transformation',
    'Data Analytics',
    'Mobile App Development',
    'Enterprise Solutions',
=======
    'AI & Machine Learning',
    'Cloud Migration',
    'Cybersecurity',
    'Digital Transformation',
    'Web Development',
    'Mobile Development',
>>>>>>> origin/cursor/build-and-fix-errors-e276
    'IT Consulting',
    'Data Analytics',
    'Business Process Automation',
    'Custom Software Development'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Ready to transform your business? Let's discuss how our technology 
              solutions can help you achieve your goals.
            </p>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Ready to transform your business? Let's discuss how our innovative solutions 
            can drive your success. We're here to help you navigate the future of technology.
          </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
        </div>
      </section>

      {/* Contact Information */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
=======
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
<<<<<<< HEAD
              Multiple ways to reach us. We're here to help you succeed with innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-10 h-10 text-white" />
=======
              Multiple ways to reach us. We're here to help with all your technology needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <info.icon className="w-12 h-12 text-zion-cyan" />
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {info.title}
                </h3>
<<<<<<< HEAD
                <a 
                  href={info.link} 
                  target={info.title === "Website" ? "_blank" : "_self"}
                  rel={info.title === "Website" ? "noopener noreferrer" : ""}
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors block mb-2"
                >
                  {info.value}
                </a>
                <p className="text-zion-slate text-sm">
=======
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-zion-cyan hover:text-zion-cyan-light font-medium mb-2 block transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-zion-slate font-medium mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-zion-slate-light text-sm">
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
                  {info.description}
                </p>
              </div>
            ))}
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light mb-2">+1 (302) 464-0950</p>
              <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light mb-2">kleber@ziontechgroup.com</p>
              <p className="text-zion-slate-light text-sm">24/7 Support Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light mb-2">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light text-sm">Middletown, DE 19709</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-zion-slate-light mb-2">Monday - Friday</p>
              <p className="text-zion-slate-light text-sm">9:00 AM - 6:00 PM EST</p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      <SEO 
        title="Contact Us - Get Expert Technology Consultation | Zion Tech Group"
        description="Ready to transform your business? Contact Zion Tech Group for expert technology consultation, AI solutions, and digital transformation services. Call +1 (302) 464-0950."
        canonical="/contact"
      />
      
      <FuturisticAnimatedBackground intensity="medium" />

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
=======
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & DevOps',
    'Blockchain & Web3',
    'IoT & Edge Computing',
    'Quantum Computing',
    'Data & Analytics',
    'Custom Development'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-marketplace', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/lovable_dev', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/zionmarketplace', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
              📞 Get In Touch
            </Badge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Let's Transform Your
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
                Business Together
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to take your business to the next level? Our team of technology 
              experts is here to help you implement innovative solutions that drive 
              growth and competitive advantage.
            </motion.p>
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Ready to start your digital transformation journey? Our team of experts is here to help 
              you choose the perfect solutions for your business needs.
            </p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Methods Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card 
                  className={`bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center cursor-pointer ${
                    method.action ? 'hover:shadow-2xl hover:shadow-zion-cyan/20' : ''
                  }`}
                  onClick={method.action || undefined}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-zion-cyan font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {method.description}
                  </p>
                </Card>
              </motion.div>
            ))}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
      {/* Contact Information */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us. We're here to help you succeed with your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className={`text-zion-slate-light ${idx === 0 ? 'mb-2' : 'mb-4'}`}>
                    {detail}
                  </p>
                ))}
                {info.action && (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block bg-white/10 text-zion-cyan hover:bg-zion-cyan hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    {info.action.includes('tel:') ? 'Call Now' : info.action.includes('mailto:') ? 'Send Email' : 'Get Directions'}
                  </a>
                )}
              </motion.div>
            ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Business Hours & Response Times */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-zion-cyan" />
                Business Hours
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-zion-blue-light last:border-b-0">
                    <span className="font-semibold text-zion-blue-dark">{schedule.day}</span>
                    <span className="text-zion-slate">{schedule.hours}</span>
=======
      {/* Contact Form Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/30 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-zion-slate-light text-lg">
                  Tell us about your project and we'll get back to you within 2 hours
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-zion-slate-light">
                    Thank you for contacting us. We'll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your email"
                      />
                    </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Response Times */}
            <div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-zion-cyan" />
                Response Times
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {responseTimes.map((response, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-zion-blue-light last:border-b-0">
                    <span className="font-semibold text-zion-blue-dark">{response.type}</span>
                    <span className="text-zion-cyan font-semibold">{response.time}</span>
=======
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your phone number"
                      />
                    </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
=======
      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-zion-slate max-w-3xl mx-auto">
<<<<<<< HEAD
                Tell us about your project or inquiry. We'll get back to you within 4 hours 
                with a personalized response and next steps.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for contacting Zion Tech Group. We'll get back to you within 4 hours 
                  with a detailed response and next steps for your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zion-blue-light rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
<<<<<<< HEAD
                    <label htmlFor="name" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                      Phone Number
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
=======
                      className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
<<<<<<< HEAD

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI-powered solutions can drive your success.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
=======
      {/* Contact Form */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Send Us a Message</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a customized solution.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-12 text-center"
            >
              <CheckCircle className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p className="text-zion-slate-light text-lg">
                Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
<<<<<<< HEAD
                  <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter your email"
=======
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your email address"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
                  />
                </div>
              </div>

<<<<<<< HEAD
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-2">
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
<<<<<<< HEAD
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
=======
                    <label className="block text-white font-medium mb-2">
                      Service of Interest
>>>>>>> origin/cursor/build-and-fix-errors-e276
                    </label>
                    <select
                      name="service"
                      value={formData.service}
<<<<<<< HEAD
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
=======
                      onChange={handleSelectChange}
                      className="w-full bg-zion-slate-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 focus:border-zion-cyan focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
>>>>>>> origin/cursor/build-and-fix-errors-e276
                      ))}
                    </select>
                  </div>
                  <div>
<<<<<<< HEAD
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
=======
                    <label className="block text-white font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
>>>>>>> origin/cursor/build-and-fix-errors-e276
                  </div>
                </div>

<<<<<<< HEAD
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline
=======

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-semibold text-zion-blue-dark mb-2">
                    Service of Interest
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
<<<<<<< HEAD
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
=======
                    className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

<<<<<<< HEAD
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
=======
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-zion-blue-dark mb-2">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
<<<<<<< HEAD
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    {['email', 'phone'].map((method) => (
                      <label key={method} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleInputChange}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="text-gray-300 capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
=======
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, requirements, and goals..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-4 px-8 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
<<<<<<< HEAD
                      <span>Sending Message...</span>
=======
                      <span>Sending...</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
<<<<<<< HEAD
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Our Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {office.city}, {office.country}
                        </h3>
                        <div className="space-y-2 text-gray-300">
                          <p className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{office.address}, {office.city}, {office.zip}</span>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${office.phone}`} className="hover:text-cyan-400 transition-colors">
                              {office.phone}
                            </a>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <a href={`mailto:${office.email}`} className="hover:text-cyan-400 transition-colors">
                              {office.email}
                            </a>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{office.hours}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Instagram, href: '#', label: 'Instagram' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                {method.action.startsWith('tel:') || method.action.startsWith('mailto:') ? (
                  <a
                    href={method.action}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-cyan-400 font-medium">{method.value}</p>
                )}
              </div>
            ))}
=======
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-zion-blue-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Main Content */}
=======
      {/* Contact Form & Map */}
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
<<<<<<< HEAD
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
=======
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your full name"
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
=======
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-cyan-400" />
                  Office Locations
                </h3>
                {officeLocations.map((location, index) => (
                  <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-white mb-2">{location.city}</h4>
                    <p className="text-gray-400 text-sm mb-2">{location.address}</p>
                    <p className="text-gray-400 text-sm mb-2">{location.country}</p>
                    <p className="text-gray-400 text-sm mb-2">Timezone: {location.timezone}</p>
                    <p className="text-gray-400 text-sm mb-2">{location.description}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-200 group"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <p className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {social.name}
                        </p>
                        <p className="text-xs text-gray-400">{social.description}</p>
                      </div>
                    </a>
=======
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-zion-blue-dark text-white">
                      {service}
                    </option>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                  ))}
                </select>
              </div>
<<<<<<< HEAD

              {/* Why Contact Us */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                  Why Contact Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400 mt-1" />
                    <p className="text-gray-400 text-sm">Expert consultation on AI and emerging technologies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400 mt-1" />
                    <p className="text-gray-400 text-sm">Cybersecurity assessment and implementation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-cyan-400 mt-1" />
                    <p className="text-gray-400 text-sm">Custom solution development for your business</p>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
                </div>
              </div>
=======
      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Expert Team
              </h3>
              <p className="text-zion-slate">
                Our team of AI experts, software engineers, and business consultants bring 
                decades of combined experience to every project.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Proven Results
              </h3>
              <p className="text-zion-slate">
                We've helped hundreds of businesses achieve their digital transformation 
                goals with measurable ROI and lasting impact.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Innovation First
              </h3>
              <p className="text-zion-slate">
                We stay ahead of technology trends, ensuring your business benefits from 
                the latest innovations and best practices.
              </p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
=======
                Fill out the form below and we'll get back to you within 24 hours. 
                Let's discuss your project requirements and how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zion-blue-dark mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zion-blue-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Prefer a different approach? We offer multiple ways to get in touch and start your project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Live Chat
              </h3>
              <p className="text-zion-slate mb-6">
                Get instant answers to your questions with our live chat support during business hours.
              </p>
              <button className="px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Schedule a Call
              </h3>
              <p className="text-zion-slate mb-6">
                Book a convenient time for a detailed discussion about your project requirements.
              </p>
              <Link 
                to="/request-quote"
                className="inline-block px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Book Call
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Request Quote
              </h3>
              <p className="text-zion-slate mb-6">
                Get a detailed quote for your specific project requirements and timeline.
              </p>
              <Link 
                to="/request-quote"
                className="inline-block px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Quote
              </Link>
=======
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
=======
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                      Company
                    </label>
                    <input
                      type="text"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="micro-saas">Micro SAAS Services</option>
                    <option value="ai-services">AI & Machine Learning</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="enterprise-solutions">Enterprise Solutions</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(timeline => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                  </select>
                </div>

                <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
                <div className="bg-zion-slate-dark h-64 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-zion-slate-light">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-zion-cyan" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Map integration coming soon</p>
                  </div>
                </div>
                <div className="space-y-3 text-zion-slate-light">
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                  <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4 text-zion-slate-light">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Expert team with 15+ years of experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Cutting-edge AI and machine learning solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>24/7 support and maintenance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Proven track record of successful projects</p>
                  </div>
                </div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Quick answers to common questions about working with Zion Tech Group.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-zion-slate">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, we can provide faster response times.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                Do you offer free consultations?
              </h3>
              <p className="text-zion-slate">
                Yes, we offer free initial consultations to discuss your project requirements 
                and determine how we can best help you achieve your goals.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                What industries do you specialize in?
              </h3>
              <p className="text-zion-slate">
                We work across multiple industries including healthcare, finance, manufacturing, 
                retail, education, government, and technology. Our solutions are adaptable to any sector.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                How do you ensure project quality and security?
              </h3>
              <p className="text-zion-slate">
                We follow industry best practices, conduct thorough testing, implement security 
                measures, and provide ongoing support to ensure your solutions are robust and secure.
              </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What services does Zion Tech Group offer?</h3>
              <p className="text-zion-slate-light">
                We offer a comprehensive range of services including micro SAAS development, AI and machine learning solutions, 
                cloud infrastructure, digital transformation consulting, and enterprise technology solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">How quickly can you start working on my project?</h3>
              <p className="text-zion-slate-light">
                We typically begin project planning within 48 hours of initial contact. Actual development start dates 
                depend on project scope and current capacity, but we aim to start within 1-2 weeks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support after project completion?</h3>
              <p className="text-zion-slate-light">
                Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and 24/7 
                technical support to ensure your solution continues to perform optimally.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-zion-slate-light">
                We work across various industries including healthcare, finance, manufacturing, retail, education, 
                and technology. Our solutions are adaptable to any sector that can benefit from digital transformation.
              </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
            </div>
          </div>
=======
                  <div className="text-center">
                    <FuturisticNeonButton
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="text-lg px-8 py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </FuturisticNeonButton>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Business Information Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-zion-cyan">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We're not just another technology company. We're your strategic partner 
                in digital transformation and business innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Experience</h3>
                <p className="text-zion-slate-light">
                  Over 10 years of experience working with Fortune 500 companies and 
                  startups alike, delivering scalable solutions that grow with your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-zion-slate-light">
                  Serving clients worldwide with remote-first approach, ensuring 
                  quality delivery regardless of your location or timezone.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-zion-slate-light">
                  Round-the-clock support and maintenance, ensuring your systems 
                  run smoothly and your business never stops growing.
                </p>
              </motion.div>
            </div>
          </motion.div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Follow us on social media for the latest updates, insights, and technology trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-zion-cyan" />
                Social Media
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-zion-cyan" />
                Additional Information
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
                  <p className="text-zion-slate-light">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Consultation</h4>
                  <p className="text-zion-slate-light">Free initial consultation to discuss your project requirements and goals.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
                  <p className="text-zion-slate-light">24/7 technical support available for all our enterprise clients.</p>
                </div>
              </div>
            </motion.div>
          </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a free consultation with our experts to discuss your project requirements 
            and discover how we can help you achieve your business goals.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our AI and technology solutions can help you achieve your business goals.
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Don't wait to transform your business. Contact us today and let's discuss 
            how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
<<<<<<< HEAD
            <a
              href="mailto:info@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
=======
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            </a>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
=======
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-all flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3dcd
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full ${errors.subject ? 'border-red-500' : ''}`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Don't wait to transform your business. Contact us today and let's discuss 
            how our technology solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Call Now
            </a>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Don't wait to transform your business. Contact us today and let's discuss how we can help 
            you achieve your technology goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">info@ziontechgroup.com</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Tech Street, Innovation City</p>
>>>>>>> origin/main
          </div>
        </div>
=======

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      {info.link !== "#" ? (
                        <a
                          href={info.link}
                          className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-zion-slate-light">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Custom AI Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Enterprise-Grade Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Scalable Micro SAAS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Proven Track Record</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <p className="text-zion-slate-light mb-4">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="text-sm text-zion-slate-light">
                <p><strong>Emergency Support:</strong> Available 24/7 for critical issues</p>
                <p><strong>General Inquiries:</strong> Within 24 hours</p>
                <p><strong>Project Quotes:</strong> Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======


const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Get in touch with our team of experts to discuss your technology needs.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Website:</strong> ziontechgroup.com</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get Started</h3>
              <p className="text-gray-300 mb-4">
                Ready to transform your business? Contact us today for a free consultation.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
      </div>
    </div>
=======
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 302 464 0950",
      description: "Available 24/7 for urgent matters",
      color: "text-zion-cyan"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "kleber@ziontechgroup.com",
      description: "Get a response within 2 hours",
      color: "text-zion-purple"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      description: "Schedule an in-person meeting",
      color: "text-zion-cyan"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed (Emergency support available)" }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for your business needs"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols protect your data"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable solutions that grow with your business"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions built specifically for you"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const services = [
    "AI & Autonomous Systems",
    "Quantum Technology",
    "Cybersecurity",
    "IT Infrastructure",
    "Micro SAAS Solutions",
    "Industry Solutions",
    "Custom Development",
    "Consulting Services"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Link 
            to="/" 
            className="btn-primary text-lg px-8 py-4"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <>
      <SEO
        title="Contact Zion - Get in Touch"
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform."
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Whether you have a question about our platform, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>
=======
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how our innovative solutions can drive your success.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Contact Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach our technology experts
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <div 
                  className="text-cyan-400 font-medium mb-2"
                  dangerouslySetInnerHTML={{ __html: method.details }}
                />
                <p className="text-gray-400 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you with a customized solution
              </p>
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
<<<<<<< HEAD
                      onChange={handleChange}
=======
                      onChange={handleInputChange}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
<<<<<<< HEAD
                      onChange={handleChange}
=======
                      onChange={handleInputChange}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
<<<<<<< HEAD
                    onChange={handleChange}
=======
                    onChange={handleInputChange}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="How can we help you?"
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
<<<<<<< HEAD
                    onChange={handleChange}
=======
                    onChange={handleInputChange}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    className={`bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="Tell us what you'd like to know..."
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
<<<<<<< HEAD
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                        <span className="text-zion-slate-light">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-zion-cyan hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
<<<<<<< HEAD

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-75.7166667!3d39.4500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2s364%20E%20Main%20St%2C%20Middletown%2C%20DE%2019709!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Office Location - Middletown, DE"
                ></iframe>
<<<<<<< HEAD
              </div>
              
              <div className="mt-8">
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">
                  <div className="flex items-center">
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">
                      <MessageSquare className="h-6 w-6 text-zion-purple" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  >
                    Chat With Our AI Assistant
                  </Button>
                </Card>
              </div>
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project, requirements, or questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of Delaware's technology corridor
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group Headquarters</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">364 E Main St STE 1008</p>
                      <p>Middletown DE 19709</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need immediate assistance?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Our customer support team is available 24/7 to help you with any questions.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With AI
              </Button>
              <Button 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Assistant Modal */}
      {isChatOpen && (
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{
            id: 'ai-assistant',
            name: 'AI Assistant',
            avatarUrl: 'https://placehold.co/64x64?text=AI',
            role: 'Support Bot'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  );
}
=======
=======
              <div className="bg-gray-700/50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Get Directions</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Our office is easily accessible from major highways and public transportation
                </p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Chat Assistant Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-zion-slate-dark p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-white text-lg font-bold mb-4">AI Assistant</h3>
            <p className="text-zion-slate-light mb-4">Chat functionality coming soon!</p>
            <Button onClick={() => setIsChatOpen(false)}>Close</Button>
          </div>
        </div>
      )}
    </>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default ContactPage;
=======
export default Contact;
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
export default Contact;
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
export default Contact;
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
=======
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (302) 464-0950",
      description: "Call us directly for immediate assistance",
      color: "text-zion-cyan"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      description: "Send us a detailed message anytime",
      color: "text-zion-purple"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown, DE 19709",
      description: "Visit our headquarters",
      color: "text-zion-cyan"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      description: "We're here when you need us",
      color: "text-zion-purple"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      description: "Custom AI development and ML solutions",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-5 w-5" />,
      description: "Security audits and compliance",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-5 w-5" />,
      description: "Cloud migration and DevOps",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Data & Analytics",
      icon: <Database className="h-5 w-5" />,
      description: "Big data and business intelligence",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Digital Transformation",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Strategic consulting and implementation",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "Micro SAAS Solutions",
      icon: <Zap className="h-5 w-5" />,
      description: "Custom business applications",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];

  const timelineOptions = [
    "Immediate (1-2 weeks)",
    "Quick (1-2 months)",
    "Standard (3-6 months)",
    "Long-term (6+ months)"
  ];

  return (
    <>
      <SEO 
        title="Contact Zion Tech Group - Get Expert Tech Consultation" 
        description="Contact our team of technology experts for AI, cybersecurity, and digital transformation solutions. Get a free consultation today."
        keywords="contact, consultation, AI services, cybersecurity, tech support, Zion Tech Group"
      />
      <Header />
      
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? 
                Our team of experts is here to help you achieve your goals.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/30 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="flex items-center text-zion-cyan">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center text-zion-cyan">
                    <Mail className="h-5 w-5 mr-2" />
                    <span className="font-medium">kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt-3 text-sm text-zion-slate-light">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  364 E Main St STE 1008, Middletown, DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-zion-blue-light bg-zion-blue-dark/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Get Your Free Consultation</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Tell us about your project and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitSuccess ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                        <p className="text-zion-slate-light">
                          We've received your message and will get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              First Name *
                            </label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Last Name *
                            </label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Email *
                            </label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="john@company.com"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Phone
                            </label>
                            <Input
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-zion-cyan mb-2 block">
                            Company
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                            placeholder="Your Company Name"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium text-zion-cyan mb-2 block">
                            Service Interest *
                          </label>
                          <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                            <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                              <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                              <SelectItem value="cloud-infrastructure">Cloud & Infrastructure</SelectItem>
                              <SelectItem value="data-analytics">Data & Analytics</SelectItem>
                              <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                              <SelectItem value="micro-saas">Micro SAAS Solutions</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Budget Range
                            </label>
                            <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>{range}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Timeline
                            </label>
                            <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                {timelineOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-zion-cyan mb-2 block">
                            Project Details *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                            placeholder="Tell us about your project, goals, and requirements..."
                          />
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              Send Message
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-zion-blue-dark/50 border border-zion-purple/30 ${info.color}`}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-zion-cyan font-medium mb-1">{info.value}</p>
                          <p className="text-sm text-zion-slate-light">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Categories */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceCategories.map((service, index) => (
                      <div key={index} className="p-4 bg-zion-blue-dark/50 rounded-lg border border-zion-purple/30 hover:border-zion-purple/50 transition-colors">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                            {service.icon}
                          </div>
                          <h4 className="font-semibold text-white">{service.name}</h4>
                        </div>
                        <p className="text-sm text-zion-slate-light">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Expert team with 10+ years experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Proven track record of successful projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Competitive pricing and transparent costs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">24/7 support and ongoing maintenance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">Industry-leading security and compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto text-lg">
              Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                asChild
              >
                <Link to="/request-quote">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request Free Quote
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
<<<<<<< HEAD
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
=======
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
export default Contact;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
=======
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business. Contact us today and let's 
                discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'tel:+13024640950'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Call Now
                </FuturisticNeonButton>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request'}
                  className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4"
                >
                  Schedule Consultation
                </Button>
              </div>
            </Card>
=======
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait to transform your business. Contact us today and let's discuss how our 
              revolutionary technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Email</span>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Contact;
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              {/* Office Location */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  Our Office
                </h3>
                <div className="space-y-3 text-zion-slate-light">
                  <p className="text-lg font-medium text-white">Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                </div>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors mt-4"
                >
                  <Globe className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-zion-cyan" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                  <div className="pt-3 border-t border-zion-purple/20">
                    <p className="text-zion-cyan text-sm">
                      Emergency support available 24/7 for critical issues
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-3 text-zion-slate-light">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>10+ years of industry experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>500+ successful projects delivered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Global team of experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>24/7 support and maintenance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Competitive pricing and flexible terms</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
=======
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't wait to transform your business with cutting-edge technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/get-started" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
