  TrendingUp,
  BarChart3,
  Atom,
  Network,
=======
import React, { useState } from 'react.ts';
import { Link              } from 'react-router-dom.ts';
import { motion              } from 'framer-motion.ts';
import { Mail,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
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
