  TrendingUp,
  BarChart3,
  Atom,
  Network,
=======
import React, { useState } from 'react.ts';
import { Link              } from 'react-router-dom.ts';
import { motion              } from 'framer-motion.ts';
import { Mail,
  Lock,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Lightbulb,
  Star as StarIcon,
  HelpCircle,
  BarChart as BarChartIcon,
  ShoppingCart,
  Clock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Zap,
  Users,
  CheckCircle
              } from 'lucide-react.ts';
export default function Signup(...args[]: any):  {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
